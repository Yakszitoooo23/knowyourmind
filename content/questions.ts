type AnswerType = 'decoder' | 'visionary' | 'architect' | 'empath' | 'executor' | 'philosopher'

interface Answer {
  letter: string
  text: string
  type: AnswerType
}

interface Question {
  id: number
  question: string
  answers: Answer[]
}

export const questions: Question[] = [
  {
    id: 1,
    question: 'When facing a new problem, you typically:',
    answers: [
      { letter: 'A', text: 'Break it into parts and analyze each piece', type: 'decoder' },
      { letter: 'B', text: 'Brainstorm multiple creative solutions', type: 'visionary' },
      { letter: 'C', text: 'Think about the long-term consequences', type: 'architect' },
      { letter: 'D', text: 'Ask others for their perspective', type: 'empath' },
      { letter: 'E', text: 'Just dive in and figure it out', type: 'executor' },
      { letter: 'F', text: 'Step back and reflect before acting', type: 'philosopher' },
    ],
  },
  {
    id: 2,
    question: 'In a group project, you naturally become the person who:',
    answers: [
      { letter: 'A', text: 'Spots the errors and inconsistencies', type: 'decoder' },
      { letter: 'B', text: 'Comes up with the original ideas', type: 'visionary' },
      { letter: 'C', text: 'Creates the plan and timeline', type: 'architect' },
      { letter: 'D', text: 'Keeps everyone motivated and connected', type: 'empath' },
      { letter: 'E', text: 'Actually builds and executes the work', type: 'executor' },
      { letter: 'F', text: 'Asks the deeper questions no one else considers', type: 'philosopher' },
    ],
  },
  {
    id: 3,
    question: 'When learning something new, you prefer to:',
    answers: [
      { letter: 'A', text: 'Read the manual and understand the theory first', type: 'decoder' },
      { letter: 'B', text: 'Experiment and explore on your own', type: 'visionary' },
      { letter: 'C', text: 'Understand how it fits into the bigger picture', type: 'architect' },
      { letter: 'D', text: 'Learn alongside others or from a mentor', type: 'empath' },
      { letter: 'E', text: 'Jump in and learn by doing', type: 'executor' },
      { letter: 'F', text: 'Take your time and deeply absorb the material', type: 'philosopher' },
    ],
  },
  {
    id: 4,
    question: 'People come to you when they need:',
    answers: [
      { letter: 'A', text: 'A logical solution to a complex problem', type: 'decoder' },
      { letter: 'B', text: 'A fresh idea or new perspective', type: 'visionary' },
      { letter: 'C', text: 'Help thinking through a big decision', type: 'architect' },
      { letter: 'D', text: 'Someone to listen and understand them', type: 'empath' },
      { letter: 'E', text: 'Someone to get things done', type: 'executor' },
      { letter: 'F', text: 'Thoughtful, considered advice', type: 'philosopher' },
    ],
  },
  {
    id: 5,
    question: 'Your workspace is usually:',
    answers: [
      { letter: 'A', text: 'Organized with systems that make sense to you', type: 'decoder' },
      { letter: 'B', text: 'A bit chaotic but full of inspiration', type: 'visionary' },
      { letter: 'C', text: 'Set up for maximum efficiency', type: 'architect' },
      { letter: 'D', text: 'Comfortable and welcoming to others', type: 'empath' },
      { letter: 'E', text: 'Functional — whatever works', type: 'executor' },
      { letter: 'F', text: 'Quiet and minimal, free from distractions', type: 'philosopher' },
    ],
  },
  {
    id: 6,
    question: 'When making a decision, you rely most on:',
    answers: [
      { letter: 'A', text: 'Data and logical analysis', type: 'decoder' },
      { letter: 'B', text: 'Your imagination and intuition', type: 'visionary' },
      { letter: 'C', text: 'How it will play out over time', type: 'architect' },
      { letter: 'D', text: 'How it will affect the people involved', type: 'empath' },
      { letter: 'E', text: 'Your gut — just make the call', type: 'executor' },
      { letter: 'F', text: 'Deep reflection on what feels right', type: 'philosopher' },
    ],
  },
  {
    id: 7,
    question: 'You get frustrated when:',
    answers: [
      { letter: 'A', text: "People make decisions without thinking them through", type: 'decoder' },
      { letter: 'B', text: "You're forced to follow rigid rules", type: 'visionary' },
      { letter: 'C', text: "Others can't see the obvious outcome", type: 'architect' },
      { letter: 'D', text: "People don't consider each other's feelings", type: 'empath' },
      { letter: 'E', text: "There's too much talking and not enough action", type: 'executor' },
      { letter: 'F', text: "You don't have time to process things properly", type: 'philosopher' },
    ],
  },
  {
    id: 8,
    question: "At a party or social gathering, you're most likely to:",
    answers: [
      { letter: 'A', text: 'Have a deep conversation about an interesting topic', type: 'decoder' },
      { letter: 'B', text: 'Be the one with unexpected stories or ideas', type: 'visionary' },
      { letter: 'C', text: 'Observe the dynamics and social patterns', type: 'architect' },
      { letter: 'D', text: 'Move around connecting with different people', type: 'empath' },
      { letter: 'E', text: 'Organize an activity or game', type: 'executor' },
      { letter: 'F', text: 'Find a quiet corner for meaningful one-on-one conversation', type: 'philosopher' },
    ],
  },
  {
    id: 9,
    question: 'When something goes wrong, your first instinct is to:',
    answers: [
      { letter: 'A', text: 'Analyze what caused the failure', type: 'decoder' },
      { letter: 'B', text: 'Think of alternative approaches', type: 'visionary' },
      { letter: 'C', text: 'Consider how this affects the bigger plan', type: 'architect' },
      { letter: 'D', text: 'Check how everyone is feeling about it', type: 'empath' },
      { letter: 'E', text: 'Start fixing it immediately', type: 'executor' },
      { letter: 'F', text: 'Understand what this situation is teaching you', type: 'philosopher' },
    ],
  },
  {
    id: 10,
    question: 'You feel most alive when:',
    answers: [
      { letter: 'A', text: 'Solving a complex puzzle or problem', type: 'decoder' },
      { letter: 'B', text: 'Creating something new', type: 'visionary' },
      { letter: 'C', text: 'Seeing your plan come together perfectly', type: 'architect' },
      { letter: 'D', text: 'Having a deep connection with someone', type: 'empath' },
      { letter: 'E', text: 'Making tangible progress on a project', type: 'executor' },
      { letter: 'F', text: 'Having a moment of clarity or insight', type: 'philosopher' },
    ],
  },
  {
    id: 11,
    question: 'Your friends would describe you as:',
    answers: [
      { letter: 'A', text: 'The smart one who always has answers', type: 'decoder' },
      { letter: 'B', text: 'The creative one with wild ideas', type: 'visionary' },
      { letter: 'C', text: 'The one who always thinks ahead', type: 'architect' },
      { letter: 'D', text: 'The one who really gets people', type: 'empath' },
      { letter: 'E', text: 'The one who makes things happen', type: 'executor' },
      { letter: 'F', text: 'The deep thinker', type: 'philosopher' },
    ],
  },
  {
    id: 12,
    question: 'When reading or watching content, you prefer:',
    answers: [
      { letter: 'A', text: 'Documentaries, science, or how things work', type: 'decoder' },
      { letter: 'B', text: 'Art, design, or innovative concepts', type: 'visionary' },
      { letter: 'C', text: 'Strategy, business, or history', type: 'architect' },
      { letter: 'D', text: 'Human stories and relationships', type: 'empath' },
      { letter: 'E', text: 'Tutorials, guides, or how-to content', type: 'executor' },
      { letter: 'F', text: 'Philosophy, psychology, or self-reflection', type: 'philosopher' },
    ],
  },
  {
    id: 13,
    question: 'In a disagreement, you typically:',
    answers: [
      { letter: 'A', text: 'Present logical arguments and evidence', type: 'decoder' },
      { letter: 'B', text: 'Try to find a creative compromise', type: 'visionary' },
      { letter: 'C', text: 'Think about the long-term relationship impact', type: 'architect' },
      { letter: 'D', text: "Focus on understanding the other person's feelings", type: 'empath' },
      { letter: 'E', text: 'Want to resolve it quickly and move on', type: 'executor' },
      { letter: 'F', text: 'Need time alone to process before responding', type: 'philosopher' },
    ],
  },
  {
    id: 14,
    question: 'Your biggest weakness might be:',
    answers: [
      { letter: 'A', text: 'Being too critical or analytical', type: 'decoder' },
      { letter: 'B', text: 'Starting things but not finishing them', type: 'visionary' },
      { letter: 'C', text: 'Overthinking and not acting', type: 'architect' },
      { letter: 'D', text: "Taking on other people's problems", type: 'empath' },
      { letter: 'E', text: 'Being impatient with slow processes', type: 'executor' },
      { letter: 'F', text: 'Getting stuck in your own head', type: 'philosopher' },
    ],
  },
  {
    id: 15,
    question: "When you have free time, you're drawn to:",
    answers: [
      { letter: 'A', text: 'Learning something new or solving puzzles', type: 'decoder' },
      { letter: 'B', text: 'Creative hobbies or exploring ideas', type: 'visionary' },
      { letter: 'C', text: 'Planning future goals or projects', type: 'architect' },
      { letter: 'D', text: 'Spending quality time with people you care about', type: 'empath' },
      { letter: 'E', text: 'Working on hands-on projects', type: 'executor' },
      { letter: 'F', text: 'Journaling, meditation, or quiet reflection', type: 'philosopher' },
    ],
  },
  {
    id: 16,
    question: 'In your career, you value most:',
    answers: [
      { letter: 'A', text: 'Intellectual challenge and problem-solving', type: 'decoder' },
      { letter: 'B', text: 'Creative freedom and innovation', type: 'visionary' },
      { letter: 'C', text: 'Growth potential and long-term success', type: 'architect' },
      { letter: 'D', text: 'Positive relationships and team culture', type: 'empath' },
      { letter: 'E', text: 'Tangible results and impact', type: 'executor' },
      { letter: 'F', text: 'Meaningful work aligned with your values', type: 'philosopher' },
    ],
  },
  {
    id: 17,
    question: 'When someone shares a problem with you, you:',
    answers: [
      { letter: 'A', text: 'Immediately start analyzing solutions', type: 'decoder' },
      { letter: 'B', text: 'Suggest ideas they might not have considered', type: 'visionary' },
      { letter: 'C', text: 'Help them think through the implications', type: 'architect' },
      { letter: 'D', text: 'Listen and make sure they feel heard first', type: 'empath' },
      { letter: 'E', text: 'Offer to help them take action', type: 'executor' },
      { letter: 'F', text: 'Ask questions to help them understand themselves', type: 'philosopher' },
    ],
  },
  {
    id: 18,
    question: "You're most drained by:",
    answers: [
      { letter: 'A', text: 'Illogical thinking and inefficiency', type: 'decoder' },
      { letter: 'B', text: 'Repetitive tasks and boredom', type: 'visionary' },
      { letter: 'C', text: 'Short-term thinking and chaos', type: 'architect' },
      { letter: 'D', text: 'Conflict and emotional disconnection', type: 'empath' },
      { letter: 'E', text: 'Endless meetings with no action', type: 'executor' },
      { letter: 'F', text: 'Shallow conversations and surface-level interactions', type: 'philosopher' },
    ],
  },
  {
    id: 19,
    question: 'Your phone is mostly filled with:',
    answers: [
      { letter: 'A', text: 'Productivity apps, notes, and tools', type: 'decoder' },
      { letter: 'B', text: 'Creative apps, inspiration, and saved ideas', type: 'visionary' },
      { letter: 'C', text: 'Calendar, goals, and planning apps', type: 'architect' },
      { letter: 'D', text: 'Messages, social media, and photos of people', type: 'empath' },
      { letter: 'E', text: 'Utility apps — whatever gets the job done', type: 'executor' },
      { letter: 'F', text: 'Podcasts, audiobooks, and journaling apps', type: 'philosopher' },
    ],
  },
  {
    id: 20,
    question: 'When starting a new job, you first want to:',
    answers: [
      { letter: 'A', text: 'Understand the systems and how everything works', type: 'decoder' },
      { letter: 'B', text: 'Find ways to improve or innovate', type: 'visionary' },
      { letter: 'C', text: 'Learn the path to advancement', type: 'architect' },
      { letter: 'D', text: 'Build relationships with your coworkers', type: 'empath' },
      { letter: 'E', text: 'Start contributing and making an impact', type: 'executor' },
      { letter: 'F', text: "Understand the company's deeper mission and values", type: 'philosopher' },
    ],
  },
  {
    id: 21,
    question: "You're most proud of your ability to:",
    answers: [
      { letter: 'A', text: 'Figure out how things work', type: 'decoder' },
      { letter: 'B', text: "Think of ideas others don't see", type: 'visionary' },
      { letter: 'C', text: 'Plan ahead and anticipate problems', type: 'architect' },
      { letter: 'D', text: 'Make people feel understood', type: 'empath' },
      { letter: 'E', text: 'Get things done no matter what', type: 'executor' },
      { letter: 'F', text: 'Understand yourself and your motivations', type: 'philosopher' },
    ],
  },
  {
    id: 22,
    question: 'The type of compliment that means most to you:',
    answers: [
      { letter: 'A', text: "You're so smart", type: 'decoder' },
      { letter: 'B', text: "You're so creative", type: 'visionary' },
      { letter: 'C', text: 'You always know what to do', type: 'architect' },
      { letter: 'D', text: 'You really get me', type: 'empath' },
      { letter: 'E', text: 'You always deliver', type: 'executor' },
      { letter: 'F', text: "You're so thoughtful", type: 'philosopher' },
    ],
  },
  {
    id: 23,
    question: 'When facing uncertainty, you:',
    answers: [
      { letter: 'A', text: 'Gather more information and analyze options', type: 'decoder' },
      { letter: 'B', text: 'Get excited about the possibilities', type: 'visionary' },
      { letter: 'C', text: 'Create contingency plans', type: 'architect' },
      { letter: 'D', text: 'Talk it through with people you trust', type: 'empath' },
      { letter: 'E', text: "Take action — you'll figure it out", type: 'executor' },
      { letter: 'F', text: 'Sit with it and wait for clarity', type: 'philosopher' },
    ],
  },
  {
    id: 24,
    question: 'Your ideal weekend involves:',
    answers: [
      { letter: 'A', text: 'Learning something or working on a project', type: 'decoder' },
      { letter: 'B', text: 'Exploring somewhere new or creating something', type: 'visionary' },
      { letter: 'C', text: 'Planning and getting ahead on goals', type: 'architect' },
      { letter: 'D', text: 'Quality time with friends or family', type: 'empath' },
      { letter: 'E', text: 'Doing something active or hands-on', type: 'executor' },
      { letter: 'F', text: 'Quiet time for rest and reflection', type: 'philosopher' },
    ],
  },
  {
    id: 25,
    question: 'The statement that resonates most with you:',
    answers: [
      { letter: 'A', text: 'Knowledge is power', type: 'decoder' },
      { letter: 'B', text: 'Imagination is everything', type: 'visionary' },
      { letter: 'C', text: 'Think ahead or fall behind', type: 'architect' },
      { letter: 'D', text: 'Connection is what makes life meaningful', type: 'empath' },
      { letter: 'E', text: 'Actions speak louder than words', type: 'executor' },
      { letter: 'F', text: 'Know thyself', type: 'philosopher' },
    ],
  },
]
