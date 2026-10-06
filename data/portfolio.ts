export interface GalleryImage {
  src: string
  alt: string
  className: string
}

export interface ProjectSectionQuote {
  text: string
  highlight?: string
  author?: string
}

export interface ProjectSection {
  id: string
  tabLabel: string
  headline: string
  body: string[]
  tags?: string[]
  quote?: ProjectSectionQuote
  image?: string
  imageCaption?: string
}

export interface ProjectMediaItem {
  src: string
  alt: string
  caption?: string
  tag?: string
}

export interface Project {
  id: string
  number: string
  title: string
  role?: string
  summary: string
  description: string[]
  primaryImage: string
  secondaryImage?: string
  galleryPreview?: string[]
  sections: ProjectSection[]
  media: ProjectMediaItem[]
  externalLink?: string
}

export type FAQAnswer = [question: string, answer: string]

export const gallery: GalleryImage[] = [
  {
    src: '/assets/playground-portrait-1.png',
    alt: 'Candid conversation in a bright red room',
    className: 'gallery-card card-one',
  },
  {
    src: '/assets/playground-gathering-2.png',
    alt: 'Creative team gathered around a table',
    className: 'gallery-card card-two',
  },
  {
    src: '/assets/playground-workspace-3.png',
    alt: 'Colorful creative workspace',
    className: 'gallery-card card-three',
  },
  {
    src: '/assets/playground-event-4.png',
    alt: 'Speaker sharing an idea at a lively event',
    className: 'gallery-card card-four',
  },
]

