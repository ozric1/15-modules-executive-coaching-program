const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { GoogleGenAI } = require('@google/genai');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Set up Multer for handling file uploads (simulating video processing)
const upload = multer({ dest: 'uploads/' });

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// 1. Communication Sandbox Endpoint
app.post('/api/sandbox', async (req, res) => {
    try {
        const { message, context } = req.body;
        
        // System instruction acting as a Skeptical CTO or Direct Report
        const prompt = `
Context: ${context || 'You are a skeptical CTO. The user is a technical leader trying to communicate an idea.'}
User Message: "${message}"

Respond to the user in character. After your response, provide a brief "Sentiment & Clarity Score" out of 10 based on how well they communicated their point. Format the response as JSON:
{
  "response": "your in-character response",
  "score": "8/10",
  "feedback": "brief feedback on their clarity and tone"
}`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-pro',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
            }
        });

        const aiOutput = JSON.parse(response.text);
        res.json(aiOutput);
    } catch (error) {
        console.error('Error in Sandbox API:', error);
        res.status(500).json({ error: 'Failed to generate response' });
    }
});

// 2. Technical-to-Human Translator Endpoint
app.post('/api/translator', async (req, res) => {
    try {
        const { technicalUpdate } = req.body;

        const prompt = `
You are an expert communication coach. Take the following technical update and refactor it into three distinct versions:
1. The Executive Summary (focus on ROI, business impact, and high-level strategy for the CEO).
2. The Stakeholder Impact (focus on what this means for Marketing/Sales and the product timeline).
3. The Team Direction (focus on clear, actionable next steps and technical goals for the Devs).

Technical Update:
"${technicalUpdate}"

Return a JSON object with these exactly:
{
  "executiveSummary": "...",
  "stakeholderImpact": "...",
  "teamDirection": "..."
}
`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-pro',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
            }
        });

        const translated = JSON.parse(response.text);
        res.json(translated);
    } catch (error) {
        console.error('Error in Translator API:', error);
        res.status(500).json({ error: 'Failed to translate' });
    }
});

// 3. Automated Video Analysis (Mocked Pipeline)
app.post('/api/analyze-video', upload.single('video'), async (req, res) => {
    try {
        // In a real scenario, we'd pass req.file to Whisper API for transcription,
        // then pass the transcript to Gemini. Here we mock the transcription for the demo.
        const mockTranscript = "Uh, so, we are going to, like, build this thing using React. It's gonna be, you know, pretty fast.";
        
        const prompt = `
Analyze the following presentation transcript. 
Identify "crutch words" (like, um, uh, you know).
Identify "energy gaps" or weak rhetoric.
Suggest better rhetorical transitions based on business communication principles.

Transcript: "${mockTranscript}"

Return as JSON:
{
  "crutchWords": ["uh", "like", "you know"],
  "feedback": "...",
  "suggestions": ["..."]
}
`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-pro',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
            }
        });

        const analysis = JSON.parse(response.text);
        res.json(analysis);
    } catch (error) {
        console.error('Error in Video Analysis API:', error);
        res.status(500).json({ error: 'Failed to analyze video' });
    }
});

// 4. Smart "Nudge" System (WhatsApp Webhook Placeholder)
app.post('/api/whatsapp-webhook', express.json(), (req, res) => {
    console.log('Received WhatsApp Nudge Feedback:', req.body);
    // Here we would use Meta API or Twilio to parse the voice note/text,
    // transcribe it using Whisper if it's audio, and save it to the DB.
    res.status(200).send('Webhook received');
});

// Basic health check
app.get('/health', (req, res) => res.send('Server is running'));

app.listen(port, () => {
    console.log(\`Zentia API listening on port \${port}\`);
});
