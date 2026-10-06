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
      'Startup Showcase was an event bringing founders, creatives, investors and other members of the startup ecosystem into one room. I came on as the Executive Assistant / Project Manager, helping turn a growing list of ideas, vendors, venue options, logistics and deadlines into an actual event plan',
    ],
    primaryImage: '/assets/startup-showcase1.jpeg',
    secondaryImage: '/assets/startup-showcase2.jpeg',
    galleryPreview: [
      '/assets/startup-showcase1.jpeg',
      '/assets/startup-showcase2.jpeg',
      '/assets/startup-showcase3.jpeg',
      '/assets/startup-showcase4.jpeg',
    ],
    externalLink:
      'https://www.linkedin.com/posts/african-impact-initiative_africanimpactchallenge-africanimpactchallenge-activity-7505672245558579202-EQXJ?utm_medium=ios_app&rcm=ACoAAF68xBABvEooKvX4liCAHR4W26i-Z9wCj5k&utm_source=social_share_send&utm_campaign=copy_link',
    sections: [
      {
        id: 'the-plan',
        tabLabel: 'The plan',
        headline: 'First, I figured out what we actually needed.',
        body: [
          'Before jumping into vendors and payments, I started breaking the event down: venue, branding, furniture, food, sound, screens, photography, speakers, guest experience and logistics.',
          'I turned those moving parts into things we could actually research, assign, price and track.',
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
      },
      {
        id: 'venue',
        tabLabel: 'Venue',
        headline: 'I treated the venue like a business decision.',
        body: [
          'We looked at multiple spaces before settling on one.',
          'I wasn’t only asking: "Does this venue look good?"',
          'I looked at what we would actually get for the money: capacity, space configuration, meeting rooms, branding opportunities, furniture, screens, projector quality, sound, food and accessibility.',
          'I physically visited venues to check measurements and placement, because some things simply cannot be solved from a WhatsApp photo. That helped us make decisions based on the actual space rather than assumptions.',
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
      },
      {
        id: 'money',
        tabLabel: 'Money',
        headline: 'Getting things done without setting the budget on fire.',
        body: [
          'This was one of the biggest parts of the project. Invoices came in from different vendors, payments happened in stages and costs kept changing, so I tracked what we were paying for, what had been approved, invoice changes, payments and receipts.',
          'I flagged that we were spending too much on logistics and looked for better deals, including a better option for the speaker chairs instead of accepting the first one available.',
          'When branding and printing costs started stacking up, I worked through the budget to see what we could reduce.',
        ],
        tags: ['Budget tracking', 'Invoicing', 'Payment approvals', 'Cost negotiation', 'Receipt reconciliations'],
        quote: {
          text: 'Being an assistant isn’t just about getting things done.',
          highlight: 'It’s about getting them done without casually setting the budget on fire.',
        },
      },
      {
        id: 'vendors',
        tabLabel: 'Vendors',
        headline: 'I made the vendors take accountability.',
        body: [
          'There were people involved across branding, printing, carpentry, food, photography, sound, furniture and other event requirements. My approach was simple: don’t just have a conversation. Get the next step.',
          'If we needed measurements, I arranged the site visit. If we needed an invoice, I requested it. If an invoice changed, I made sure the updated version was documented. If payment was pending, I followed up. If something needed clarification, I got the relevant person on a call.',
          'I kept moving each requirement from “We need this” to “Here’s the vendor,” “Here’s the quote,” “Here’s what we’re paying” and finally, “It’s done.”',
        ],
        tags: ['Print & Signage', 'Carpentry', 'AV & Sound', 'Catering', 'Photography', 'Stage crew'],
        quote: {
          text: 'Don’t just have a conversation.',
          highlight: 'Get the next step.',
        },
      },
      {
        id: 'creative-direction',
        tabLabel: 'Creative direction',
        headline: 'I helped make it look and feel like our event.',
        body: [
          'I worked alongside the design and branding team to think through how the event would show up in the physical space, from branding placements and printed materials to the overall visual direction.',
          'I wasn’t just thinking, “Where can we put a logo?” I was thinking about what people should see when they walk in, how the space should feel and how to make the branding intentional instead of putting banners everywhere.',
        ],
        tags: ['Spatial design', 'Wayfinding', 'Welcome desk', 'Brand touchpoints', 'Attendee journey'],
      },
      {
        id: 'planning-ahead',
        tabLabel: 'Planning ahead',
        headline: 'I planned for things before they became problems.',
        body: [
          'We didn’t just assume the presentation setup would work. I asked whose laptop we were using, how it connected to the screen, whether the projector actually worked and whether we should test it beforehand. I physically went to check the projector.',
          'We also planned logistics ahead of time so there wouldn’t be surprises on event day.',
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
        headline: 'If money moves, there should be a trail.',
        body: [
          'I created a central folder for invoices and receipts and kept track of pending and completed payments.',
          'That meant we could answer “How much did we spend?”, “Where’s the invoice?”, “Has this vendor been paid?” and “Do we have the receipt?” without searching through 400 WhatsApp messages.',
          'Because the project involved external funding and spending that needed to be properly accounted for, documentation mattered just as much as execution.',
        ],
        tags: ['Centralized documentation', 'Contract archiving', 'Expense logs', 'Post-event reporting'],
      },
      {
        id: 'the-founder',
        tabLabel: 'Management',
        headline: 'I kept the founder out of unnecessary chaos.',
        body: [
          'My job wasn’t to make every decision myself. It was to make sure that when something reached the founder, it was as clear as possible.',
          'Instead of “There’s an issue with the chairs,” I could say, “The venue chairs aren’t suitable. I found an alternative, here’s the price, and here’s what changes if we use them.” Instead of “We need branding,” I could share the vendor, what needed measuring, the quotation and what we were waiting on.',
          'The goal was to reduce the number of things the founder had to personally chase.',
        ],
        tags: ['Executive shielding', 'Decision briefs', 'Daily briefings', 'Action items'],
      },
    ],
    media: [
      {
        src: '/assets/startup-showcase1.jpeg',
        alt: 'Startup Showcase group photo',
        caption: 'Founders and guests together at the Startup Showcase.',
        tag: '',
      },
      {
        src: '/assets/startup-showcase2.jpeg',
        alt: 'At the welcome desk and coordination hub',
        caption: 'The welcome desk at the Startup Showcase.',
        tag: '',
      },
      {
        src: '/assets/startup-showcase3.jpeg',
        alt: 'The Startup Showcase board',
        caption: 'The event board used to keep the showcase on track.',
        tag: '',
      },
      {
        src: '/assets/startup-showcase4.jpeg',
        alt: 'On stage at the Startup Showcase',
        caption: 'A speaker on stage at the Startup Showcase.',
        tag: '',
      },
    ],
  },
  {
    id: 'breakfast',
    number: '002',
    title: 'How’s Breakfast Faring?',
    role: 'Book Marketing • Content Strategy • Launch Management • Executive Assistance',
    summary:
      'Helping turn a witty, unconventional collection of Nigerian short stories into a campaign people would notice, connect with and remember.',
    description: [
      'Chimamaka had written a witty, unconventional collection of Nigerian short stories and was ready to launch it. What she didn’t yet have was a clear strategy for turning the finished manuscript into a campaign people would notice, connect with and remember.',
      'I came in to help shape that strategy, from clarifying the audience and building anticipation to coordinating ARC outreach, managing launch details and keeping the entire process moving.',
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