export const projects: Project[] = [
  {
    id: 'startup-showcase',
    number: '001',
    title: 'Startup Showcase: Bringing it together',
    role: 'Executive Assistant / Project Manager',
    summary:
      'Startup Showcase was an event bringing founders, creatives, investors and other members of the startup ecosystem into one room.',
    description: [
      'Startup Showcase was an event bringing founders, creatives, investors and other members of the startup ecosystem into one room.',
      'I came on as the Executive Assistant / Project Manager, helping turn a growing list of ideas, vendors, venue options, logistics and deadlines into an actual event plan.',
    ],
    primaryImage: '/assets/playground-gathering-2.png',
    secondaryImage: '/assets/playground-portrait-1.png',
    galleryPreview: [
      '/assets/playground-gathering-2.png',
      '/assets/playground-portrait-1.png',
      '/assets/playground-event-4.png',
    ],
    externalLink: '#contact',
    sections: [
      {
        id: 'the-plan',
        tabLabel: 'The plan',
        headline: 'First, I figured out what we actually needed.',
        body: [
          'Before jumping into vendors and payments, I started breaking the event down into workable tracks.',
          'I turned those moving parts into things we could actually research, assign, budget and execute without losing the high-level vision.',
        ],
        tags: [
          'Venue',
          'Branding',
          'Furniture',
          'Food',
          'Sound',
          'Screens',
          'Photography',
          'Speakers',
          'Guest experience',
          'Logistics',
        ],
        quote: {
          text: 'Because "we need to organise an event" is not a task.',
          highlight: "It's about 30 tasks wearing a trench coat.",
        },
        image: '/assets/playground-workspace-3.png',
        imageCaption: 'Operations roadmap & multi-track execution board.',
      },
      {
        id: 'venue',
        tabLabel: 'Venue',
        headline: 'I treated the venue like a business decision.',
        body: [
          'We looked at multiple spaces before settling on one.',
          'I wasn’t only asking: "Does this venue look good?"',
          'I was looking at what we would actually get for the money.',
          'I also went physically to venues to check measurements and placement because some things simply cannot be solved from a WhatsApp photo.',
        ],
        tags: [
          'Capacity',
          'Space configuration',
          'Meeting rooms',
          'Branding opportunities',
          'Furniture',
          'Screens',
          'Projector quality',
          'Sound',
          'Food',
          'Accessibility',
        ],
        image: '/assets/playground-gathering-2.png',
        imageCaption: 'On-site spatial validation and seating configuration.',
      },
      {
        id: 'money',
        tabLabel: 'Money',
        headline: 'Tracking every penny and protecting the budget.',
        body: [
          'I tracked invoices, approvals, changes, payments and receipts across branding, printing, carpentry, food, photography, sound and furniture.',
          'I found better options where we could and flagged overspending before it became a bigger problem.',
        ],
        tags: ['Budget tracking', 'Invoicing', 'Payment approvals', 'Cost negotiation', 'Receipt reconciliations'],
        quote: {
          text: "Don't just have a conversation.",
          highlight: 'Get the next step.',
        },
      },
      {
        id: 'vendors',
        tabLabel: 'Vendors',
        headline: 'Aligning partners and keeping quality uncompromising.',
        body: [
          'Coordinated with vendors across multiple disciplines, maintaining clear briefs, delivery deadlines, and on-site expectations.',
          'Having single-point accountability prevented the typical miscommunications between print shops, sound technicians, and catering teams.',
        ],
        tags: ['Print & Signage', 'Carpentry', 'AV & Sound', 'Catering', 'Photography', 'Stage crew'],
      },
      {
        id: 'creative-direction',
        tabLabel: 'Creative direction',
        headline: 'Making the physical space feel intentional.',
        body: [
          'Alongside the design and branding team, I thought through how the event should feel in the physical space — from branded touchpoints to the welcome experience.',
          'The goal was to make the atmosphere feel cohesive and memorable instead of just slapping banners on walls.',
        ],
        tags: ['Spatial design', 'Wayfinding', 'Welcome desk', 'Brand touchpoints', 'Attendee journey'],
        image: '/assets/playground-portrait-1.png',
        imageCaption: 'Branded welcome desk and experiential guest checkpoints.',
      },
      {
        id: 'planning-ahead',
        tabLabel: 'Planning ahead',
        headline: 'Eliminating surprises before showtime.',
        body: [
          'I checked the projector, confirmed laptop and connection details, and planned logistics before event day.',
          '"We\'ll figure it out on the day" is a dangerous sentence in event management.',
        ],
        tags: ['Tech rehearsals', 'AV testing', 'Contingency plans', 'Speaker briefings'],
        quote: {
          text: '"We\'ll figure it out on the day"',
          highlight: 'is a dangerous sentence in event management.',
        },
      },
      {
        id: 'paper-trail',
        tabLabel: 'Paper trail',
        headline: 'When money and assets move, there must be a trail.',
        body: [
          'I created a central folder for invoices, contracts, and receipts and tracked pending and completed transactions.',
          'Post-event audits and reporting were completely painless because every document was logged in real time.',
        ],
        tags: ['Centralized documentation', 'Contract archiving', 'Expense logs', 'Post-event reporting'],
      },
      {
        id: 'the-founder',
        tabLabel: 'The founder',
        headline: 'Keeping the leadership out of unnecessary chaos.',
        body: [
          'My goal was to keep the founder focused on high-level impact and attendee relationships.',
          'I brought structured options, price comparisons, and actionable next steps instead of handing over raw problems to solve.',
        ],
        tags: ['Executive shielding', 'Decision briefs', 'Daily briefings', 'Action items'],
      },
    ],
    media: [
      {
        src: '/assets/playground-gathering-2.png',
        alt: 'Startup Showcase group photo & discussions',
        caption: 'Founders and ecosystem leaders gathered in active discussion during the showcase.',
        tag: 'Community',
      },
      {
        src: '/assets/playground-portrait-1.png',
        alt: 'At the welcome desk and coordination hub',
        caption: 'Managing attendee onboarding, vendor drop-offs, and speaker schedules.',
        tag: 'Operations',
      },
      {
        src: '/assets/playground-event-4.png',
        alt: 'Stage presentation and speaker spotlight',
        caption: 'Seamless stage management and AV coordination during founder presentations.',
        tag: 'Keynote',
      },
      {
        src: '/assets/playground-workspace-3.png',
        alt: 'Behind the scenes coordination workspace',
        caption: 'Live timeline monitoring and instant communication hub for the operations team.',
        tag: 'Backstage',
      },
    ],
  },
  {
    id: 'breakfast',
    number: '002',
    title: 'How’s Breakfast Faring?: Book Launch & Campaign',
    role: 'Book Marketing / Content Strategy / Launch Management',
    summary:
      'Building a personality-filled book launch campaign from scattered ideas to structured momentum.',
    description: [
      'How\'s Breakfast Faring? is a collection of 20 witty, whimsical and absurdist Nigerian short stories across drama, sci-fi, satire, romance and absurdism.',
      'I built a launch narrative, ran ARC (Advanced Reader Copy) distribution, and orchestrated a multi-week social and digital promotional campaign.',
    ],
    primaryImage: '/assets/playground-portrait-1.png',
    secondaryImage: '/assets/playground-workspace-3.png',
    galleryPreview: [
      '/assets/playground-portrait-1.png',
      '/assets/playground-workspace-3.png',
    ],
    externalLink: '#contact',
    sections: [
      {
        id: 'the-book',
        tabLabel: 'The book',
        headline: 'Understanding the voice, audience and essence.',
        body: [
          'How\'s Breakfast Faring? is a collection of 20 witty, whimsical and absurdist Nigerian short stories across drama, sci-fi, satire, romance and absurdism.',
          'I started by immersing myself in the tone to craft marketing materials that felt authentically hilarious and relatable.',
        ],
        tags: ['Literary marketing', 'Voice discovery', 'Target reader personas', 'Theme breakdowns'],
      },
      {
        id: 'the-story',
        tabLabel: 'The story',
        headline: 'Turning a product release into a cultural conversation.',
        body: [
          'I turned the launch into a story: playful polls, Nigerian nostalgia, cultural references, conversational videos, carousels and gradual reveals.',
          'Readers weren\'t just seeing promotional posts; they were actively debating themes and eagerly anticipating chapters.',
        ],
        tags: ['Content hooks', 'Nostalgia marketing', 'Interactive polls', 'Video reels', 'Carousels'],
      },
      {
        id: 'arc-strategy',
        tabLabel: 'ARC strategy',
        headline: 'Generating social proof before day one.',
        body: [
          'I identified readers, creators, influencers and public figures who could genuinely connect with the themes, then structured outreach, personalized messaging and review cycles.',
          'The goal was to create undeniable momentum and real reader praise ahead of the official release.',
        ],
        tags: ['Influencer outreach', 'ARC distribution', 'Review gathering', 'Quote extraction'],
        quote: {
          text: 'Social proof is not accidental.',
          highlight: 'It is engineered through thoughtful early access.',
        },
      },
      {
        id: 'launch-management',
        tabLabel: 'Launch management',
        headline: 'Daily tracking and relentless follow-through.',
        body: [
          'I tracked outstanding tasks, coordinated assets, checked ARC access, and supported launch communication.',
          'Constantly asking: What\'s pending? Who needs to be contacted? What needs to go out? What happens next?',
        ],
        tags: ['Timeline management', 'Asset delivery', 'Checklists', 'Launch-day sprint'],
      },
      {
        id: 'the-result',
        tabLabel: 'The result',
        headline: 'From scattered ideas to sold-out momentum.',
        body: [
          'A project that began with "I have this book, I just don\'t know the strategy" became a structured campaign with clear pre-launch hype, 50+ early pre-orders in days, and continuous reader engagement.',
        ],
        tags: ['50+ First-week sales', 'Viral engagement', '100% On-time delivery'],
        quote: {
          text: 'She gave me rest and a sense of direction —',
          highlight: 'and kept me accountable throughout the launch.',
          author: 'Author Testimonial',
        },
      },
    ],
    media: [
      {
        src: '/assets/playground-portrait-1.png',
        alt: 'Author and launch materials',
        caption: 'Author spotlight and promotional visual campaign assets.',
        tag: 'Campaign',
      },
      {
        src: '/assets/playground-workspace-3.png',
        alt: 'Social media planning workspace',
        caption: 'Content calendar, ARC distribution tracker, and reader quote repository.',
        tag: 'Strategy',
      },
    ],
  },
  {
    id: 'streetchurch',
    number: '003',
    title: 'StreetChurch: Media, Interviews & Operations',
    role: 'Assistant Content Lead → Interviewer',
    summary:
      'Contributing ideas, developing questions and creating conversations that felt natural rather than scripted.',
    description: [
      'I worked with the content team to brainstorm ideas that made StreetChurch\'s content deeply engaging, particularly involving real people and unfiltered conversations.',
      'I also conducted on-camera interviews during media junkets, asking thoughtful, unexpected questions that brought out authentic answers.',
    ],
    primaryImage: '/assets/playground-event-4.png',
    secondaryImage: '/assets/playground-gathering-2.png',
    galleryPreview: [
      '/assets/playground-event-4.png',
      '/assets/playground-gathering-2.png',
    ],
    externalLink: '#contact',
    sections: [
      {
        id: 'ideation',
        tabLabel: 'Ideation',
        headline: 'Developing concepts rooted in real human curiosity.',
        body: [
          'Brainstormed fresh formats that resonated with modern culture and faith intersections.',
          'Pioneered conversational concepts where participants felt seen and heard without rigid rehearsing.',
        ],
        tags: ['Creative brainstorming', 'Format development', 'Audience engagement', 'Cultural hooks'],
      },
      {
        id: 'question-development',
        tabLabel: 'Question design',
        headline: 'Asking the questions nobody else thought to ask.',
        body: [
          'Crafted question flows that moved beyond generic PR talking points.',
          'Researched interviewees extensively to discover quirky details and meaningful topics.',
        ],
        tags: ['Deep research', 'Interview scripts', 'Angle testing', 'Conversational design'],
      },
      {
        id: 'on-camera',
        tabLabel: 'On-camera interviews',
        headline: 'Thinking on my feet under bright studio lights.',
        body: [
          'Interviewed actors, creatives, and guests during fast-paced media junkets.',
          'Maintained high energy, active listening, and spontaneous humor to draw out genuine emotion.',
        ],
        tags: ['Media junkets', 'Live hosting', 'Active listening', 'Spontaneous moderation'],
        quote: {
          text: 'Great interviews happen',
          highlight: 'when the speaker forgets the camera is rolling.',
        },
      },
      {
        id: 'execution',
        tabLabel: 'Execution & post',
        headline: 'From raw footage to viral social hooks.',
        body: [
          'Collaborated with editors on selecting the most impactful snippets, timestamps, and captions for digital distribution.',
        ],
        tags: ['Timestamp curation', 'Social cuts', 'Caption strategy', 'Review loops'],
      },
    ],
    media: [
      {
        src: '/assets/playground-event-4.png',
        alt: 'StreetChurch on-camera recording session',
        caption: 'Hosting live conversational segments and media junkets.',
        tag: 'Live Media',
      },
      {
        src: '/assets/playground-gathering-2.png',
        alt: 'Team collaborative brainstorm',
        caption: 'Weekly content development sessions shaping upcoming interview themes.',
        tag: 'Production',
      },
    ],
  },
]

export const answers: FAQAnswer[] = [
  [
    'What do you actually do?',
    'I bring order to ambitious work. That can mean running a project, managing the details around a founder, shaping content or making sure the plan survives contact with reality.',
  ],
  [
    'How do you work?',
    'Calmly, visibly and with a bias toward action. I turn vague requests into next steps, keep people aligned and flag the thing that might become a problem before it does.',
  ],
  [
    'What kind of work are you open to?',
    'Executive support, project management, operations and content or marketing work for thoughtful teams doing meaningful things.',
  ],
]
