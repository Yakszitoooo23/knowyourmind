interface MindType {
  name: string
  oneLiner: string
  landingPreview: string
  description: string
  strengths: string[]
  howYouLearn: string
  howYouCommunicate: string
  deepDive: string
  blindSpots: string
  howYouLead: string
  careers: string[]
  famousMinds: string[]
  thirtyDayPlan: string
  letter: string
}

export const types: {
  decoder: MindType
  visionary: MindType
  architect: MindType
  empath: MindType
  executor: MindType
  philosopher: MindType
} = {
  decoder: {
    name: 'The Decoder',
    oneLiner: "You see what's broken before anyone else knows it's cracking.",
    landingPreview:
      "You see what's broken before anyone else knows it's cracking. Your brain runs on logic while everyone else runs on emotion. You don't guess. You calculate.",
    description:
      "Your brain runs on logic while everyone else runs on emotion. You don't guess. You calculate. You don't assume. You verify. While others react with their gut, you're gathering data, spotting patterns, and building frameworks that actually hold up under pressure.\n\nYou've always been the one who asks \"but how does it actually work?\" Surface explanations frustrate you. You need to see the mechanism underneath. The structure. The why behind the what. This makes you invaluable in a world full of fuzzy thinking and lazy assumptions.\n\nPeople have called you \"cold\" or said you \"overthink everything.\" They're wrong. You're not overthinking. You're thinking at a depth they can't access. You're three steps ahead, watching them make mistakes you predicted last week. While they're still reacting to problems, you've already diagnosed the root cause and mapped three solutions.\n\nYour mind breaks complex chaos into clean, manageable parts. Where others see an overwhelming mess, you see a system waiting to be understood. That's not a skill you learned. That's how you're wired. And it's rare.",
    strengths: [
      'Breaking down complex problems into clear parts',
      'Spotting errors and inconsistencies others miss',
      'Making decisions based on evidence, not emotion',
      'Building systems and frameworks that actually work',
      'Seeing through false logic and weak arguments',
    ],
    howYouLearn:
      "You learn best when you understand the underlying theory first. You want the manual, the documentation, the 'why' behind the 'what'. Jumping in without understanding the system feels reckless to you. Give yourself permission to take time to understand — it's not slow, it's thorough.",
    howYouCommunicate:
      "You communicate with precision. You choose words carefully and expect others to do the same. Small talk drains you; substantive conversation energizes you. You may need to remember that not everyone needs the same level of detail you do — sometimes the summary is enough.",
    deepDive:
      "The Decoder mind is one of the rarest and most valuable cognitive types. Your ability to think systematically in a world of chaos is a genuine superpower.\n\nYou likely discovered early that your brain works differently. While other kids were playing, you were figuring out how things worked. While others accepted explanations at face value, you were asking follow-up questions that made adults uncomfortable.\n\nThis pattern continued into adulthood. You're the one who reads the fine print. You're the one who builds the spreadsheet. You're the one who finds the bug in the system everyone else missed.\n\nYour challenge is learning when analysis becomes procrastination. Your desire for complete information can delay action indefinitely. The truth is, you'll never have perfect data — and waiting for it is its own form of failure.\n\nThe most successful Decoders learn to set 'good enough' thresholds. They decide in advance: 'When I have X level of confidence, I act.' This preserves your analytical gift while preventing paralysis.",
    blindSpots:
      "Your biggest blind spot is emotional data. You may dismiss feelings — yours or others' — as irrational noise. But emotions are information too. They tell you what matters, what's at stake, what needs attention. The Decoder who learns to read emotional data alongside logical data becomes unstoppable.",
    howYouLead:
      "You lead through competence and clarity. People follow you because you actually know what you're talking about and you can explain complex situations simply. Your leadership style is calm, rational, and reassuring in crisis. Develop your ability to inspire emotionally, not just convince logically.",
    careers: [
      'Data Scientist or Analyst',
      'Software Engineer or Architect',
      'Research Scientist',
      'Financial Analyst or Strategist',
      'Operations Manager or Consultant',
    ],
    famousMinds: [
      'Marie Curie — relentless analytical pursuit of truth',
      'Bill Gates — systematic problem-solving at scale',
      'Sherlock Holmes — pattern recognition and logical deduction',
      'Alan Turing — breaking impossible codes through pure logic',
      'Ruth Bader Ginsburg — precise legal reasoning',
    ],
    thirtyDayPlan:
      "Week 1: Identify one area where you're over-analyzing and set a decision deadline. Practice acting with 80% confidence instead of waiting for 100%.\n\nWeek 2: Have three conversations where you focus only on understanding the other person's feelings, not solving their problem. Just listen.\n\nWeek 3: Take on a creative project with no 'right answer' — art, writing, or music. Notice your discomfort and stay with it.\n\nWeek 4: Teach someone else your analytical process. This will clarify your own thinking and build connection.",
    letter:
      "Dear friend,\n\nI see you. The one who thinks three steps deeper than everyone else. The one who sees the flaw in the plan that nobody wants to hear about. The one who gets called 'too logical' as if that's an insult.\n\nYour mind is a gift, even when it feels like a burden. The world needs people who can see clearly, who can cut through noise, who can find the signal in the chaos.\n\nBut remember: not every problem is a puzzle to solve. Some situations just need presence. Some people just need to be heard, not fixed.\n\nYour analytical mind will take you far. Pair it with a warm heart, and you'll be unstoppable.\n\nWith respect",
  },
  visionary: {
    name: 'The Visionary',
    oneLiner: "You see worlds that don't exist yet.",
    landingPreview:
      "You see worlds that don't exist yet. Ideas hit you constantly. In the shower, at 2 AM, mid conversation. Connections that seem random to others feel obvious to you.",
    description:
      "Your mind doesn't follow paths. It creates them. While others look at what is, you're already imagining what could be. Ideas hit you constantly. In the shower, at 2 AM, mid conversation, while everyone else is focused on something completely unrelated. Connections that seem random to others feel obvious to you.\n\nYou've been told your whole life that you're \"too much.\" Too many ideas. Too many interests. Too many tabs open in your brain. What they see as chaos, you experience as a web of infinite possibilities. Every new piece of information connects to everything else in your mind, sparking new ideas before you've even finished processing the last one.\n\nPeople have tried to make you focus. Pick one thing. Settle down. But your brain doesn't work that way. And that's not a flaw. That's your edge. In a world that rewards conformity and following the established path, you're the one asking \"what if we tried something completely different?\"\n\nYour superpower is original thinking. You see solutions nobody else sees because you're not limited by how things have always been done. The world needs people who can imagine what doesn't exist yet. That's you. Stop apologizing for it.",
    strengths: [
      "Generating original ideas others don't see",
      'Making unexpected connections between concepts',
      'Thinking divergently when everyone else thinks convergently',
      'Bringing fresh perspective to stale problems',
      'Imagining possibilities before they exist',
    ],
    howYouLearn:
      "You learn best through exploration and experimentation. Rigid curricula frustrate you. You want to pull threads, go down rabbit holes, and discover your own path to understanding. Give yourself permission to learn non-linearly — it's not distraction, it's how your mind maps new territory.",
    howYouCommunicate:
      "You communicate in ideas and possibilities. Your conversations jump between topics in ways that excite you but may lose others. You speak in metaphors and 'what ifs'. Practice grounding your ideas in concrete examples — it helps others see what you see.",
    deepDive:
      "The Visionary mind is the source of all innovation. Every product you use, every song you love, every solution that changed the world came from a mind like yours.\n\nBut Visionary intelligence is often misunderstood. Society rewards execution over ideation, completion over exploration. You've probably internalized the message that your ideas don't count unless you finish them.\n\nThis is a lie. Your ideas have value even as seeds. Your job is to plant as many as possible. Some will grow, many won't — and that's exactly how it's supposed to work.\n\nYour challenge is the gap between vision and reality. You see the finished masterpiece in your mind, but the work of creating it feels tedious. The first draft is ugly, and ugly is painful for someone who can see beautiful so clearly.\n\nThe most successful Visionaries learn to embrace the messy middle. They develop systems for capturing ideas (so they don't lose them) and routines for executing (so ideas become real). They also learn which ideas deserve their energy and which are just mental entertainment.",
    blindSpots:
      "Your biggest blind spot is completion. Starting is exhilarating; finishing is exhausting. You may have a trail of 80%-done projects behind you. The final 20% requires a different kind of energy — sustained, detail-oriented, patient. Partner with people who have this energy, or develop practices that help you push through.",
    howYouLead:
      "You lead through vision and inspiration. People follow you because you show them a future they want to be part of. You're the leader who says 'imagine if...' and makes people believe. Develop your ability to create structure that supports your vision — or partner with people who can.",
    careers: [
      'Designer (any medium)',
      'Entrepreneur or Founder',
      'Marketing or Brand Strategist',
      'Writer, Artist, or Content Creator',
      'Innovation or R&D Lead',
    ],
    famousMinds: [
      'Steve Jobs — vision that bent reality',
      'Leonardo da Vinci — curiosity without boundaries',
      'Lady Gaga — constant reinvention',
      'Walt Disney — imagination made tangible',
      'David Bowie — creative evolution as lifestyle',
    ],
    thirtyDayPlan:
      "Week 1: Pick ONE project and commit to finishing it before starting anything new. Notice the resistance and push through.\n\nWeek 2: Create a 'capture system' for ideas — a notes app, voice memos, or notebook. Get ideas out of your head and into a trusted place.\n\nWeek 3: Share an unfinished idea with someone you trust. Practice being seen in the messy middle, not just at the polished end.\n\nWeek 4: Study one creative master's process. Notice how they balanced exploration with execution.",
    letter:
      "Dear friend,\n\nYour mind is a garden that never stops blooming. While others see one flower, you see entire ecosystems of possibility. This is your gift — and I know it sometimes feels like a curse.\n\nThe world will try to tame you. It will ask you to focus, to specialize, to pick one thing. And maybe sometimes you should. But never let them convince you that your abundance is a problem.\n\nThe trick isn't to have fewer ideas. It's to build a life where your ideas can breathe, grow, and sometimes become real. Not all of them. Just enough.\n\nKeep creating. The world needs what only you can see.\n\nWith admiration",
  },
  architect: {
    name: 'The Architect',
    oneLiner: "You're playing chess. Everyone else is playing checkers.",
    landingPreview:
      "You're playing chess. Everyone else is playing checkers. While others react to the present, your mind is already running simulations. Three moves ahead. Five. Ten.",
    description:
      "You don't just see what's happening. You see what's coming. While others react to the present moment, your mind is already running simulations. Three moves ahead. Five. Ten. You're calculating consequences and positioning for outcomes that won't materialize for months or even years.\n\nYou've always noticed patterns others miss. Not just what people do, but why they do it. Not just what's happening, but what it means and where it leads. Every action creates ripples, and you can see exactly where those ripples are heading while everyone else is still staring at the splash.\n\nPeople think you're lucky when things work out for you. They have no idea. Luck has nothing to do with it. You engineered this outcome six months ago. You saw the moves, anticipated the obstacles, and positioned yourself accordingly. They just weren't paying attention.\n\nYour strength is anticipation. In a world full of reactive thinkers who are constantly blindsided by \"sudden\" changes, you're proactive. You're calm in chaos because you already knew the chaos was coming. That's not paranoia. That's strategic intelligence operating at a level most people will never understand.",
    strengths: [
      'Seeing long-term consequences of current actions',
      'Anticipating problems before they happen',
      'Understanding complex systems and how they interact',
      'Planning multiple moves ahead',
      'Staying calm when others panic because you already have a plan',
    ],
    howYouLearn:
      "You learn best when you understand the strategic context. Why does this matter? Where does it lead? How does it fit into the bigger picture? Pure information without context frustrates you. You want the map, not just the directions.",
    howYouCommunicate:
      "You communicate in frameworks and implications. You often start with the conclusion and work backward. Others may find you hard to follow because you skip steps that seem obvious to you. Practice making your reasoning visible — show your work.",
    deepDive:
      "The Architect mind is wired for chess while everyone else is playing checkers. This is both your greatest asset and your heaviest burden.\n\nYou probably learned early that you could see things others couldn't. Consequences that seemed obvious to you blindsided everyone else. Patterns that jumped out at you were invisible to most people. This may have felt isolating — like you were always watching a different movie than everyone else.\n\nYour strategic ability comes from unconscious pattern recognition built on careful observation. You've been watching human behavior, systems, and cause-and-effect your whole life. That data is now a predictive engine that runs automatically.\n\nYour challenge is the present moment. You're so focused on where things are going that you may miss where things are. You can be so busy optimizing the future that you forget to live in the now.\n\nThe most successful Architects learn to balance planning with presence. They build their strategic plans, then practice releasing attachment to them. They hold their predictions loosely, knowing that the map is not the territory.",
    blindSpots:
      "Your biggest blind spot is over-complexity. You can see so many moves ahead that you overcomplicate situations that are actually simple. Sometimes the right move is the obvious one. Sometimes people mean exactly what they say. Not everything is chess.",
    howYouLead:
      "You lead through clarity and direction. People follow you because you see where things are going and you can show them the path. You're calm in crisis because you've already run the simulations. Develop your ability to inspire in the present, not just plan for the future.",
    careers: [
      'Executive or C-Suite Leader',
      'Management Consultant',
      'Investment or Venture Strategist',
      'Product Manager or Strategist',
      'Military or Political Advisor',
    ],
    famousMinds: [
      'Elon Musk — multi-decade strategic thinking',
      'Sun Tzu — timeless strategic principles',
      'Angela Merkel — patient long-game politics',
      'Warren Buffett — strategic patience personified',
      'Tyrion Lannister — strategy through wit and foresight',
    ],
    thirtyDayPlan:
      "Week 1: Practice being fully present for 10 minutes daily. No planning, no optimizing — just noticing what is.\n\nWeek 2: Identify a situation where you're overcomplicating. Ask: what's the simplest possible interpretation?\n\nWeek 3: Share your strategic thinking process with someone. Help them see how you see — this builds connection and clarifies your own thinking.\n\nWeek 4: Make one decision based purely on intuition, without strategic analysis. Notice what happens.",
    letter:
      "Dear friend,\n\nI know you're tired. Tired of seeing what's coming while everyone else is surprised. Tired of being right and having no one listen until it's too late. Tired of playing chess alone.\n\nYour strategic mind is a gift, even when it feels like exile. The world needs people who can see around corners, who can anticipate and prepare, who can navigate complexity with calm.\n\nBut remember to come back to now sometimes. The present moment is where life actually happens. All your strategic planning is in service of creating a life worth living — don't forget to live it.\n\nThe future you're planning for? It includes joy. Make sure you're experiencing some today.\n\nWith respect",
  },
  empath: {
    name: 'The Empath',
    oneLiner: 'You feel what people hide.',
    landingPreview:
      "You feel what people hide. You walk into a room and you immediately know. Who's angry. Who's hurting. Who's pretending to be fine.",
    description:
      "You walk into a room and you immediately know. Who's angry. Who's hurting. Who's pretending to be fine. Who's lying. You don't just read body language. You absorb the entire emotional atmosphere like a sponge. The tension nobody's acknowledging. The sadness behind someone's smile. The anxiety your friend won't admit to.\n\nYou've always been the one people come to. Not because you have all the answers, but because you have something rarer: presence. You make people feel seen, heard, and understood. Often without saying much at all. They feel safe with you because you actually get it. You get them.\n\nPeople have told you you're \"too sensitive.\" That you need thicker skin. That you take things too personally. They have no idea what they're talking about. Your sensitivity isn't weakness. It's a scanner that most humans don't have access to. You're picking up signals they can't even detect.\n\nIn a world where most communication is non verbal, you're fluent in the language everyone else is illiterate in. You see through masks. You hear what's not being said. That's not a burden. That's a superpower. The only thing you need to learn is how to protect your energy while keeping your gift. Because it is a gift. A rare one.",
    strengths: [
      'Reading emotions and unspoken dynamics accurately',
      'Making people feel genuinely seen and understood',
      'Building trust quickly and authentically',
      'Navigating complex social situations with ease',
      'Sensing what people need before they ask',
    ],
    howYouLearn:
      "You learn best through relationship and dialogue. Information sticks when it comes from someone you connect with. Dry lectures and solo study drain you. Find teachers, mentors, and learning partners — connection is your accelerant.",
    howYouCommunicate:
      "You communicate with emotional attunement. You match energy, read between lines, and respond to what's really being said. You may over-personalize conversations — remember that not everything is about relationship. Sometimes information is just information.",
    deepDive:
      "The Empath mind is humanity's social glue. In a species that survived through cooperation, you're the one who makes cooperation possible. Your ability to read and respond to emotional states is not a soft skill — it's perhaps the most important skill there is.\n\nYou probably discovered early that you felt things others didn't feel. You walked into rooms and absorbed the emotional weather. You knew when your parents were upset before they said anything. You sensed tension between friends that no one acknowledged.\n\nThis sensitivity is both gift and burden. You have access to information that others don't — but you also carry weight that others don't. Other people's emotions can feel like your own. The line between empathy and enmeshment can blur.\n\nYour challenge is boundaries. Your natural inclination is toward connection, but connection without boundaries becomes depletion. You can give so much that nothing is left for yourself.\n\nThe most successful Empaths learn to distinguish between their feelings and others' feelings. They develop practices for emotional hygiene — clearing what isn't theirs. They also learn that real connection requires two people, and someone who only takes is not a connection but a drain.",
    blindSpots:
      "Your biggest blind spot is yourself. You're so attuned to others that you may lose track of your own needs, feelings, and boundaries. You may also avoid necessary conflict to preserve harmony, letting problems fester rather than addressing them.",
    howYouLead:
      "You lead through relationship and trust. People follow you because they feel seen and valued by you. You build loyal teams that would do anything for you because you've done so much for them. Develop your ability to make hard decisions that may temporarily damage relationships — sometimes leadership requires disappointing people.",
    careers: [
      'Therapist or Counselor',
      'HR or People Operations Leader',
      'Sales or Account Management',
      'Teacher or Coach',
      'Community Builder or Non-Profit Leader',
    ],
    famousMinds: [
      'Oprah Winfrey — connection at scale',
      'Princess Diana — emotional presence that moved millions',
      'Ted Lasso — radical empathy as leadership',
      'Brené Brown — vulnerability as connection',
      'Mr. Rogers — unconditional positive regard',
    ],
    thirtyDayPlan:
      "Week 1: Practice saying no to one request that you'd normally say yes to out of obligation. Notice how it feels.\n\nWeek 2: Identify one relationship that drains you. Set one small boundary. Notice what happens.\n\nWeek 3: Spend intentional time alone doing something that fills YOU up. Practice receiving, not just giving.\n\nWeek 4: Have one honest conversation where you share what you actually need, not just what others need from you.",
    letter:
      "Dear friend,\n\nYou carry more than anyone knows. The emotions you absorb, the tensions you navigate, the invisible labor of making everyone feel okay — it's exhausting, and it's mostly unseen.\n\nI want you to know: you're allowed to put yourself on your own list. You're allowed to have needs. You're allowed to take up space, not just make space for others.\n\nYour gift for connection is rare and precious. But it only works if you're not running on empty. You cannot pour from an empty cup, and you've been pouring for a long time.\n\nLet someone connect with you for a change. Let someone see YOU. That's connection too.\n\nWith care",
  },
  executor: {
    name: 'The Executor',
    oneLiner: 'Ideas are worthless. You make things real.',
    landingPreview:
      "Ideas are worthless. You make things real. While everyone else is still planning and waiting for perfect conditions, you've already started.",
    description:
      "While everyone else is still planning, discussing, and waiting for perfect conditions... you've already started. Your mind is wired for action and results. You don't need the full picture to begin. You don't need permission. You figure things out by doing, not by theorizing.\n\nYou've always been impatient with theory disconnected from practice. \"That sounds nice, but how does it actually work in the real world?\" is your constant question. You trust what you can see, touch, test, and build with your own hands. Abstract discussions drain you. Tangible progress energizes you.\n\nPeople call you impatient. They say you rush in too fast. Maybe. But while they're still perfecting their plans, you've already built version one, learned from its failures, and shipped version two. You understand something most people don't: done is better than perfect, and momentum beats meditation every time.\n\nThe world is absolutely drowning in ideas that never become real. Dreamers are everywhere. Talkers are a dime a dozen. But you? You're the one who actually builds. Who actually ships. Who actually makes things happen. That's why you win while others are still waiting for the right moment that never comes.",
    strengths: [
      'Turning ideas into tangible results',
      'Learning quickly through hands-on experience',
      'Staying focused on what actually works',
      'Cutting through complexity to find practical solutions',
      'Persisting until the job is done',
    ],
    howYouLearn:
      "You learn best by doing. Manuals, lectures, and theory put you to sleep. You want to get your hands on the thing, break it, fix it, and understand it through experience. Give yourself permission to learn through trial and error — it's not reckless, it's efficient.",
    howYouCommunicate:
      "You communicate in concrete terms. You want specifics, examples, and action items. Abstract discussions frustrate you. 'But what do we actually DO?' is your constant refrain. Practice patience with people who need to process out loud before acting.",
    deepDive:
      "The Executor mind is the engine of human progress. Every building, every road, every product that makes life better exists because someone like you made it real. Ideas are cheap — execution is everything.\n\nYou probably learned early that you had different values than the talkers around you. While they were theorizing, you were experimenting. While they were debating, you were building. While they were perfecting plans, you were learning from failures.\n\nThis bias toward action has served you well. You've accomplished things that more 'thoughtful' people never will because you were willing to start before you were ready. You understand that done is better than perfect, and real is better than theoretical.\n\nYour challenge is slowing down when slowing down is warranted. Your bias toward action can become impulsivity. Some problems require understanding before solving. Some situations reward patience over speed.\n\nThe most successful Executors learn to distinguish between situations that need immediate action and situations that need strategic pause. They develop the discipline to plan when planning is valuable — while maintaining their gift for execution.",
    blindSpots:
      "Your biggest blind spot is reflection. You may repeat mistakes because you don't pause to learn from them. You may also undervalue people who contribute through thinking rather than doing — but strategy and analysis make your actions more effective.",
    howYouLead:
      "You lead through example and results. People follow you because you're in the trenches with them, not above them. You're the leader who says 'follow me' and goes first. Develop your ability to pause and think strategically — the most impactful actions are the right actions.",
    careers: [
      'Entrepreneur or Business Owner',
      'Engineer or Tradesperson',
      'Surgeon or Emergency Responder',
      'Operations or Logistics Manager',
      'Chef, Builder, or Craftsperson',
    ],
    famousMinds: [
      'Richard Branson — action over analysis',
      'Gordon Ramsay — relentless practical standards',
      'Bear Grylls — adaptation through action',
      'Elon Musk — building what others theorize',
      'Martha Stewart — practical excellence at scale',
    ],
    thirtyDayPlan:
      "Week 1: Before starting your next project, spend one hour just planning. Notice your impatience. Stay with it.\n\nWeek 2: After completing something, do a 15-minute reflection: What worked? What didn't? What would I do differently?\n\nWeek 3: Have a conversation where you just listen and ask questions — no problem-solving, no action items.\n\nWeek 4: Identify one area where slowing down would improve your results. Practice strategic patience.",
    letter:
      "Dear friend,\n\nWhile others were talking, you were building. While they were planning, you were doing. While they were waiting for perfect conditions, you were creating results in imperfect ones.\n\nThis is your gift: the ability to make things real. In a world drowning in ideas and starving for execution, you're the one who actually delivers.\n\nBut remember — speed is only valuable in the right direction. The most powerful action is informed action. Taking time to think isn't weakness; it's the preparation that makes your strength even stronger.\n\nKeep building. Keep doing. Just occasionally look up from the work to make sure you're building the right thing.\n\nWith respect",
  },
  philosopher: {
    name: 'The Philosopher',
    oneLiner: "You've met yourself. Most people never will.",
    landingPreview:
      "You've met yourself. Most people never will. Your mind goes where others are afraid to look. Inward. You don't just experience life. You examine it.",
    description:
      "Your mind goes where others are afraid to look. Inward. While the world rushes frantically from one distraction to the next, you pause. You question. You search for meaning underneath the surface chaos. You don't just experience life. You examine it, process it, and let it change you.\n\nYou've always needed more time to process than others. Not because you're slow, but because you're thorough. You don't skim the surface of things. You dive to the bottom and stay there until you understand. This makes you different. Sometimes it makes you feel alone.\n\nPeople say you're \"too deep\" or \"too intense.\" They get uncomfortable around you because you see things they're actively avoiding. You ask questions they don't want to answer. You reflect truths they're not ready to face. That's not your problem. That's their limitation.\n\nYou've done the inner work most people will spend their entire lives running from. You know your patterns. Your triggers. Your shadows. Your gifts. In a world where most people are complete strangers to themselves, you've built a relationship with who you actually are. That's not overthinking. That's wisdom. And it's extraordinarily rare.",
    strengths: [
      'Understanding your own motivations and patterns deeply',
      'Processing experiences and extracting meaning',
      'Staying grounded when others are reactive',
      'Offering wisdom that comes from genuine insight',
      'Knowing what you actually value, not just what you should value',
    ],
    howYouLearn:
      "You learn best when you have time to absorb and reflect. You can't be rushed. You need to sit with new information, turn it over, connect it to what you know, and find your own relationship to it. Give yourself that time — depth is your advantage.",
    howYouCommunicate:
      "You communicate thoughtfully and intentionally. You may be quiet in groups but profound one-on-one. You dislike small talk and crave meaningful conversation. Practice being okay with silence — not every pause needs to be filled.",
    deepDive:
      "The Philosopher mind is rare in a world that values speed over depth. You're the one who remembers that the unexamined life isn't worth living — and you've taken that seriously.\n\nYou probably learned early that you needed more solitude than others. While they were energized by activity and noise, you were drained. While they processed out loud, you processed in silence. This may have made you feel different, even broken.\n\nBut you're not broken. You're deep. Your inner world is rich and complex, and it requires tending. The time you spend in reflection isn't wasted — it's the foundation of everything you offer the outer world.\n\nYour challenge is emerging. You can become so comfortable in your inner world that you forget to participate in the outer one. Analysis can become paralysis. Reflection can become avoidance.\n\nThe most successful Philosophers learn to balance inner and outer life. They create rhythms that honor their need for solitude while also engaging with the world. They share their insights instead of hoarding them. They act on their wisdom instead of just accumulating it.",
    blindSpots:
      "Your biggest blind spot is action. You may understand yourself perfectly but still not change. You may see the path clearly but not walk it. Insight without action is just entertainment. Your wisdom only matters if it changes how you live.",
    howYouLead:
      "You lead through wisdom and presence. People follow you because you've done the inner work and it shows. You're calm in chaos because you're grounded in self-knowledge. Develop your ability to be more visible — your wisdom can't help if you're not in the room.",
    careers: [
      'Therapist or Counselor',
      'Writer or Philosopher',
      'Researcher or Academic',
      'Spiritual Director or Coach',
      'Artist or Creative with Deep Themes',
    ],
    famousMinds: [
      'Marcus Aurelius — philosophy as practice',
      'Brené Brown — self-reflection as research',
      'Yoda — wisdom through presence',
      'Carl Jung — mapping the inner world',
      'Mary Oliver — reflection as art',
    ],
    thirtyDayPlan:
      "Week 1: Identify one insight you've had for months but haven't acted on. Take one small action toward it.\n\nWeek 2: Share something from your inner world with someone you trust. Practice being seen, not just seeing.\n\nWeek 3: Do something purely for action, not meaning. Move your body, build something, engage without analyzing.\n\nWeek 4: Set a 'reflection limit' for one decision — decide within 48 hours, even if you don't feel ready.",
    letter:
      "Dear friend,\n\nYou've done the work most people avoid. While they distract themselves from their inner life, you've explored yours. While they run from their shadows, you've befriended yours. This takes courage that others don't see.\n\nYour depth is a gift. Your wisdom is needed. But only if you share it.\n\nThe world won't come find you in your quiet place. At some point, you need to emerge with what you've learned. Not to perform, but to offer. Not to prove, but to serve.\n\nYour insights are not just for you. They're for everyone you could help if you were willing to be seen.\n\nCome out when you're ready. The world is waiting.\n\nWith warmth",
  },
}
