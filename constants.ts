import { CourseData } from './types';

export const COURSE_DATA: CourseData = {
    0: {
        type: 'intro',
        title: "Course Introduction",
    },
    1: {
        title: "Unit 1: The Executive First Impression",
        subtitle: "Executive Presence",
        context: "At the C-suite level, introductions are not about names; they are about immediate strategic value. You must master the art of the 'Executive Bridge'—leveraging high-level networks to establish instant credibility. This unit focuses on projecting authority and agility in the first 60 seconds of interaction.",
        objectives: [
            "Leverage the 'Executive Bridge' technique to establish instant peer-level credibility.",
            "Differentiate between 'Operational Authority' (Simple) and 'Strategic Agility' (Continuous).",
            "Master diplomatic scheduling to control the engagement timeline."
        ],
        greeting: { text: "Teaser: You have 30 seconds with a potential strategic partner. Do you focus on your title, or your current high-stakes initiative? Discuss." },
        slides: [
            {
                title: "Strategic Introductions",
                context: "Notice how Speaker A uses a mutual industry heavyweight to bypass the gatekeeping phase, and pivots immediately to a strategic bottleneck.",
                dialogue: [
                    {spk:"A",txt:"Excuse me, are you Sean McFee? I recognized you from the Davos panel last year."}, 
                    {spk:"B",txt:"Yes, that's me. I'm afraid I don't recall our meeting?"},
                    {spk:"A",txt:"I'm Ivan Formanek. Sarah Jenkins suggested I connect with you. She mentioned you were restructuring your APAC supply chain."},
                    {spk:"B",txt:"Ah, Sarah! Yes, her insights are invaluable. We are indeed facing some headwinds in that region."},
                    {spk:"A",txt:"I thought as much. My firm is currently implementing a rapid turnaround strategy for a similar logistics bottleneck in Munich."},
                    {spk:"B",txt:"That is highly relevant. We're looking for scalable mitigation strategies right now."},
                    {spk:"A",txt:"We should align on this. I suggest we touch base when you have more bandwidth?"},
                    {spk:"B",txt:"Agreed. My schedule is impacted by the merger talks, however."},
                    {spk:"A",txt:"Understood. Let's say, provisionally, Tuesday at 10:00? We can confirm closer to the date."},
                    {spk:"B",txt:"Tuesday works. Send the invite."}
                ],
                bad: ["I want to talk to you.", "My company is good.", "Can we meet?"],
                good: ["Sarah Jenkins suggested I connect with you.", "My firm is currently implementing...", "We should align on this."],
                expressions: ["Sarah Jenkins suggested I connect with you.", "We are facing some headwinds...", "We should align on this.", "When you have more bandwidth?"]
            }
        ],
        expressionBank: {
            title: "Executive Networking & Scheduling",
            phrases: [
                "I was advised to connect with you by...",
                "Your work on [Project] caught my attention...",
                "We are currently spearheading a...",
                "I suggest we touch base when...",
                "Let's pencil that in provisionally.",
                "Do you have the bandwidth for...?",
                "We should align on our strategic synergies.",
                "I'm conscious of your time constraints."
            ],
            samples: [
                "I was advised to connect with you by Sarah Jenkins regarding your APAC strategy.",
                "Your work on the Delta merger caught my attention; it aligns with our current direction.",
                "We are currently spearheading a digital transformation initiative in the logistics sector.",
                "I suggest we touch base when you have completed the audit.",
                "Let's pencil that in provisionally for Tuesday at 10 AM.",
                "Do you have the bandwidth for a quick sync this week?",
                "We should align on our strategic synergies before the joint venture proceeds.",
                "I'm conscious of your time constraints, so I'll get straight to the point."
            ]
        },
        controlled: {
            title: "Grammar: Authority vs. Agility",
            words: ["currently spearheading", "specializes", "are mitigating", "operate", "am overseeing", "is navigating", "oversees", "are scaling"],
            sentences: [
                { pre: "Authority (Fact): Our firm", blank: "specializes", post: "in high-stakes M&A arbitration." },
                { pre: "Agility (Active): We are", blank: "currently spearheading", post: "a digital transformation initiative." },
                { pre: "Agility (Temporary Role): I", blank: "am overseeing", post: "the interim board during the transition." },
                { pre: "Authority (Routine): We usually", blank: "operate", post: "in the DACH region, but strategy is shifting." },
                { pre: "Agility (In Progress): Right now, we", blank: "are scaling", post: "our operations in emerging markets." },
                { pre: "Authority (Fact): She", blank: "oversees", post: "global compliance." },
                { pre: "Agility (Crisis): The committee", blank: "is navigating", post: "a significant PR crisis." },
                { pre: "Agility (Action): We", blank: "are mitigating", post: "risk by diversifying our portfolio." }
            ]
        },
        vocab: [
            {id:"v1",word:"Credibility",def:"The quality of being trusted and believed in; essential for leadership influence."}, 
            {id:"v2",word:"Bandwidth",def:"The energy or mental capacity required to deal with a situation."}, 
            {id:"v3",word:"Synergy",def:"The interaction of elements that when combined produce a total effect greater than the sum."}, 
            {id:"v4",word:"Bottleneck",def:"A point of congestion in a system that impacts strategic flow."}
        ],
        vocabPractice: {
            title: "Strategic Vocabulary in Context",
            sentences: [
                { pre: "We need to ensure proper", blank: "synergy", post: "between the marketing and sales divisions." },
                { pre: "I currently don't have the", blank: "bandwidth", post: "to take on another direct report." },
                { pre: "Establishing early", blank: "credibility", post: "with stakeholders is paramount." },
                { pre: "The regulatory approval process has become a major", blank: "bottleneck", post: "for the launch." },
                { pre: "Our strategic", blank: "credibility", post: "relies on transparent communication." },
                { pre: "We must identify the", blank: "bottleneck", post: "before we can scale." },
                { pre: "This merger creates significant operational", blank: "synergy", post: "." },
                { pre: "Please assess if the team has the", blank: "bandwidth", post: "for this Q4 push." }
            ]
        },
        challenge: {
            title: "The Power Circle Simulation",
            context: "You are at an exclusive industry summit. You have identified a potential key partner (The Trainer).",
            task: "Execute the Executive Bridge: 1. The Hook (Reference a mutual contact or shared strategic interest). 2. The Value (What high-level problem are you solving now?). 3. The Close (Provisional alignment). Use the word 'Bandwidth'."
        },
        activity1: { title: "Speed Networking", context: "You have 60 seconds with a CEO.", task: "Roleplay: 1. Bridge ('[Name] suggested I connect...'). 2. Value ('We are navigating...'). 3. Close ('Let's touch base provisionally').", prompt: "Sell the value, not the product." },
        activity2: { title: "The Presence Audit", trainerRole: "Skeptical Investor", yourRole: "Founder", steps: ["Critique the investor's 'Bandwidth' constraints.", "Demonstrate 'Credibility' through past wins.", "Propose a 'Synergy' between your firms."] },
        feedback: "Outcome: Did you use 'Provisionally' to respect their time? Did you project authority?"
    },
    2: {
        title: "Unit 2: Strategic Motivation & Retention",
        subtitle: "Executive Leadership",
        context: "High-performing teams are not motivated by cash alone. To retain top talent and prevent burnout, leaders must offer autonomy and professional actualization. This unit focuses on managing the 'Have you got a minute?' trap and using Question Tags to drive consensus.",
        objectives: [
            "Drive retention using high-value terms like 'Professional Actualization' and 'Autonomy'.",
            "Manage your own executive time by politely exiting non-strategic conversations.",
            "Distinguish between 'Burnout' (Overload) and 'Bore-out' (Strategic Misalignment)."
        ],
        greeting: { text: "Discussion: High salaries are easy to match. How do you retain a key executive who is bored, not tired?" },
        slides: [
            {
                title: "The 'Have You Got a Minute?' Trap",
                context: "A Director politely exiting a low-priority conversation to attend a critical board meeting, while maintaining rapport.",
                dialogue: [
                    {spk:"Manager",txt:"David, do you have a minute? I need to vent about the Q3 figures."}, 
                    {spk:"Director",txt:"David, I value your input, but I'm afraid I'm running into a hard stop for the Board Meeting."},
                    {spk:"Manager",txt:"Oh, just quickly—it's about the admin backlog."}, 
                    {spk:"Director",txt:"It's a capacity issue, isn't it? We need to address that properly, not in the corridor."},
                    {spk:"Manager",txt:"Exactly. I feel like we're drowning."},
                    {spk:"Director",txt:"We need to ensure you have more autonomy over resource allocation, don't we?"},
                    {spk:"Manager",txt:"Yes. I need the power to hire temps."},
                    {spk:"Director",txt:"Listen, I'm conscious of your stress. Let's circle back to this at 4 PM when I can give it my full attention."},
                    {spk:"Manager",txt:"Okay, 4 PM works."},
                    {spk:"Director",txt:"Great. We'll map out a mitigation plan then. Thanks for understanding."}
                ],
                bad: ["I am busy.", "Go away.", "Talk later."],
                good: ["I have a hard stop.", "Let's circle back...", "I'm conscious of the issue..."],
                expressions: ["I'm afraid I have a hard stop.", "Let's circle back to this...", "I'm conscious of time.", "It's a capacity issue, isn't it?"]
            }
        ],
        expressionBank: {
            title: "Time Management & Consensus",
            phrases: [
                "I'm running into a hard stop.",
                "I'm conscious of time, so let's circle back.",
                "Let's take this offline to discuss in depth.",
                "We need to align on this, don't we?",
                "That's a bandwidth issue, isn't it?",
                "I want to give this my full attention later.",
                "This requires a strategic deep-dive.",
                "Let's park this for now."
            ],
            samples: [
                "I'm running into a hard stop at 2 PM for the board meeting.",
                "I'm conscious of time, so let's circle back to this agenda item tomorrow.",
                "That's a complex issue; let's take this offline to discuss in depth.",
                "We need to align on this retention strategy, don't we?",
                "The delay is really a bandwidth issue, isn't it?",
                "I want to give this my full attention later, rather than rushing now.",
                "This turnover rate requires a strategic deep-dive, not a quick fix.",
                "Let's park this discussion for now and focus on the immediate deliverables."
            ]
        },
        controlled: {
            title: "Grammar: Question Tags for Consensus",
            words: ["isn't it", "don't you", "didn't they", "have you", "aren't we", "won't it", "shouldn't we", "has he"],
            sentences: [
                { pre: "We are aligned on the strategy,", blank: "aren't we", post: "?" }, 
                { pre: "The merger is the priority,", blank: "isn't it", post: "?" }, 
                { pre: "They secured the funding,", blank: "didn't they", post: "?" },
                { pre: "You report to the VP,", blank: "don't you", post: "?" },
                { pre: "You haven't briefed the stakeholders,", blank: "have you", post: "?" },
                { pre: "This acquisition will drive growth,", blank: "won't it", post: "?" },
                { pre: "We should mitigate this risk,", blank: "shouldn't we", post: "?" },
                { pre: "He hasn't signed the NDA,", blank: "has he", post: "?" }
            ]
        },
        vocab: [
            {id:"v1",word:"Autonomy",def:"The authority to make independent strategic decisions."}, 
            {id:"v2",word:"Equity",def:"The value of shares issued to an executive (Ownership)."}, 
            {id:"v3",word:"Recognition",def:"Formal acknowledgement of high-level contribution."}, 
            {id:"v4",word:"Actualization",def:"The realization of one's full professional potential."}
        ],
        vocabPractice: {
            title: "Strategic Vocabulary in Context",
            sentences: [
                { pre: "Top talent demands", blank: "autonomy", post: "over their P&L responsibilities." },
                { pre: "We offered a significant", blank: "equity", post: "package to secure the new CTO." },
                { pre: "Public", blank: "recognition", post: "from the Board is a powerful motivator." },
                { pre: "He sought professional", blank: "actualization", post: "by leading the sustainability initiative." },
                { pre: "Without strategic", blank: "autonomy", post: ", innovation stalls." },
                { pre: "The", blank: "equity", post: "vesting period is four years." },
                { pre: "A lack of", blank: "actualization", post: "often leads to 'Bore-out'." },
                { pre: "We must ensure proper", blank: "recognition", post: "of cross-functional wins." }
            ]
        },
        challenge: {
            title: "The Retention Strategy Meeting",
            context: "A key executive is threatening to leave due to 'Bore-out'.",
            task: "Argue your case: Student A advocates for 'Equity & Financial Rewards'. Student B advocates for 'Autonomy & Actualization'. Use 'Let's circle back' to manage interruptions."
        },
        activity1: { title: "The 'Have You Got a Minute?' Trap", context: "You are on your way to a Board Meeting.", task: "1. A colleague stops you with a trivial issue. 2. Validate them ('I value your input'). 3. Exit politely ('I have a hard stop'). 4. Schedule a follow-up." },
        activity2: { title: "The Burnout Intervention", trainerRole: "Exhausted Director", yourRole: "VP HR", steps: ["Probe: 'You're at capacity, aren't you?'", "Diagnose: Burnout vs Bore-out.", "Propose 'Autonomy' as the solution."] },
        feedback: "Outcome: Did you use tags to check consensus and 'Hard stop' to manage time?"
    },
    3: {
        title: "Unit 3: Strategic Resource Allocation",
        subtitle: "High Stakes Diplomacy",
        context: "Negotiation at this level isn't about price; it's about resources, headcount, and strategic trade-offs. Never concede without a condition. Use 'Provided that' to attach strategic strings to your agreement.",
        objectives: [
            "Negotiate budget and headcount using Conditional structures.",
            "Use 'Provided that' to secure strategic trade-offs.",
            "Explore hypothetical scenarios using the Second Conditional."
        ],
        greeting: { text: "Scenario: You need to borrow the best engineer from another department for 6 months. What do you offer in return?" },
        slides: [
            {
                title: "Resource Negotiation",
                context: "Two VPs negotiating headcount allocation for a critical initiative. Notice the trade-offs.",
                dialogue: [
                    {spk:"VP Ops",txt:"We need your lead architect, Brett, for the Alpha Initiative. He's mission-critical."}, 
                    {spk:"VP Eng",txt:"That's a significant ask. If I redeployed Brett, I would compromise my Q4 deliverables."},
                    {spk:"VP Ops",txt:"I understand. Supposing we backfilled his role with two contractors from my budget?"},
                    {spk:"VP Eng",txt:"Contractors can't replace institutional knowledge. However, I might consider a secondment, provided that you delay the Beta launch."},
                    {spk:"VP Ops",txt:"The timeline is fixed. If you sign off on Brett today, I will guarantee you the headcount approval for next year."},
                    {spk:"VP Eng",txt:"Now that aligns with my long-term strategy. Headcount is my bottleneck."},
                    {spk:"VP Ops",txt:"Exactly. What I propose is: You second Brett for 3 days a week, and I greenlight your hires."},
                    {spk:"VP Eng",txt:"I can build consensus around that. But unless I get that in writing by 5pm, the deal is off."},
                    {spk:"VP Ops",txt:"Agreed. I'll engage Legal now."}
                ],
                bad: ["I need him.", "Can you give him to me?", "I give you money."],
                good: ["I might consider a secondment.", "Provided that you delay...", "If you sign off, I will guarantee..."],
                expressions: ["Supposing we backfilled the role...", "Provided that you...", "I can build consensus around that.", "Unless I get that in writing..."]
            }
        ],
        expressionBank: {
            title: "Strategic Bargaining",
            phrases: [
                "Provided that we can align on...",
                "On the condition that...",
                "Subject to Board approval...",
                "Supposing we were to...",
                "Unless we secure buy-in...",
                "I can build consensus around...",
                "That's a significant ask.",
                "We need to assess the trade-offs."
            ],
            samples: [
                "I can approve the hire, provided that we can align on the Q4 deliverables.",
                "We will release the funds on the condition that OpEx is reduced by 10%.",
                "This deal is subject to Board approval next week.",
                "Supposing we were to outsource the testing, would that solve the bottleneck?",
                "Unless we secure buy-in from Finance, the project stalls.",
                "I can build consensus around a hybrid model if you compromise on the timeline.",
                "Moving the deadline is a significant ask given our client commitments.",
                "We need to assess the trade-offs between speed and quality."
            ]
        },
        controlled: {
            title: "Grammar: First vs. Second Conditional",
            words: ["wouldn't compromise", "will greenlight", "increased", "sign off", "would be", "don't align", "launched", "guaranteed"],
            sentences: [
                { pre: "Real (First): If you", blank: "sign off", post: "today, we will start execution tomorrow." },
                { pre: "Hypothetical (Second): If we", blank: "increased", post: "CapEx, we could scale faster." },
                { pre: "Hypothetical (Second): If I moved Brett, I", blank: "wouldn't compromise", post: "my deliverables." },
                { pre: "Real (First): If you agree, I", blank: "will greenlight", post: "the budget now." },
                { pre: "Hypothetical (Second): It", blank: "would be", post: "optimal if you could facilitate this." },
                { pre: "Real (First): Unless you", blank: "don't align", post: "with the strategy, we will proceed." },
                { pre: "Hypothetical (Second): If we", blank: "launched", post: "prematurely, the stock would tank." },
                { pre: "Hypothetical (Second): If they", blank: "guaranteed", post: "headcount, would you accept?" }
            ]
        },
        vocab: [
            {id:"v1",word:"Redeploy",def:"To strategically move assets or staff to a higher-priority area."}, 
            {id:"v2",word:"Headcount",def:"The number of people employed; a key budgetary constraint."}, 
            {id:"v3",word:"Secondment",def:"The temporary transfer of an executive to another project."}, 
            {id:"v4",word:"Consensus",def:"General agreement among stakeholders."}
        ],
        vocabPractice: {
            title: "Strategic Vocabulary in Context",
            sentences: [
                { pre: "We need to", blank: "redeploy", post: "engineering resources to the AI project." },
                { pre: "We cannot increase", blank: "headcount", post: "until Q3 revenue is confirmed." },
                { pre: "She is on", blank: "secondment", post: "to the London office to lead the integration." },
                { pre: "We reached a", blank: "consensus", post: "after the steering committee meeting." },
                { pre: "Can we", blank: "redeploy", post: "the marketing budget to R&D?" },
                { pre: "Building", blank: "consensus", post: "is critical for change management." },
                { pre: "The manager went on", blank: "secondment", post: "to the New York office." },
                { pre: "Freezing", blank: "headcount", post: "will improve our OpEx figures." }
            ]
        },
        challenge: {
            title: "The Resource Allocation Simulation",
            context: "VP Sales (Needs Budget) vs VP Finance (Needs to cut OpEx).",
            task: "Negotiate. Rule: You cannot say 'Yes' without adding a condition ('Provided that', 'Only if'). Aim for a 'Win-Win' using 'I can build consensus around that'."
        },
        activity1: { title: "The Conditional Chain", context: "Strategic Consequences.", task: "Build a chain. A: 'If we cut the budget, we risk the launch.' B: 'If we risk the launch, shareholders will react.' C: 'If shareholders react, the stock drops.'", prompt: "Think 3 steps ahead." },
        activity2: { title: "The Ultimatum", trainerRole: "CEO", yourRole: "VP", steps: ["State your red line ('Unless I get headcount...').", "Offer a concession ('Provided that I can outsource...').", "Close the deal."] },
        feedback: "Outcome: Did you use 'Will' for firm promises and 'Would' for safe exploration?"
    },
    4: {
        title: "Unit 4: The ROI Pitch",
        subtitle: "Strategic Influence",
        context: "Executives don't buy features; they buy ROI, Scalability, and Competitive Advantage. Use the structure: 'Whereas currently [Inefficiency], with this solution we ensure [Strategic Benefit]'. Feasibility must be proven with 'Managed to' (Success) and 'Can' (Capability).",
        objectives: [
            "Pitch innovations using 'Commercial Viability' and 'Scalability' frameworks.",
            "Discuss feasibility using specific ability modals.",
            "Handle skepticism about ROI and implementation risks."
        ],
        greeting: { text: "Pitch me an idea that costs $1M but saves $5M. Focus on the 'Return on Investment' (ROI)." },
        slides: [
            {
                title: "The ROI Pitch Structure",
                context: "A CIO presenting a new AI integration to the Board. Notice the focus on financial and operational impact.",
                dialogue: [
                    {spk:"CIO",txt:"Thanks for the time. Basically, the concept is an AI-driven predictive analytics engine."}, 
                    {spk:"CFO",txt:"That sounds expensive. Is it commercially viable? What's the ROI?"},
                    {spk:"CIO",txt:"Valid question. Whereas currently our forecasting is reactive and slow, this engine enables real-time market adaptation."},
                    {spk:"CFO",txt:"I see. And what about scalability? Can it handle the APAC data?"},
                    {spk:"CIO",txt:"The biggest potential benefit is scalability. It integrates seamlessly with our global ERP. We will be able to process APAC data instantly."},
                    {spk:"CFO",txt:"That is compelling. But can we deliver this in-house?"},
                    {spk:"CIO",txt:"Yes. We managed to secure a partnership with a leading tech firm last week to bridge the skills gap."},
                    {spk:"CFO",txt:"Okay. If it pays off, it could be a strategic breakthrough."},
                    {spk:"CIO",txt:"Does that sound like a risk worth taking?"},
                    {spk:"CFO",txt:"It does. Let's proceed to the pilot."}
                ],
                bad: ["It is cool.", "It works fast.", "We can try."],
                good: ["Whereas currently we represent risk...", "The strategic benefit is...", "We managed to secure..."],
                expressions: ["Basically, the concept is...", "The biggest potential benefit is...", "Whereas currently we...", "Is it commercially viable?"]
            }
        ],
        expressionBank: {
            title: "Pitching Strategy & ROI",
            phrases: [
                "The competitive advantage lies in...",
                "Whereas currently we face...",
                "This solution ensures scalability.",
                "We project a significant ROI.",
                "Is it commercially viable?",
                "We managed to secure...",
                "The strategic breakthrough is...",
                "This aligns with our digital transformation."
            ],
            samples: [
                "The competitive advantage lies in our proprietary AI algorithm.",
                "Whereas currently we face high latency, this solution offers real-time processing.",
                "Unlike the legacy system, this cloud solution ensures scalability across all regions.",
                "We project a significant ROI within the first 18 months.",
                "The tech is impressive, but is it commercially viable at this price point?",
                "We managed to secure a partnership with the leading supplier.",
                "The strategic breakthrough is the ability to automate 80% of manual tasks.",
                "This proposal aligns perfectly with our digital transformation roadmap."
            ]
        },
        controlled: {
            title: "Grammar: Ability (Past/Present/Future)",
            words: ["will be able to", "managed to", "couldn't", "can", "were able to", "won't be able to", "could", "to be able to"],
            sentences: [
                { pre: "Past Inability: In the past, we", blank: "couldn't", post: "leverage real-time data." },
                { pre: "Present Ability: Now, we", blank: "can", post: "forecast with 95% accuracy." },
                { pre: "Future Ability: Next year, we", blank: "will be able to", post: "automate the entire supply chain." },
                { pre: "Specific Past Success: Despite the freeze, we", blank: "were able to", post: "launch the pilot." },
                { pre: "Hard-won Success: I finally", blank: "managed to", post: "secure the patent." },
                { pre: "Future Negative: We", blank: "won't be able to", post: "scale without this upgrade." },
                { pre: "General Past: The legacy system", blank: "could", post: "only process batch files." },
                { pre: "Infinitive: We need", blank: "to be able to", post: "pivot quickly." }
            ]
        },
        vocab: [
            {id:"v1",word:"Scalability",def:"The capability of a system to handle a growing amount of work."}, 
            {id:"v2",word:"Breakthrough",def:"A strategic innovation that changes the market position."}, 
            {id:"v3",word:"Commercial Viability",def:"The ability of a product to compete and make a profit."}, 
            {id:"v4",word:"ROI",def:"Return on Investment; the efficiency of an investment."}
        ],
        vocabPractice: {
            title: "Strategic Vocabulary in Context",
            sentences: [
                { pre: "The new cloud infrastructure ensures infinite", blank: "scalability", post: "." },
                { pre: "This algorithm is a major", blank: "breakthrough", post: "in predictive modelling." },
                { pre: "We must assess the", blank: "commercial viability", post: "before launch." },
                { pre: "The projected", blank: "ROI", post: "is 15% in the first year." },
                { pre: "We need a technological", blank: "breakthrough", post: "to outpace competitors." },
                { pre: "Investors only back projects with proven", blank: "commercial viability", post: "." },
                { pre: "Lack of", blank: "scalability", post: "is hindering our growth." },
                { pre: "We must demonstrate a clear", blank: "ROI", post: "to the Board." }
            ]
        },
        challenge: {
            title: "The ROI Pitch Challenge",
            context: "You have 2 minutes to pitch a $5M digital transformation project to the CFO.",
            task: "Structure: 1. Hook ('The concept is...'). 2. Contrast ('Whereas currently...'). 3. ROI ('The benefit is...'). 4. Feasibility ('We will be able to...')."
        },
        activity1: { title: "The Shark Tank", context: "You are seeking CapEx approval.", task: "Pitch your idea. The CFO must ask: 'Is it scalable?' and 'What is the ROI?'. Defend your 'Breakthrough'.", prompt: "Focus on bottom-line impact." },
        activity2: { title: "Innovation Matrix", trainerRole: "Tech Analyst", yourRole: "Strategist", steps: ["Classify: Is it a 'Breakthrough' or incremental?", "Discuss feasibility: 'Can we?' vs 'Will we be able to?'."] },
        feedback: "Outcome: Did you use 'Managed to' for specific successes?"
    },
    5: {
        title: "Unit 5: Strategic Crisis Management",
        subtitle: "Mastering Diplomacy",
        context: "When a strategic partnership is at risk, direct language can be fatal. Leaders use Indirect Questions to gather sensitive information and 'Action-Oriented' language to de-escalate without admitting liability prematurely.",
        objectives: [
            "De-escalate high-stakes crises using the HEART method.",
            "Use Indirect Questions to investigate failure without assigning blame.",
            "Manage partner expectations using 'Mitigation' language."
        ],
        greeting: { text: "A key partner is threatening to pull the contract due to a service failure. How do you talk them off the ledge?" },
        slides: [
            {
                title: "The Escalation",
                context: "An Account Director handling a furious strategic partner. Notice the shift from validation to fact-finding.",
                dialogue: [
                    {spk:"Partner",txt:"This breach is unacceptable! Our data is exposed and your team is silent!"}, 
                    {spk:"Director",txt:"I completely understand your alarm. I can hear how critical this is, and I want to resolve this immediately."},
                    {spk:"Partner",txt:"You'd better! We are considering legal action."},
                    {spk:"Director",txt:"Let me get this straight, you detected the anomaly last night? Is that correct?"},
                    {spk:"Partner",txt:"Exactly. And no response from support."},
                    {spk:"Director",txt:"Okay. I need to establish the timeline. Could you tell me exactly when the alert triggered?"},
                    {spk:"Partner",txt:"At 02:00 AM EST."},
                    {spk:"Director",txt:"Thank you. I was wondering if you could share the log files? I'll escalate this to the CISO straightaway."},
                    {spk:"Partner",txt:"Fine. But fix it."},
                    {spk:"Director",txt:"I appreciate your cooperation. We are deploying a mitigation team as we speak."}
                ],
                bad: ["Calm down.", "Why did you wait?", "It's not our fault."],
                good: ["I completely understand your alarm.", "Could you tell me exactly...", "We are deploying a mitigation team."],
                expressions: ["Let me get this straight...", "I'll escalate this straightaway.", "We are deploying a mitigation team.", "I was wondering if..."]
            }
        ],
        expressionBank: {
            title: "Crisis De-escalation",
            phrases: [
                "I completely understand your alarm.",
                "Let me get this straight...",
                "Could you explain exactly what the delta is?",
                "I was wondering if you could share...",
                "I'll escalate this straightaway.",
                "We are deploying a mitigation team.",
                "We are fully committed to resolving this.",
                "I appreciate your patience while we investigate."
            ],
            samples: [
                "I completely understand your alarm regarding the data breach.",
                "Let me get this straight, the server went down at midnight?",
                "Could you explain exactly what the delta is between the forecasted and actual loss?",
                "I was wondering if you could share the incident logs for our analysis?",
                "I'll escalate this straightaway to the Crisis Management Team.",
                "We are deploying a mitigation team to secure the firewall.",
                "We are fully committed to resolving this issue and restoring trust.",
                "I appreciate your patience while we investigate the root cause."
            ]
        },
        controlled: {
            title: "Grammar: Indirect Questions",
            words: ["wondering if", "tell me", "do you know", "could you", "mind telling", "happen to know", "any idea", "explain"],
            sentences: [
                { pre: "When did the server crash? -> Could you", blank: "tell me", post: "when the server crashed?" },
                { pre: "What is the root cause? -> Could you explain exactly", blank: "what", post: "the root cause is?" },
                { pre: "Did you authorize this? -> I was", blank: "wondering if", post: "you authorized this." },
                { pre: "Who is the lead? ->", blank: "do you know", post: "who the lead is?" },
                { pre: "Why is there a variance? -> Do you", blank: "mind telling", post: "me why there is a variance?" },
                { pre: "Is the CEO aware? -> Do you", blank: "happen to know", post: "if the CEO is aware?" },
                { pre: "Where is the data? -> Do you have", blank: "any idea", post: "where the data is?" },
                { pre: "How does the protocol work? -> Can you", blank: "explain", post: "how the protocol works?" }
            ]
        },
        vocab: [
            {id:"v1",word:"Mitigation",def:"The action of reducing the severity, seriousness, or painfulness of something."}, 
            {id:"v2",word:"Escalate",def:"To increase the intensity or priority of a situation/issue."}, 
            {id:"v3",word:"Liability",def:"The state of being responsible for something, especially by law."}, 
            {id:"v4",word:"Remedy",def:"A means of legal reparation or solving a problem."}
        ],
        vocabPractice: {
            title: "Strategic Vocabulary in Context",
            sentences: [
                { pre: "We need an immediate risk", blank: "mitigation", post: "strategy." },
                { pre: "I will", blank: "escalate", post: "this issue to the Steering Committee." },
                { pre: "Admitting fault prematurely exposes us to", blank: "liability", post: "." },
                { pre: "We must offer a", blank: "remedy", post: "to the client to retain the account." },
                { pre: "The", blank: "mitigation", post: "plan was activated too late." },
                { pre: "We cannot accept", blank: "liability", post: "for third-party errors." },
                { pre: "Please", blank: "escalate", post: "if the variance exceeds 5%." },
                { pre: "This legal", blank: "remedy", post: "should satisfy the partner." }
            ]
        },
        challenge: {
            title: "The Crisis Call Simulation",
            context: "Student A is a Strategic Partner whose contract was breached. Student B is the Director.",
            task: "Execute the HEART method. Constraint: You cannot ask 'Why?'. You must use an indirect question like 'Could you let me have the details?'."
        },
        activity1: { title: "The Escalation", context: "The problem cannot be fixed today.", task: "Break the bad news. Use: 'What I'll do is...' to promise action. Do not overpromise. Say: 'I'm going to have to look into this further.'" },
        activity2: { title: "The Service Review", trainerRole: "Furious Partner", yourRole: "Director", steps: ["Acknowledge the 'Liability' risk.", "Promise to 'Escalate'.", "Offer a strategic 'Remedy'."] },
        feedback: "Outcome: Did you avoid 'Why' questions (which sound accusatory)?"
    },
    6: {
        title: "Unit 6: Governance & Sustainability",
        subtitle: "Speaking with Impact",
        context: "ESG (Environmental, Social, and Governance) is a board-level priority. When discussing values, you need strong verbs (Commit, Ensure) and clear future plans. Distinction between 'Compliance' (Must do) and 'Values' (Should do) is critical.",
        objectives: [
            "Articulate Corporate Social Responsibility (CSR) strategies using persuasive future forms.",
            "Differentiate between regulatory 'Compliance' and ethical 'Values'.",
            "Defend company reputation against public scrutiny."
        ],
        greeting: { text: "A journalist asks: 'Is your sustainability data greenwashing?' How do you respond with credibility?" },
        slides: [
            {
                title: "Future Forms & Ethical Commitments",
                context: "A press conference. A spokesperson outlines the company's response to a data privacy leak.",
                dialogue: [
                    {spk:"Journalist",txt:"Critics say your data governance is weak. What are you doing about it?"}, 
                    {spk:"Spokesperson",txt:"We have a strong commitment to privacy. We are well aware of the concerns."},
                    {spk:"Journalist",txt:"But what are the actual plans? Words are cheap."},
                    {spk:"Spokesperson",txt:"The plan is to audit all servers by Q3. We are going to implement end-to-end encryption immediately."},
                    {spk:"Journalist",txt:"Will that affect speed?"},
                    {spk:"Spokesperson",txt:"Latency will likely increase slightly, but we believe users value security more."},
                    {spk:"Journalist",txt:"And the affected users? They've been ignored."},
                    {spk:"Spokesperson",txt:"We are launching a compensation fund next month. We'd like to invite you to review our whitepaper."},
                    {spk:"Journalist",txt:"I might take you up on that."},
                    {spk:"Spokesperson",txt:"It is highly recommended. It outlines our compliance framework."}
                ],
                bad: ["We try to be safe.", "Maybe we will fix it.", "Sorry."],
                good: ["We have a strong commitment to privacy.", "We are going to implement...", "The plan is to audit..."],
                expressions: ["We have a strong commitment to...", "The plan is to...", "It is highly recommended...", "We are well aware of the concerns."]
            }
        ],
        expressionBank: {
            title: "Governance & Ethics",
            phrases: [
                "We have a strong commitment to...",
                "Our core values dictate that...",
                "Beyond compliance, we aim for...",
                "The plan is to implement...",
                "We are going to ensure...",
                "It is highly recommended that...",
                "We are launching a comprehensive audit.",
                "Transparency is our priority."
            ],
            samples: [
                "We have a strong commitment to ethical sourcing.",
                "Our core values dictate that we prioritize safety over profit.",
                "Beyond compliance, we aim for industry leadership in sustainability.",
                "The plan is to implement a new governance framework by Q3.",
                "We are going to ensure full transparency in our reporting.",
                "It is highly recommended that we audit our third-party vendors.",
                "We are launching a comprehensive audit of our carbon footprint.",
                "Transparency is our priority during this regulatory review."
            ]
        },
        controlled: {
            title: "Grammar: Future Forms",
            words: ["starts", "are launching", "going to", "will", "is to", "opens", "are meeting", "won't"],
            sentences: [
                { pre: "Timetable: The audit", blank: "starts", post: "at 9:00 AM." },
                { pre: "Fixed Arrangement: We", blank: "are launching", post: "the ESG initiative next month." },
                { pre: "Prediction: I think stakeholders", blank: "will", post: "support this." },
                { pre: "Strong Intention: We are", blank: "going to", post: "eliminate carbon emissions by 2030." },
                { pre: "Formal Plan: The plan", blank: "is to", post: "donate 1% of revenue." },
                { pre: "Schedule: The new facility", blank: "opens", post: "on Monday." },
                { pre: "Arrangement: I", blank: "are meeting", post: "the regulator at 2." },
                { pre: "Prediction: He", blank: "won't", post: "sign off on that." }
            ]
        },
        vocab: [
            {id:"v1",word:"Transparency",def:"Openness, communication, and accountability."}, 
            {id:"v2",word:"Compliance",def:"Adherence to laws and regulations (Must do)."}, 
            {id:"v3",word:"Integrity",def:"The quality of being honest and having strong moral principles (Should do)."}, 
            {id:"v4",word:"Scrutiny",def:"Critical observation or examination."}
        ],
        vocabPractice: {
            title: "Strategic Vocabulary in Context",
            sentences: [
                { pre: "We are operating under intense public", blank: "scrutiny", post: "." },
                { pre: "We have a strictly enforced", blank: "compliance", post: "department." },
                { pre: "Our brand is built on", blank: "integrity", post: "and trust." },
                { pre: "We must ensure", blank: "transparency", post: "in our reporting." },
                { pre: "To maintain", blank: "integrity", post: ", we must be honest about the failure." },
                { pre: "Legal", blank: "compliance", post: "is non-negotiable." },
                { pre: "We welcome", blank: "scrutiny", post: "from the regulators." },
                { pre: "Stakeholders demand", blank: "transparency", post: "regarding the leak." }
            ]
        },
        challenge: {
            title: "The PR Crisis Simulation",
            context: "Your company is facing a data privacy scandal. You must hold a press conference.",
            task: "Roleplay: Spokesperson vs Journalists. Spokesperson must use: 'We have a strong commitment to...', 'We are going to [Fix it]...', and 'The plan is to...'. Journalists must ask about 'Compliance' and 'Transparency'."
        },
        activity1: { title: "The VIP Visit", context: "Hosting regulators.", task: "Plan an itinerary. Use formal language: 'We'd like to invite you to audit...', 'It is highly recommended...'." },
        activity2: { title: "The Ethics Audit", trainerRole: "External Auditor", yourRole: "CEO", steps: ["Defend your 'Compliance' record.", "Highlight 'Integrity'.", "Prove there is no 'Scrutiny' fear."] },
        feedback: "Outcome: Did you use 'Going to' for intentions you control?"
    },
    7: {
        title: "Unit 7: Strategic Decision Making",
        subtitle: "Commanding Authority",
        context: "Strategic decisions often involve trading Operational Expenditure (OpEx) for Capital Expenditure (CapEx). In a meeting, he who controls the turn-taking controls the outcome. You need precise language to interrupt, steer, and summarize.",
        objectives: [
            "Lead high-stakes decision meetings using 'Chairing' language.",
            "Debate 'OpEx vs. CapEx' using precise Quantifiers.",
            "Distinguish between 'Rational' (Data-driven) and 'Instinctive' (Experience-driven) decisions."
        ],
        greeting: { text: "Debate: Should we rent software (OpEx) or build our own (CapEx)? Who controls the agenda controls the decision." },
        slides: [
            {
                title: "Chairing & Quantifiers",
                context: "A Chair managing a heated debate about budget allocation (OpEx vs CapEx).",
                dialogue: [
                    {spk:"Chair",txt:"Let's look at the facts. We are spending too much money on OpEx. It's unsustainable."}, 
                    {spk:"A",txt:"I disagree. We need operational flexibility."},
                    {spk:"Chair",txt:"I see your point, but the fact is we have too many overheads and too few assets. We have very little choice but to invest in CapEx."},
                    {spk:"B",txt:"If you ask me, we should cut the marketing budget instead."},
                    {spk:"Chair",txt:"I'm not convinced. Marketing brings in revenue. Can we move on to the IT infrastructure?"},
                    {spk:"A",txt:"Wait, I have a few ideas about how to save on licenses..."},
                    {spk:"Chair",txt:"We don't have enough time to go back. Let's stick to the agenda, please."},
                    {spk:"B",txt:"So what you're saying is we build the server farm? No more cloud?"},
                    {spk:"Chair",txt:"Exactly. It's a pragmatic decision. Let's turn to the next item."}
                ],
                bad: ["We have problems.", "Too much money.", "Shut up."],
                good: ["The fact is, we have too many overheads.", "Can we move on to...?", "I'm not convinced."],
                expressions: ["Let's look at the facts.", "If you ask me, we should...", "Can we move on to...?", "Let's stick to the agenda."]
            }
        ],
        expressionBank: {
            title: "Chairing the Meeting",
            phrases: [
                "Let's bring this to a head.",
                "The strategic imperative is...",
                "I'm not convinced by that data.",
                "Can we move on to the next item?",
                "Let's stick to the agenda.",
                "We have very little choice but to...",
                "What is the bottom line here?",
                "Let's turn to the OpEx figures."
            ],
            samples: [
                "We've discussed this for an hour; let's bring this to a head and vote.",
                "The strategic imperative is to reduce CapEx immediately.",
                "I'm not convinced by that data; it contradicts the Q2 report.",
                "We are stuck on details; can we move on to the next item?",
                "That's an interesting point, but let's stick to the agenda.",
                "We have very little choice but to freeze hiring.",
                "What is the bottom line here regarding the budget deficit?",
                "Let's turn to the OpEx figures to see where we can trim fat."
            ]
        },
        controlled: {
            title: "Grammar: Countable vs. Uncountable",
            words: ["too much", "few", "enough", "many", "little", "fewer", "a lot of", "much"],
            sentences: [
                { pre: "Uncountable (Negative): We have", blank: "little", post: "time to discuss this today." },
                { pre: "Countable (Negative): There are too", blank: "many", post: "variables on the table." },
                { pre: "Sufficiency: We don't have", blank: "enough", post: "CapEx budget." },
                { pre: "Uncountable (Small amount): There is very", blank: "little", post: "support for this idea." },
                { pre: "Uncountable (Excessive): We are spending", blank: "too much", post: "on licensing." },
                { pre: "Countable (Comparison): We have", blank: "fewer", post: "engineers than last year." },
                { pre: "General: We have", blank: "a lot of", post: "work to do." },
                { pre: "Question: How", blank: "much", post: "does it cost?" }
            ]
        },
        vocab: [
            {id:"v1",word:"OpEx",def:"Operational Expenditure (ongoing costs like wages, rent)."}, 
            {id:"v2",word:"CapEx",def:"Capital Expenditure (investment in assets like buildings, tech)."}, 
            {id:"v3",word:"Pragmatic",def:"Dealing with things sensibly and realistically."}, 
            {id:"v4",word:"Overheads",def:"Ongoing business expenses not directly attributed to creating a product."}
        ],
        vocabPractice: {
            title: "Strategic Vocabulary in Context",
            sentences: [
                { pre: "We need to reduce our", blank: "OpEx", post: "to improve margins." },
                { pre: "The new factory is a significant", blank: "CapEx", post: "investment." },
                { pre: "Let's be", blank: "pragmatic", post: "; we can't afford the upgrade." },
                { pre: "High", blank: "overheads", post: "are eating into our profit." },
                { pre: "She made a", blank: "pragmatic", post: "choice to cut costs." },
                { pre: "Cloud computing shifts costs from CapEx to", blank: "OpEx", post: "." },
                { pre: "We need approval for this", blank: "CapEx", post: "project." },
                { pre: "Reducing", blank: "overheads", post: "is a priority for Q4." }
            ]
        },
        challenge: {
            title: "The Budget Cuts Meeting",
            context: "You have a budget deficit. You must decide: Cut OpEx (staff/travel) or Freeze CapEx (projects).",
            task: "Roleplay: The Chair must use 'Leading the discussion' phrases ('Let's look at the facts', 'Can we move on'). Participants must argue using Quantifiers ('We have too few staff already!', 'There is too much waste')."
        },
        activity1: { title: "The Devil's Advocate", context: "Testing ideas.", task: "Student A proposes a solution. Student B MUST disagree using 'I'm not convinced' or 'Yes, but...' and offer a counter-argument." },
        activity2: { title: "Decision Style Analysis", trainerRole: "Colleague", yourRole: "Analyst", steps: ["Analyze a recent decision: Rational vs Instinctive?", "Propose a 'Pragmatic' solution.", "Critique 'Indecisive' behavior."] },
        feedback: "Outcome: Did you use 'Too much' for uncountable nouns (money) and 'Too many' for countable?"
    },
    8: {
        title: "Unit 8: Operational Efficiency & Automation",
        subtitle: "Speaking with Impact",
        context: "Leaders must communicate hard decisions objectively. The Passive Voice is a tool for professional distance. When delivering news about automation or restructuring ('Jobs were cut'), the passive sounds objective and authoritative.",
        objectives: [
            "Present complex restructuring plans using the Passive Voice.",
            "Discuss the strategic trade-offs of 'Automation' and 'Offshoring'.",
            "Deliver sensitive news objectively."
        ],
        greeting: { text: "Is automation a threat or an opportunity? How do you sell a 'Digital Transformation' that reduces headcount?" },
        slides: [
            {
                title: "The Passive Voice & Objectivity",
                context: "A CEO presenting a restructuring plan. Notice how the agent (who did it) is removed to focus on the action.",
                dialogue: [
                    {spk:"CEO",txt:"We need to discuss the new strategy. Efficiency has dropped."}, 
                    {spk:"Shareholder",txt:"That's concerning. What is being done?"},
                    {spk:"CEO",txt:"A new operational plan was developed last month. It was decided that core activities are being kept in-house."},
                    {spk:"Shareholder",txt:"And the manual processing department?"},
                    {spk:"CEO",txt:"The processing function has been automated to reduce OpEx."},
                    {spk:"Shareholder",txt:"Does that mean jobs were lost?"},
                    {spk:"CEO",txt:"Unfortunately, 70 roles were made redundant. However, new roles are being created in AI management."},
                    {spk:"Shareholder",txt:"I see. And what is the expected result?"},
                    {spk:"CEO",txt:"It is estimated that margins will rise by 15%. This has resulted in a stronger share price."}
                ],
                bad: ["They fired people.", "We automated it.", "I decided."],
                good: ["Roles were made redundant.", "The function has been automated.", "It was decided that..."],
                expressions: ["It was decided that...", "Roles were made redundant.", "This has resulted in...", "It is estimated that..."]
            }
        ],
        expressionBank: {
            title: "Objective Reporting",
            phrases: [
                "It has been decided that...",
                "Efficiencies will be realized by...",
                "A restructuring plan was developed...",
                "It is estimated that...",
                "This has resulted in...",
                "Mistakes were made.",
                "The function has been automated.",
                "Priorities have shifted."
            ],
            samples: [
                "It has been decided that the factory will be relocated.",
                "Efficiencies will be realized by automating the payroll function.",
                "A restructuring plan was developed to address the redundancy.",
                "It is estimated that operational costs will drop by 20%.",
                "This has resulted in a leaner, more agile organization.",
                "Mistakes were made in the initial rollout, which we are now correcting.",
                "The customer support function has been automated using AI chatbots.",
                "Strategic priorities have shifted towards core activities."
            ]
        },
        controlled: {
            title: "Grammar: The Passive Voice",
            words: ["was developed", "are being cut", "has been sent", "is expected", "was elected", "were told", "be done", "is manufactured"],
            sentences: [
                { pre: "Past Simple Passive: The strategy", blank: "was developed", post: "last year." },
                { pre: "Present Continuous Passive: Roles", blank: "are being cut", post: "due to automation." },
                { pre: "Present Perfect Passive: The directive", blank: "has been sent", post: "already." },
                { pre: "It + Passive (Formal): It", blank: "is expected", post: "that margins will rise." },
                { pre: "Past Passive: He", blank: "was elected", post: "Chairman." },
                { pre: "Past Passive: We", blank: "were told", post: "to pause the project." },
                { pre: "Future Passive: It will", blank: "be done", post: "by Q4." },
                { pre: "Present Passive: The chip", blank: "is manufactured", post: "in Taiwan." }
            ]
        },
        vocab: [
            {id:"v1",word:"Automation",def:"The use of equipment/software to reduce human labor."}, 
            {id:"v2",word:"Core activities",def:"The main things a company does vs peripheral tasks."}, 
            {id:"v3",word:"Streamline",def:"Make an organization more efficient by employing faster methods."}, 
            {id:"v4",word:"Redundant",def:"No longer needed or useful (used for job cuts)."}
        ],
        vocabPractice: {
            title: "Strategic Vocabulary in Context",
            sentences: [
                { pre: "We are considering", blank: "automation", post: "to save money." },
                { pre: "We need to focus on our", blank: "core activities", post: "like R&D." },
                { pre: "The new software will", blank: "streamline", post: "the process." },
                { pre: "70 roles were made", blank: "redundant", post: "after the merger." },
                { pre: "If we", blank: "streamline", post: "operations, we increase speed." },
                { pre: "IT support is not one of our", blank: "core activities", post: "." },
                { pre: "We face", blank: "redundant", post: "workflows." },
                { pre: "Management decided on", blank: "automation", post: "of the warehouse." }
            ]
        },
        challenge: {
            title: "The Restructuring Presentation",
            context: "Choose: 'Offshoring a Factory' OR 'Automating a Department'.",
            task: "Deliver a 2-minute presentation. Use Passive Voice to describe the change ('The factory is being moved...', 'Software has been implemented'). Use Cause/Effect expressions ('This has resulted in...')."
        },
        activity1: { title: "The Formal Apology", context: "A project failed.", task: "Step 1: Admit error passively ('Mistakes were made'). Step 2: Explain cause ('This was due to...'). Step 3: Repair." },
        activity2: { title: "The Efficiency Consultant", trainerRole: "CEO", yourRole: "Consultant", steps: ["Analyze the bloat.", "Advise 'Streamlining'.", "Recommend focusing only on 'Core activities'."] },
        feedback: "Outcome: Did you use the passive voice to depersonalize negative news?"
    },
    9: {
        title: "Unit 9: Strategic Project Oversight",
        subtitle: "Commanding Authority",
        context: "Projects rarely go exactly to plan. The skill lies in reporting delays due to strategic bottlenecks, not just supplier errors. Use 'We've hit a problem with...' instead of 'I'm late'. Use Present Perfect for status, Past Simple for specific events.",
        objectives: [
            "Report on project status using 'Scope Creep' and 'Bottleneck' terminology.",
            "Manage expectations regarding 'Constraints' and 'Contingencies'.",
            "Distinguish between Present Perfect (Status) and Past Simple (Time)."
        ],
        greeting: { text: "What is 'Scope Creep' and why does it kill projects? How do you report a 'Red' status to the Board?" },
        slides: [
            {
                title: "Updates & Tenses",
                context: "A Program Director checking in with a Project Lead facing strategic delays.",
                dialogue: [
                    {spk:"Director",txt:"How does your side of things look? Are we on track for the launch?"}, 
                    {spk:"Lead",txt:"To be honest, we are encountering some strategic headwinds."},
                    {spk:"Director",txt:"That doesn't sound good. What seems to be the issue?"},
                    {spk:"Lead",txt:"We've hit a problem with scope creep. The stakeholders kept adding features."},
                    {spk:"Director",txt:"When did this happen? This should have been flagged weeks ago."},
                    {spk:"Lead",txt:"I flagged it last Monday. (Past Simple)"},
                    {spk:"Director",txt:"Have you updated the risk register? (Present Perfect)"},
                    {spk:"Lead",txt:"Yes, I updated it this morning. We need to re-baseline the schedule."},
                    {spk:"Director",txt:"Okay. Prioritize the MVP. Activate the contingency plan."}
                ],
                bad: ["It is late.", "I finished it now.", "Problem with features."],
                good: ["We are encountering strategic headwinds.", "We need to re-baseline.", "We've hit a problem with scope creep."],
                expressions: ["We are encountering strategic headwinds.", "We need to re-baseline.", "We've hit a problem with...", "Activate the contingency plan."]
            }
        ],
        expressionBank: {
            title: "Project Status Reporting",
            phrases: [
                "We are encountering strategic headwinds.",
                "We've hit a bottleneck with...",
                "Scope creep is impacting the timeline.",
                "We need to re-baseline the schedule.",
                "Have you updated the risk register?",
                "We are tracking green/amber/red.",
                "Mitigation plan B involves...",
                "This was flagged in the previous sprint."
            ],
            samples: [
                "We are encountering strategic headwinds due to the regulatory changes.",
                "We've hit a bottleneck with the supply chain integration.",
                "Scope creep is impacting the timeline; we need to freeze requirements.",
                "Given the delays, we need to re-baseline the schedule for Phase 2.",
                "Have you updated the risk register to reflect the vendor insolvency?",
                "We are tracking amber on budget but green on deliverables.",
                "Mitigation plan B involves parallel processing to catch up.",
                "This risk was flagged in the previous sprint review."
            ]
        },
        controlled: {
            title: "Grammar: Present Perfect vs. Past Simple",
            words: ["have finished", "finished", "sent", "hasn't arrived", "did you", "have you", "saw", "haven't started"],
            sentences: [
                { pre: "Past Simple (Time): I", blank: "finished", post: "the audit yesterday." },
                { pre: "Present Perfect (Status): We", blank: "have finished", post: "Phase 1." },
                { pre: "Present Perfect (Unfinished): The approval still", blank: "hasn't arrived", post: "." },
                { pre: "Past Simple (Question): When", blank: "did you", post: "escalate this?" },
                { pre: "Past Simple (Time): I", blank: "sent", post: "the report an hour ago." },
                { pre: "Present Perfect (Exp):", blank: "have you", post: "ever managed a merger?" },
                { pre: "Past Simple: I", blank: "saw", post: "the data last week." },
                { pre: "Present Perfect: We", blank: "haven't started", post: "testing yet." }
            ]
        },
        vocab: [
            {id:"v1",word:"Scope Creep",def:"Uncontrolled changes or continuous growth in a project's scope."}, 
            {id:"v2",word:"Contingency",def:"A provision for an unforeseen event or circumstance."}, 
            {id:"v3",word:"Bottleneck",def:"A process in a chain of processes, such that its limited capacity reduces the capacity of the whole chain."}, 
            {id:"v4",word:"Deliverables",def:"Goods or services produced as a result of a project."}
        ],
        vocabPractice: {
            title: "Strategic Vocabulary in Context",
            sentences: [
                { pre: "We must manage", blank: "scope creep", post: "to stay on budget." },
                { pre: "Do we have a", blank: "contingency", post: "budget?" },
                { pre: "The legal review is a major", blank: "bottleneck", post: "." },
                { pre: "The final", blank: "deliverables", post: "are due on Friday." },
                { pre: "Time", blank: "scope creep", post: "ruined the timeline." },
                { pre: "We must identify the", blank: "bottleneck", post: "immediately." },
                { pre: "Are the", blank: "deliverables", post: "ready for sign-off?" },
                { pre: "We activated the", blank: "contingency", post: "plan." }
            ]
        },
        challenge: {
            title: "The Status Update Meeting",
            context: "Project is 'Red' due to Scope Creep.",
            task: "Update the Director. 1. State status ('Headwinds'). 2. Explain cause ('Scope Creep'). 3. Action taken (Past Simple). 4. Request ('Re-baseline')."
        },
        activity1: { title: "The Road Show Planning", context: "Planning a launch.", task: "Timeline check. A: 'Have you booked...?' B: 'Yes, I booked it yesterday' OR 'No, I haven't done it yet'." },
        activity2: { title: "The Crisis Manager", trainerRole: "Director", yourRole: "Manager", steps: ["Analyze 'Constraints'.", "Prioritize tasks.", "Activate 'Contingency'."] },
        feedback: "Outcome: Did you use Past Simple when mentioning 'When' it happened?"
    },
    10: {
        title: "Unit 10: Internal Intrapreneurship",
        subtitle: "Commanding Authority",
        context: "Networking isn't just external; it's about internal buy-in. 'Intrapreneurship' is acting like an entrepreneur within a company. Use the Present Perfect Continuous to describe your journey ('I've been lobbying for...') to sound active and dedicated.",
        objectives: [
            "Secure internal buy-in for initiatives using 'Lobbying' vocabulary.",
            "Ask for cross-departmental support using diplomatic structures.",
            "Describe initiative history using Present Perfect Continuous."
        ],
        greeting: { text: "How do you get budget for a new idea in a rigid corporate structure? You need internal allies." },
        slides: [
            {
                title: "Internal Lobbying",
                context: "Two executives meeting. One is seeking support for a new internal initiative.",
                dialogue: [
                    {spk:"A",txt:"James? Good to connect. I haven't seen you since the retreat."}, 
                    {spk:"B",txt:"Simon! What have you been working on?"},
                    {spk:"A",txt:"I've been spearheading the new Fintech Venture. We've been developing it for two years inside the Innovation Lab."},
                    {spk:"B",txt:"That sounds strategic. How is it going?"},
                    {spk:"A",txt:"Great, we've secured seed funding, but we need wider buy-in. Actually, I was wondering if you could socialize this with your team?"},
                    {spk:"B",txt:"Ah, that's a big ask. The thing is, we are at capacity."},
                    {spk:"A",txt:"I understand. But since we aligned on the Alpha project, I thought you might champion this. I wouldn't ask otherwise."},
                    {spk:"B",txt:"Okay. Send me the deck. I'll see if I can align stakeholders."},
                    {spk:"A",txt:"I really appreciate that."}
                ],
                bad: ["Help me.", "I want support.", "Tell your team."],
                good: ["I was wondering if you could socialize this...", "I thought you might champion this.", "We've been developing..."],
                expressions: ["I was wondering if you could socialize this...", "We need to align stakeholders.", "I've been spearheading...", "Could you champion this?"]
            }
        ],
        expressionBank: {
            title: "Internal Influence",
            phrases: [
                "I was wondering if you could socialize this...",
                "We need to secure internal buy-in.",
                "I've been spearheading this initiative.",
                "Could you champion this with your unit?",
                "We need to align stakeholders.",
                "I'm looking for cross-functional support.",
                "We've been lobbying for...",
                "This aligns with our strategic pillars."
            ],
            samples: [
                "I was wondering if you could socialize this concept with the marketing team?",
                "We need to secure internal buy-in before presenting to the CEO.",
                "I've been spearheading this initiative to reduce waste for six months.",
                "Could you champion this new software with your unit to drive adoption?",
                "We need to align stakeholders across Sales and Engineering.",
                "I'm looking for cross-functional support to pilot this project.",
                "We've been lobbying for a dedicated innovation budget.",
                "This project aligns with our strategic pillar of customer centricity."
            ]
        },
        controlled: {
            title: "Grammar: Present Perfect Continuous",
            words: ["have been working", "have written", "have been calling", "have secured", "has been running", "have been waiting", "has visited", "have been negotiating"],
            sentences: [
                { pre: "Continuous (Duration): I", blank: "have been working", post: "on this for months." },
                { pre: "Simple (Result): I", blank: "have written", post: "the proposal." },
                { pre: "Continuous (Ongoing): She", blank: "has been running", post: "the lab since Jan." },
                { pre: "Simple (Completion): We", blank: "have secured", post: "the budget." },
                { pre: "Continuous (Repetition): I", blank: "have been calling", post: "Finance all day." },
                { pre: "Continuous (Duration): We", blank: "have been waiting", post: "for approval." },
                { pre: "Simple (Frequency): He", blank: "has visited", post: "HQ twice." },
                { pre: "Continuous (Activity): They", blank: "have been negotiating", post: "since 9 AM." }
            ]
        },
        vocab: [
            {id:"v1",word:"Buy-in",def:"Agreement to support a decision or course of action."}, 
            {id:"v2",word:"Socialize",def:"To spread an idea informally to gain support."}, 
            {id:"v3",word:"Champion",def:"To support the cause of; defend."}, 
            {id:"v4",word:"Stakeholder",def:"A person with an interest or concern in something."}
        ],
        vocabPractice: {
            title: "Strategic Vocabulary in Context",
            sentences: [
                { pre: "We need", blank: "buy-in", post: "from the Exec Committee." },
                { pre: "Please", blank: "socialize", post: "this idea with your peers." },
                { pre: "Who will", blank: "champion", post: "this project?" },
                { pre: "Identify every key", blank: "stakeholder", post: "." },
                { pre: "Without", blank: "buy-in", post: ", the project fails." },
                { pre: "He began to", blank: "socialize", post: "the policy changes." },
                { pre: "She is a real", blank: "champion", post: "of diversity." },
                { pre: "Manage your", blank: "stakeholder", post: "expectations." }
            ]
        },
        challenge: {
            title: "The Intrapreneur Pitch",
            context: "You need support from a skeptical peer.",
            task: "1. Reconnect. 2. Update ('I've been working on...'). 3. The Ask ('Socialize this'). 4. Handle rejection ('I understand, but...')."
        },
        activity1: { title: "The Favor Trading Game", context: "Internal trading.", task: "You have a 'Need' (Budget) and an 'Asset' (Tech). Trade. Use: 'I was wondering if...'." },
        activity2: { title: "The Pitch Deck", trainerRole: "Skeptical Peer", yourRole: "Intrapreneur", steps: ["Describe 'Buy-in'.", "Ask to 'Socialize'.", "Offer 'Stakeholder' value."] },
        feedback: "Outcome: Did you use Continuous for 'How long' (Activity)?"
    },
    11: {
        title: "Unit 11: Executive Digital Presence",
        subtitle: "Mastering Diplomacy",
        context: "In a hybrid world, you must master the protocols of Async (Email/Slack) vs Sync (Video). Managing technical issues and interruptions with authority is key to executive presence.",
        objectives: [
            "Manage hybrid meetings using standard phrases ('Breaking up', 'Lag').",
            "Establish protocols for Async vs Sync communication.",
            "Discuss rules using Modals (Must vs. Have to)."
        ],
        greeting: { text: "Video fatigue is real. When should a meeting be an email (Async)? When must it be a call (Sync)?" },
        slides: [
            {
                title: "Hybrid Etiquette & Modals",
                context: "A chaotic hybrid meeting. The Chair regains control.",
                dialogue: [
                    {spk:"Chair",txt:"Okay, let's start. Can everyone hear me?"}, 
                    {spk:"A",txt:"Sorry, you're breaking up a bit. There's latency."},
                    {spk:"Chair",txt:"I'll mute everyone. You must unmute to speak. Better?"},
                    {spk:"B",txt:"(Unmutes) Can I just come in here? Why is this a sync meeting?"},
                    {spk:"Chair",txt:"Good question. This requires real-time alignment."},
                    {spk:"A",txt:"Sorry, can you run through that again? My screen froze."},
                    {spk:"Chair",txt:"Okay. We need to respect bandwidth. You don't have to stay if you are just listening; check the recording."},
                    {spk:"B",txt:"Understood. Are we allowed to record?"},
                    {spk:"Chair",txt:"No, you mustn't record. Confidential."}
                ],
                bad: ["You are silent.", "Speak slower.", "I don't understand."],
                good: ["You're breaking up.", "Can I just come in here?", "This requires real-time alignment."],
                expressions: ["You're breaking up.", "Can I just come in here?", "Let's take this offline.", "We need to respect bandwidth."]
            }
        ],
        expressionBank: {
            title: "Hybrid Meeting Protocols",
            phrases: [
                "You're breaking up; there's some latency.",
                "Can I just come in here?",
                "Let's take this offline.",
                "This should be an async update.",
                "Can we ensure alignment on...",
                "Could you run through that again?",
                "You're on mute.",
                "Let's park this discussion."
            ],
            samples: [
                "You're breaking up; there's some latency on the line.",
                "Can I just come in here to clarify the budget figures?",
                "That detail is too granular; let's take this offline.",
                "This status report should be an async update, not a meeting.",
                "Can we ensure alignment on the next steps before we drop?",
                "Could you run through that again? I missed the last point.",
                "I believe you're on mute; we can't hear you.",
                "Let's park this discussion until everyone has better connectivity."
            ]
        },
        controlled: {
            title: "Grammar: Modals of Obligation",
            words: ["must", "don't have to", "mustn't", "need to", "allowed to", "should", "had to", "didn't have to"],
            sentences: [
                { pre: "Strong Obligation: You", blank: "must", post: "attend the QBR." },
                { pre: "No Obligation: We", blank: "don't have to", post: "use video." },
                { pre: "Prohibition: You", blank: "mustn't", post: "share the link." },
                { pre: "Permission: Are we", blank: "allowed to", post: "record?" },
                { pre: "Necessity: You", blank: "need to", post: "align the teams." },
                { pre: "Advice: You", blank: "should", post: "use a headset." },
                { pre: "Past Obligation: I", blank: "had to", post: "reboot." },
                { pre: "Past No Obligation: We", blank: "didn't have to", post: "travel." }
            ]
        },
        vocab: [
            {id:"v1",word:"Async",def:"Asynchronous communication (not happening at the same time, e.g., email)."}, 
            {id:"v2",word:"Sync",def:"Synchronous communication (real-time, e.g., Zoom)."}, 
            {id:"v3",word:"Alignment",def:"Agreement and cooperation among a group."}, 
            {id:"v4",word:"Latency",def:"Delay in data transfer (lag)."}
        ],
        vocabPractice: {
            title: "Strategic Vocabulary in Context",
            sentences: [
                { pre: "Let's move this to", blank: "async", post: "communication via Slack." },
                { pre: "We need a", blank: "sync", post: "meeting to resolve this blocker." },
                { pre: "Ensure", blank: "alignment", post: "before we proceed." },
                { pre: "High", blank: "latency", post: "is killing the call quality." },
                { pre: "This discussion doesn't require a", blank: "sync", post: "." },
                { pre: "Please provide an", blank: "async", post: "update by Friday." },
                { pre: "We lack", blank: "alignment", post: "on the strategy." },
                { pre: "Video causes", blank: "latency", post: "issues." }
            ]
        },
        challenge: {
            title: "The Teleconference From Hell",
            context: "Chair vs Participants with bad tech.",
            task: "Chair: Explain 'Async' vs 'Sync' rules. Manage interruptions. B: Use 'Breaking up'. C: Interrupt. D: Use 'Clarification' phrases."
        },
        activity1: { title: "The Optimization Game", context: "Async vs Sync.", task: "Design a protocol. 'It's essential to...', 'We don't have to...'." },
        activity2: { title: "Procedure Guide", trainerRole: "New Hire", yourRole: "Manager", steps: ["Explain 'Alignment'.", "Set 'Async' rules.", "Clarify expectations."] },
        feedback: "Outcome: Did you distinguish between 'Don't have to' and 'Mustn't'?"
    },
    12: {
        title: "Unit 12: Leading Organizational Transformation",
        subtitle: "Mastering Diplomacy",
        context: "Change scares people. Leaders must bridge the gap between 'The Vision' and 'The Fear'. Use Future Continuous ('We'll be pivoting') to describe the process gently, and Future Perfect ('We will have transformed') to focus on the result.",
        objectives: [
            "Announce strategic restructuring using diplomatic future forms.",
            "Cast a vision using 'The Why' (Strategic Rationale).",
            "Identify 'Change Curve' stages (Shock -> Denial -> Acceptance)."
        ],
        greeting: { text: "We are restructuring. 20% of roles will change. How do you announce this without causing panic?" },
        slides: [
            {
                title: "Vision Casting",
                context: "A CEO announcing a Digital Transformation. Notice the reassuring tone.",
                dialogue: [
                    {spk:"CEO",txt:"I have news. Over the next few weeks, we'll be pivoting to a digital-first model."}, 
                    {spk:"Staff",txt:"What? Why? Is the company failing?"},
                    {spk:"CEO",txt:"I understand this is sudden. The strategic rationale is to future-proof the business."},
                    {spk:"Staff",txt:"So, will we lose our jobs?"},
                    {spk:"CEO",txt:"We'd like to assure you that this is about upskilling. The vision is growth."},
                    {spk:"Staff",txt:"When is this happening?"},
                    {spk:"CEO",txt:"The transition starts in May. By July, we will have integrated the new AI tools."},
                    {spk:"Staff",txt:"I'm anxious about the new tech."},
                    {spk:"CEO",txt:"I hear you. We will be holding workshops all next week to support you."},
                    {spk:"Staff",txt:"Okay. I'll reserve judgment."}
                ],
                bad: ["We will cut jobs.", "Stop worrying.", "It is decided."],
                good: ["The strategic rationale is...", "We'll be pivoting...", "We will have integrated..."],
                expressions: ["The strategic rationale is...", "We'll be pivoting to...", "We'd like to assure you that...", "By [Date], we will have..."]
            }
        ],
        expressionBank: {
            title: "Leading Change",
            phrases: [
                "The strategic rationale is...",
                "We are pivoting towards...",
                "We'll be implementing a new...",
                "By Q4, we will have completed...",
                "We'd like to assure you that...",
                "This is about future-proofing.",
                "We are well aware of the concerns.",
                "The vision entails..."
            ],
            samples: [
                "The strategic rationale is to position us for long-term growth.",
                "We are pivoting towards a service-based revenue model.",
                "We'll be implementing a new CRM system next quarter.",
                "By Q4, we will have completed the merger integration.",
                "We'd like to assure you that your roles are secure.",
                "This restructuring is about future-proofing the organization against market shifts.",
                "We are well aware of the concerns regarding workload.",
                "The vision entails a seamless, digital-first customer experience."
            ]
        },
        controlled: {
            title: "Grammar: Future Continuous vs. Perfect",
            words: ["will have finished", "will be implementing", "will have been", "will be holding", "will be working", "will have left", "will be staying", "will have improved"],
            sentences: [
                { pre: "Future Perfect (Completed): By Dec, we", blank: "will have finished", post: "the pivot." },
                { pre: "Future Continuous (Process): Next month, we", blank: "will be implementing", post: "the AI." },
                { pre: "Future Continuous (Plan): We", blank: "will be holding", post: "town halls." },
                { pre: "Future Perfect (Duration): By 2025, we", blank: "will have been", post: "digital for a year." },
                { pre: "Future Continuous: Everyone", blank: "will be working", post: "agile." },
                { pre: "Future Perfect: By 5 PM, he", blank: "will have left", post: "." },
                { pre: "Future Continuous: I", blank: "will be staying", post: "late." },
                { pre: "Future Perfect: We hope margins", blank: "will have improved", post: "." }
            ]
        },
        vocab: [
            {id:"v1",word:"Pivot",def:"To fundamentally change the strategic direction of a business."}, 
            {id:"v2",word:"Restructuring",def:"Reorganizing the legal, ownership, operational, or other structures of a company."}, 
            {id:"v3",word:"Rationale",def:"A set of reasons or a logical basis for a course of action."}, 
            {id:"v4",word:"Future-proof",def:"To design software, a computer, etc., so that it can still be used in the future."}
        ],
        vocabPractice: {
            title: "Strategic Vocabulary in Context",
            sentences: [
                { pre: "We decided to", blank: "pivot", post: "to a subscription model." },
                { pre: "The", blank: "restructuring", post: "will impact middle management." },
                { pre: "What is the strategic", blank: "rationale", post: "for this move?" },
                { pre: "We need to", blank: "future-proof", post: "our supply chain." },
                { pre: "The", blank: "pivot", post: "was necessary for survival." },
                { pre: "Organizational", blank: "restructuring", post: "is painful but needed." },
                { pre: "Explain the", blank: "rationale", post: "to the stakeholders." },
                { pre: "This tech helps us", blank: "future-proof", post: "the business." }
            ]
        },
        challenge: {
            title: "The Town Hall Announcement",
            context: "Announce: 'Organizational Restructuring'.",
            task: "Student A: Present plan (Future Cont/Perfect). Explain 'Rationale'. Student B: Raise 'Anxious' concerns."
        },
        activity1: { title: "Change Management Vote", context: "Proposing a new structure.", task: "Handle 'No' voters. 'I see your point, but the rationale is...'." },
        activity2: { title: "The Staff Survey", trainerRole: "HR Director", yourRole: "CEO", steps: ["Analyze 'Anxious' staff.", "Plan intervention.", "Draft email."] },
        feedback: "Outcome: Did you use Future Perfect to set a clear 'End Date'?"
    },
    13: {
        title: "Unit 13: Strategic Data Narrative",
        subtitle: "Speaking with Impact",
        context: "Data without a story is just numbers. Don't just describe the line ('It went up'); explain the causality ('Market Share rocketed due to...'). Use dynamic vocabulary and cite sources to add authority.",
        objectives: [
            "Describe trends using dynamic verbs ('Rocketed', 'Plummeted').",
            "Report information using Reported Speech (Backshifting).",
            "Explain causality: 'The story behind the numbers'."
        ],
        chart: {
            title: "Market Share vs Competitor",
            yAxisLabel: "Share %",
            trendDescription: "Notice the inverse relationship: Our share rocketed while Competitor plummeted.",
            data: [
                { label: 'Q1', value: 10 },
                { label: 'Q2', value: 15 },
                { label: 'Q3', value: 20 },
                { label: 'Q4', value: 50 }, // Rocket
                { label: 'Q1', value: 48 }, // Level off
                { label: 'Q2', value: 45 },
                { label: 'Q3', value: 10 }, // Plummet
                { label: 'Q4', value: 15 },
                { label: 'Q1', value: 20 },
                { label: 'Q2', value: 25 }
            ]
        },
        greeting: { text: "Look at the chart. Is this a 'disaster' or an 'opportunity'? What is the story behind the Q3 drop?" },
        slides: [
            {
                title: "Dynamic Trends & Reporting",
                context: "A CFO explaining the Market Share volatility. Notice the causality.",
                dialogue: [
                    {spk:"CEO",txt:"I'm looking at the chart. What happened in Q3? That drop is terrifying."}, 
                    {spk:"CFO",txt:"I know. As you can see, market share plummeted from 45% to 10%."},
                    {spk:"CEO",txt:"Plummeted is right. Why?"},
                    {spk:"CFO",txt:"The primary driver was the supply chain failure. However, look at Q4 last year."},
                    {spk:"CEO",txt:"Yes, it rocketed to 50%."},
                    {spk:"CFO",txt:"Exactly. That was due to the competitor's recall. Then it leveled off."},
                    {spk:"CEO",txt:"Marketing claimed we were recovering."},
                    {spk:"CFO",txt:"They said that leads were up, which is true. We saw a slight recovery."},
                    {spk:"CEO",txt:"So what is the forecast?"},
                    {spk:"CFO",txt:"The bottom line is that while we fluctuated, we are projected to stabilize."}
                ],
                bad: ["It went down.", "He said it is up.", "Line is flat."],
                good: ["Market share plummeted.", "The primary driver was...", "It leveled off."],
                expressions: ["The bottom line is...", "The primary driver was...", "Attributable to...", "Market share rocketed due to..."]
            }
        ],
        expressionBank: {
            title: "Data Storytelling",
            phrases: [
                "The bottom line is...",
                "The primary driver for this variance...",
                "Attributable to...",
                "We saw a significant fluctuation.",
                "Market share rocketed due to...",
                "Projections indicate that...",
                "The overriding trend is...",
                "This figure is misleading because..."
            ],
            samples: [
                "The bottom line is that profitability has increased despite lower revenue.",
                "The primary driver for this variance was the unexpected rise in raw material costs.",
                "The spike in sales is attributable to the new ad campaign.",
                "We saw a significant fluctuation in currency exchange rates.",
                "Market share rocketed due to the competitor's exit from the region.",
                "Projections indicate that we will break even by Q3.",
                "The overriding trend is a shift towards mobile usage.",
                "This figure is misleading because it includes one-off asset sales."
            ]
        },
        controlled: {
            title: "Grammar: Reported Speech",
            words: ["said that", "told me", "asked if", "claimed that", "denied", "predicted", "confirmed", "insisted"],
            sentences: [
                { pre: "Direct: 'Share is up.' -> Indirect: He", blank: "claimed that", post: "share was up." },
                { pre: "Direct: 'I didn't lose data.' -> Indirect: He", blank: "denied", post: "losing data." },
                { pre: "Direct: 'Are we profitable?' -> Indirect: She", blank: "asked if", post: "we were profitable." },
                { pre: "Direct: 'Meeting is at 5.' -> Indirect: He", blank: "told me", post: "the meeting was at 5." },
                { pre: "Direct: 'Prices are rising.' -> Indirect: He", blank: "said that", post: "prices were rising." },
                { pre: "Direct: 'It will rain.' -> Indirect: She", blank: "predicted", post: "it would rain." },
                { pre: "Direct: 'Deal is done.' -> Indirect: He", blank: "confirmed", post: "the deal was done." },
                { pre: "Direct: 'I must see him.' -> Indirect: She", blank: "insisted", post: "on seeing him." }
            ]
        },
        vocab: [
            {id:"v1",word:"Plummet",def:"To fall straight down at high speed."}, 
            {id:"v2",word:"Rocket",def:"To increase very rapidly."}, 
            {id:"v3",word:"Market Share",def:"The portion of a market controlled by a particular company."}, 
            {id:"v4",word:"Variance",def:"The fact or quality of being different, divergent, or inconsistent."}
        ],
        vocabPractice: {
            title: "Describing Data",
            sentences: [
                { pre: "After the recall, our", blank: "market share", post: "plummeted." },
                { pre: "We expect sales to", blank: "rocket", post: "after the launch." },
                { pre: "Explain the", blank: "variance", post: "in the Q3 budget." },
                { pre: "If we lose this account, revenue will", blank: "plummet", post: "." },
                { pre: "We captured 10% more", blank: "market share", post: "." },
                { pre: "Costs began to", blank: "level off", post: "." },
                { pre: "There is a slight", blank: "variance", post: "in the figures." },
                { pre: "Demand tends to", blank: "rocket", post: "in Q4." }
            ]
        },
        challenge: {
            title: "The Quarterly Review",
            context: "Present the Q3 results.",
            task: "Deliver bad news. 1. Describe trends ('Plummeted'). 2. Cite source ('Marketing stated that...'). 3. Summarize: 'The bottom line is...'."
        },
        activity1: { title: "Stock Market Report", context: "Visualizing.", task: "Draw a line. Describe it using 'Fluctuated', 'Peaked', 'Leveled off'." },
        activity2: { title: "WebMix Analysis", trainerRole: "Director", yourRole: "Analyst", steps: ["Analyze drop.", "Compare to WebMix.", "Present theory."] },
        feedback: "Outcome: Did you backshift the tense?"
    },
    14: {
        title: "Unit 14: Global Strategic Alignment",
        subtitle: "Mastering Diplomacy",
        context: "Global business requires navigating 'Hierarchical' (Respect) vs 'Egalitarian' (Equality) cultures. A 'Yes' in Tokyo might mean 'I hear you', not 'I agree'. This unit uses Narrative Tenses to analyze cultural mishaps.",
        objectives: [
            "Analyze cultural values using 'Hierarchical vs. Egalitarian' frameworks.",
            "Tell stories of cultural mishaps using Narrative Tenses.",
            "Depersonalize mistakes using 'It seems that...'."
        ],
        greeting: { text: "In which country is it rude to challenge the boss? Where is it rude NOT to? Why?" },
        slides: [
            {
                title: "Narrative Tenses & Cultural Mishaps",
                context: "A manager explaining a trip to Japan. Notice the narrative tenses.",
                dialogue: [
                    {spk:"A",txt:"How was Tokyo? Did you close?"}, 
                    {spk:"B",txt:"Disaster. It wasn't until I arrived that I realized I had made a faux pas."},
                    {spk:"A",txt:"What happened?"},
                    {spk:"B",txt:"I was presenting. I had just finished when I asked the CEO a direct question."},
                    {spk:"A",txt:"And?"},
                    {spk:"B",txt:"Silence. It seems that in their hierarchical culture, you don't challenge the boss publicly."},
                    {spk:"A",txt:"Ah. They felt you were aggressive."},
                    {spk:"B",txt:"Exactly. Consequently, they didn't sign. I realized I should have researched more."}
                ],
                bad: ["I offended him.", "They are rude.", "I made a mistake."],
                good: ["I realized I had offended him.", "It seems it is hierarchical.", "It came about because..."],
                expressions: ["It seems that...", "It came about because of...", "It wasn't until... that I realized...", "In deference to local protocols..."]
            }
        ],
        expressionBank: {
            title: "Cultural Intelligence",
            phrases: [
                "It seems that...",
                "In deference to local protocols...",
                "To ensure cross-regional alignment...",
                "It wasn't until... that I realized...",
                "Consequently, the deal stalled.",
                "We need to bridge the cultural gap.",
                "It came about because of...",
                "They operate on a hierarchical basis."
            ],
            samples: [
                "It seems that they prioritize relationship building over contract signing.",
                "In deference to local protocols, we should wait for the senior leader to speak first.",
                "To ensure cross-regional alignment, we must respect the local holidays.",
                "It wasn't until the dinner that I realized silence signifies agreement here.",
                "Consequently, the deal stalled because we pushed too hard on the deadline.",
                "We need to bridge the cultural gap by hiring a local consultant.",
                "The misunderstanding came about because of different communication styles.",
                "They operate on a hierarchical basis, so don't bypass the chain of command."
            ]
        },
        controlled: {
            title: "Grammar: Narrative Tenses",
            words: ["was driving", "realized", "had left", "was raining", "stopped", "had been waiting", "met", "were having"],
            sentences: [
                { pre: "Past Continuous: I", blank: "was driving", post: "to the airport." },
                { pre: "Past Simple: I", blank: "realized", post: "something." },
                { pre: "Past Perfect: I", blank: "had left", post: "my passport." },
                { pre: "Past Continuous: It", blank: "was raining", post: "." },
                { pre: "Past Simple: He", blank: "stopped", post: "the car." },
                { pre: "Past Perfect Cont: We", blank: "had been waiting", post: "for hours." },
                { pre: "Past Simple: We", blank: "met", post: "in 2010." },
                { pre: "Past Continuous: We", blank: "were having", post: "lunch." }
            ]
        },
        vocab: [
            {id:"v1",word:"Hierarchical",def:"Respect for authority is paramount (e.g., Japan)."}, 
            {id:"v2",word:"Egalitarian",def:"All people are equal; low power distance (e.g., Sweden)."}, 
            {id:"v3",word:"Collectivist",def:"Emphasizing the group over the individual."}, 
            {id:"v4",word:"Faux pas",def:"A tactless act or remark in a social situation."}
        ],
        vocabPractice: {
            title: "Cultural Vocabulary in Context",
            sentences: [
                { pre: "Japan is a", blank: "hierarchical", post: "society." },
                { pre: "Sweden is known for being", blank: "egalitarian", post: "." },
                { pre: "Wearing shoes inside was a", blank: "faux pas", post: "." },
                { pre: "In", blank: "collectivist", post: "cultures, loyalty is key." },
                { pre: "He struggled with the", blank: "hierarchical", post: "structure." },
                { pre: "It was a serious", blank: "faux pas", post: "." },
                { pre: "In an", blank: "egalitarian", post: "culture, titles matter less." },
                { pre: "Refusing the gift was a", blank: "faux pas", post: "." }
            ]
        },
        challenge: {
            title: "The Critical Incident",
            context: "Debrief a failed meeting.",
            task: "Tell story. 1. Set scene. 2. Mistake. 3. Realization. 4. Analysis ('It seems they are Hierarchical...')."
        },
        activity1: { title: "The Culture Map", context: "Mapping values.", task: "Place countries on scale: Hierarchical vs Egalitarian." },
        activity2: { title: "The Malaysian Problem", trainerRole: "Consultant", yourRole: "Manager", steps: ["Describe delays.", "Analyze clash.", "Propose solution."] },
        feedback: "Outcome: Did you use Past Perfect?"
    },
    15: {
        title: "Unit 15: Executive Performance Management",
        subtitle: "Commanding Authority",
        context: "Giving feedback to a toxic high-performer is a minefield. Use the 'Sandwich' method (Praise-Critique-Praise) and Past Modals ('You could have...') to critique the behavioral impact, not the person.",
        objectives: [
            "Critique toxic behavior using Past Modals ('Should have').",
            "Align behavior with corporate values.",
            "Use the 'Sandwich Method' effectively."
        ],
        greeting: { text: "How do you manage a 'Brilliant Jerk'—high numbers, toxic behavior?" },
        slides: [
            {
                title: "Constructive Criticism & Past Modals",
                context: "A Manager appraising a toxic high-performer.",
                dialogue: [
                    {spk:"Manager",txt:"Let's talk about Q3. Your sales figures were excellent."}, 
                    {spk:"Employee",txt:"Thanks. I crushed the target."},
                    {spk:"Manager",txt:"However, one area I'd like to mention is team cohesion. Your comments in the meeting were abrasive."},
                    {spk:"Employee",txt:"I was just being honest. They were slow."},
                    {spk:"Manager",txt:"I understand your frustration, but you should have raised that privately. Your impact on culture was negative."},
                    {spk:"Employee",txt:"I didn't realize."},
                    {spk:"Manager",txt:"In future, you need to align with our values. Can I identify that as a goal?"},
                    {spk:"Employee",txt:"Yes."},
                    {spk:"Manager",txt:"Great. Aside from that, your drive is commendable."}
                ],
                bad: ["You were rude.", "Stop it.", "You failed."],
                good: ["You should have raised that privately.", "Your impact on culture...", "One area I'd like to mention..."],
                expressions: ["One area I'd like to mention is...", "You should have handled that...", "Your impact on team cohesion...", "Align with our values."]
            }
        ],
        expressionBank: {
            title: "Behavioral Feedback",
            phrases: [
                "One area I'd like to mention is...",
                "You should have handled that differently.",
                "Your impact on team cohesion was...",
                "We need to ensure alignment with our values.",
                "Can I identify that as a personal goal?",
                "I must say, your results are...",
                "Going forward, I expect...",
                "It's crucial we maintain a positive culture."
            ],
            samples: [
                "One area I'd like to mention is your punctuality in client meetings.",
                "You should have handled that conflict offline rather than in the open office.",
                "Your impact on team cohesion was negative due to those comments.",
                "We need to ensure alignment with our values of respect and integrity.",
                "Can I identify 'active listening' as a personal goal for next quarter?",
                "I must say, your results are outstanding this year.",
                "Going forward, I expect you to mentor the junior staff.",
                "It's crucial we maintain a positive culture, regardless of sales targets."
            ]
        },
        controlled: {
            title: "Grammar: Third Conditional / Past Modals",
            words: ["should have", "would have", "could have", "had known", "might have", "wouldn't have", "shouldn't have", "had worked"],
            sentences: [
                { pre: "Third Conditional: If I", blank: "had known", post: ", I would have acted." },
                { pre: "Past Modal (Critique): You", blank: "should have", post: "emailed me." },
                { pre: "Past Modal (Risk): We", blank: "could have", post: "lost the client." },
                { pre: "Third Conditional: If she hadn't left, we", blank: "would have", post: "won." },
                { pre: "Past Modal (Suggestion): You", blank: "might have", post: "asked." },
                { pre: "Negative Result: It", blank: "wouldn't have", post: "happened." },
                { pre: "Negative Advice: You", blank: "shouldn't have", post: "said that." },
                { pre: "Hypothetical: If we", blank: "had worked", post: "together, we would have won." }
            ]
        },
        vocab: [
            {id:"v1",word:"Appraisal",def:"Formal assessment of performance."}, 
            {id:"v2",word:"Criteria",def:"Standards by which something is judged."}, 
            {id:"v3",word:"Cohesion",def:"The action of forming a united whole (Teamwork)."}, 
            {id:"v4",word:"Delegate",def:"Entrust a task to another."}
        ],
        vocabPractice: {
            title: "Strategic Vocabulary in Context",
            sentences: [
                { pre: "My annual", blank: "appraisal", post: "is tomorrow." },
                { pre: "We need clear", blank: "criteria", post: "." },
                { pre: "Team", blank: "cohesion", post: "is suffering." },
                { pre: "You must", blank: "delegate", post: "more." },
                { pre: "If you don't", blank: "delegate", post: ", you burn out." },
                { pre: "The", blank: "appraisal", post: "system is new." },
                { pre: "The", blank: "criteria", post: "are strict." },
                { pre: "We need better", blank: "cohesion", post: "." }
            ]
        },
        challenge: {
            title: "The Behavioral Appraisal",
            context: "Appraise a toxic high-performer.",
            task: "Sandwich: 1. Praise results. 2. Critique behavior ('You should have...'). 3. Set Goal ('Align values'). 4. End positive."
        },
        activity1: { title: "Overcoming Setbacks", context: "Kodak analysis.", task: "Use Third Conditional: 'If they had invested...'." },
        activity2: { title: "The 360 Review", trainerRole: "Boss", yourRole: "Employee", steps: ["Write review.", "Suggest 'Delegation'.", "Keep it constructive."] },
        feedback: "Outcome: Did you use 'Should have' for mistakes?"
    },
    // --- ASSESSMENTS (Newly Added to Fix Missing IDs) ---
    101: {
        type: 'quiz',
        title: "Module 1 Assessment: Foundations",
        subtitle: "Executive Competency Check",
        context: "Test your command of Executive Presence, Strategic Motivation, and Resource Negotiation.",
        quiz: [
            {
                id: 1,
                question: "You need to bypass a gatekeeper and connect with a C-suite peer. Which opening uses the 'Executive Bridge'?",
                scenario: "Networking at a summit.",
                options: [
                    "Hello, I want to discuss a synergy opportunity.",
                    "Sarah Jenkins suggested I connect with you regarding your APAC restructuring.",
                    "I am the CEO of Zentia and we do logistics.",
                    "Do you have a minute to talk about supply chains?"
                ],
                correctAnswer: 1,
                explanation: "Referencing a mutual heavyweight (Sarah Jenkins) and a specific strategic pain point (Restructuring) establishes immediate peer-level credibility."
            },
            {
                id: 2,
                question: "You are negotiating headcount. You cannot agree unless they compromise on the timeline. Which phrase attaches a strategic condition?",
                scenario: "Resource Allocation meeting.",
                options: [
                    "I can't do that unless you help me.",
                    "I might consider it, provided that you delay the Beta launch.",
                    "If you give me headcount, I give you the engineer.",
                    "No, that is impossible."
                ],
                correctAnswer: 1,
                explanation: "'Provided that' is a formal, high-stakes conditional used to secure binding trade-offs."
            },
            {
                id: 3,
                question: "A direct report interrupts you with a minor issue while you are rushing to a Board Meeting. How do you exit effectively?",
                scenario: "The 'Have You Got a Minute?' Trap.",
                options: [
                    "I'm busy right now.",
                    "Talk to me later.",
                    "I value your input, but I'm running into a hard stop. Let's circle back at 4 PM.",
                    "Send me an email instead."
                ],
                correctAnswer: 2,
                explanation: "Validates the person ('I value your input') but enforces boundaries ('Hard stop') and schedules a specific follow-up."
            },
            {
                id: 4,
                question: "Which sentence conveys 'Strategic Agility' (Current, active initiative) rather than static authority?",
                scenario: "Describing your role.",
                options: [
                    "I oversee the compliance division.",
                    "Our firm specializes in M&A.",
                    "We are currently spearheading a digital transformation initiative.",
                    "I manage the sales team."
                ],
                correctAnswer: 2,
                explanation: "Present Continuous ('currently spearheading') implies dynamic, ongoing strategic action."
            },
            {
                id: 5,
                question: "You want to drive consensus on a risky decision. Which Question Tag checks for agreement?",
                scenario: "Boardroom alignment.",
                options: [
                    "This acquisition is risky, is it?",
                    "We need to mitigate this risk, shouldn't we?",
                    "You agree, no?",
                    "We are doing this, aren't we?"
                ],
                correctAnswer: 1,
                explanation: "'Shouldn't we?' invites agreement on a moral or strategic necessity."
            }
        ]
    },
    102: {
        type: 'quiz',
        title: "Module 2 Assessment: Strategy",
        subtitle: "Executive Competency Check",
        context: "Test your skills in Pitching Innovation, Crisis Diplomacy, and Governance.",
        quiz: [
            {
                id: 1,
                question: "You are pitching a $5M AI project. How do you frame the problem to highlight the benefit?",
                scenario: "The ROI Pitch.",
                options: [
                    "Our current system is old.",
                    "Whereas currently our forecasting is reactive, this engine enables real-time adaptation.",
                    "We need new AI because it is cool.",
                    "The problem is speed."
                ],
                correctAnswer: 1,
                explanation: "The 'Whereas currently... [Problem], with this... [Benefit]' structure clearly contrasts the status quo with the strategic value."
            },
            {
                id: 2,
                question: "A strategic partner is furious about a data breach. You need to investigate without admitting liability yet.",
                scenario: "Crisis De-escalation.",
                options: [
                    "Why did it happen?",
                    "It wasn't our fault.",
                    "Could you explain exactly when the alert triggered?",
                    "Calm down, we will fix it."
                ],
                correctAnswer: 2,
                explanation: "Indirect questions ('Could you explain...') gather facts neutrally without sounding accusatory or defensive."
            },
            {
                id: 3,
                question: "You are announcing a new sustainability initiative. Which future form conveys the strongest commitment?",
                scenario: "Press Conference.",
                options: [
                    "We might reduce emissions.",
                    "We are going to eliminate carbon emissions by 2030.",
                    "We will try to be greener.",
                    "The plan is to check emissions."
                ],
                correctAnswer: 1,
                explanation: "'Going to' expresses a strong, pre-meditated intention or plan."
            },
            {
                id: 4,
                question: "What does 'Commercial Viability' mean?",
                scenario: "Innovation Review.",
                options: [
                    "The ability of a product to compete and make a profit.",
                    "It is popular.",
                    "It is legally compliant.",
                    "It is cheap to make."
                ],
                correctAnswer: 0,
                explanation: "Commercial viability assesses whether a product can survive and thrive financially in the market."
            },
            {
                id: 5,
                question: "You need to reduce the severity of a risk. What action are you taking?",
                scenario: "Risk Management.",
                options: [
                    "Escalation",
                    "Mitigation",
                    "Litigation",
                    "Delegation"
                ],
                correctAnswer: 1,
                explanation: "Mitigation refers to the action of reducing the severity, seriousness, or painfulness of something."
            }
        ]
    },
    103: {
        type: 'quiz',
        title: "Module 3 Assessment: Operations",
        subtitle: "Executive Competency Check",
        context: "Test your command of Strategic Decision Making and Operational Efficiency.",
        quiz: [
            {
                id: 1,
                question: "The meeting is going in circles. How do you assert control as Chair?",
                scenario: "Board Meeting.",
                options: [
                    "Shut up.",
                    "Can we move on to the next item?",
                    "This is boring.",
                    "I am the boss."
                ],
                correctAnswer: 1,
                explanation: "'Can we move on...' is a polite but firm way to steer the agenda and stop circular debate."
            },
            {
                id: 2,
                question: "You are arguing that the budget for licenses (uncountable) is excessive.",
                scenario: "OpEx Review.",
                options: [
                    "We are spending too many on licenses.",
                    "We are spending too much on licenses.",
                    "We have fewer money.",
                    "We have many money."
                ],
                correctAnswer: 1,
                explanation: "Money/Budget is uncountable, so 'Too much' is correct. 'Too many' is for countable items."
            },
            {
                id: 3,
                question: "Why use the Passive Voice when announcing job cuts ('Roles were made redundant')?",
                scenario: "Restructuring Announcement.",
                options: [
                    "To be confusing.",
                    "To sound friendly.",
                    "To depersonalize the action and sound objective.",
                    "To blame the employees."
                ],
                correctAnswer: 2,
                explanation: "The Passive Voice removes the agent ('We fired...'), focusing on the action itself to sound professional and objective."
            },
            {
                id: 4,
                question: "What is the difference between OpEx and CapEx?",
                scenario: "Budget Planning.",
                options: [
                    "OpEx is for future assets; CapEx is for wages.",
                    "OpEx is operational (ongoing); CapEx is capital (assets).",
                    "They are the same.",
                    "CapEx is only for marketing."
                ],
                correctAnswer: 1,
                explanation: "OpEx (Operational Expenditure) covers day-to-day costs; CapEx (Capital Expenditure) covers major long-term assets."
            },
            {
                id: 5,
                question: "If you 'Streamline' a process, what is the strategic goal?",
                scenario: "Efficiency Drive.",
                options: [
                    "To make it more complex.",
                    "To increase efficiency by removing unnecessary steps.",
                    "To hire more people.",
                    "To spend more money."
                ],
                correctAnswer: 1,
                explanation: "Streamlining involves simplifying processes to improve efficiency and speed."
            }
        ]
    },
    104: {
        type: 'quiz',
        title: "Module 4 Assessment: Development",
        subtitle: "Executive Competency Check",
        context: "Test your skills in Project Oversight, Internal Influence, and Leading Change.",
        quiz: [
            {
                id: 1,
                question: "The project scope keeps expanding without budget. What is this called?",
                scenario: "Project Status Report.",
                options: [
                    "Scope Creep",
                    "Agile",
                    "Synergy",
                    "Pivot"
                ],
                correctAnswer: 0,
                explanation: "Scope Creep refers to uncontrolled changes or continuous growth in a project's scope."
            },
            {
                id: 2,
                question: "You want to emphasize the duration of your lobbying efforts. Which tense is best?",
                scenario: "Internal Networking.",
                options: [
                    "I lobby for this.",
                    "I have been lobbying for this initiative for months.",
                    "I lobbied.",
                    "I will lobby."
                ],
                correctAnswer: 1,
                explanation: "Present Perfect Continuous ('have been lobbying') emphasizes the ongoing duration and effort."
            },
            {
                id: 3,
                question: "In a hybrid meeting, audio quality is poor. What is the technical term for the delay?",
                scenario: "Virtual Comm.",
                options: [
                    "Echo",
                    "Latency",
                    "Volume",
                    "Mute"
                ],
                correctAnswer: 1,
                explanation: "Latency refers to the delay in data transfer, often causing 'lag' in calls."
            },
            {
                id: 4,
                question: "You are announcing a restructuring. Which phrase projects a successful completion in the future?",
                scenario: "Vision Casting.",
                options: [
                    "We are trying to change.",
                    "By Q4, we will have transformed our legacy systems.",
                    "We will change soon.",
                    "We might be different."
                ],
                correctAnswer: 1,
                explanation: "Future Perfect ('will have transformed') projects a completed state, offering certainty amidst change."
            },
            {
                id: 5,
                question: "You need internal buy-in. You ask a peer to...",
                scenario: "Intrapreneurship.",
                options: [
                    "Socialize the idea with their team.",
                    "Buy the idea.",
                    "Ignore the idea.",
                    "Block the idea."
                ],
                correctAnswer: 0,
                explanation: "'Socialize' means to spread an idea informally to gain consensus and support."
            }
        ]
    },
    105: {
        type: 'quiz',
        title: "Module 5 Assessment: Management",
        subtitle: "Executive Competency Check",
        context: "Test your command of Data Storytelling, Cultural Intelligence, and Performance Management.",
        quiz: [
            {
                id: 1,
                question: "Market share increased rapidly. Which dynamic verb describes this?",
                scenario: "Data Presentation.",
                options: [
                    "Increased slightly",
                    "Leveled off",
                    "Rocketed",
                    "Fluctuated"
                ],
                correctAnswer: 2,
                explanation: "'Rocketed' implies a sharp, rapid, and significant upward trend."
            },
            {
                id: 2,
                question: "In a 'Hierarchical' culture (e.g., Japan), how should you handle disagreement?",
                scenario: "Global Strategy.",
                options: [
                    "Challenge the boss publicly.",
                    "Defer to authority and raise issues privately.",
                    "Ignore the boss.",
                    "Treat everyone as equal."
                ],
                correctAnswer: 1,
                explanation: "In hierarchical cultures, public respect for authority is paramount; disagreement is handled privately."
            },
            {
                id: 3,
                question: "You are critiquing a toxic high-performer. Which structure focuses on the past mistake?",
                scenario: "Behavioral Appraisal.",
                options: [
                    "You must do better.",
                    "You should have raised that issue offline.",
                    "You will do better.",
                    "Don't do that."
                ],
                correctAnswer: 1,
                explanation: "'Should have' is a Past Modal used to critique a past action or express regret about a missed obligation."
            },
            {
                id: 4,
                question: "What is the 'Sandwich Method' of feedback?",
                scenario: "Performance Review.",
                options: [
                    "Critique - Critique - Critique",
                    "Praise - Critique - Praise",
                    "Praise - Praise - Praise",
                    "Ignore it."
                ],
                correctAnswer: 1,
                explanation: "The Sandwich Method softens the blow of criticism by placing it between opening and closing positive statements."
            },
            {
                id: 5,
                question: "The CFO said: 'Sales are down.' How do you report this?",
                scenario: "Reported Speech.",
                options: [
                    "He said that sales are down.",
                    "He said that sales were down.",
                    "He says sales down.",
                    "He claimed sales have been down."
                ],
                correctAnswer: 1,
                explanation: "In Reported Speech, the present tense ('are') typically backshifts to the past tense ('were')."
            }
        ]
    }
};