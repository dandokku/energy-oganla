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

export interface Testimonial {
  id: string
  quote: string | string[]
  author: string
  role: string
  organization?: string
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
        caption: 'Startup showcase board by me to steer community engagement',
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
      'I came in to help shape that strategy — from clarifying the audience and building anticipation to coordinating ARC outreach, managing launch details and keeping the entire process moving.',
      'Together, we transformed a promising book with scattered launch ideas into a structured, personality-filled campaign that gave the project direction, built reader interest and helped Chimamaka feel supported throughout the launch.',
      'How’s Breakfast Faring? is a collection of 20 witty, whimsical and absurdist Nigerian short stories across genres like drama, sci-fi, satire, romance and absurdism. The goal wasn’t simply to “sell a book”; it was to help people understand what made this book worth their attention.',
    ],
    primaryImage: '/assets/breakfast-faring1.jpeg',
    secondaryImage: '/assets/breakfast-faring2.jpeg',
    galleryPreview: [
      '/assets/breakfast-faring1.jpeg',
      '/assets/breakfast-faring2.jpeg',
      '/assets/breakfast-faring3.jpeg',
    ],
    externalLinks: [
      {
        label: 'Instagram Reel',
        url: 'https://www.instagram.com/reel/DcyFF9hOLu-/?stkn=bWxtZmxwZ2FjbmFy',
      },
      {
        label: 'Instagram post',
        url: 'https://www.instagram.com/p/DdRAa0miLSi/?stkn=MTA4cGtiNXRlaXV2dQ==',
      },
    ],
    sections: [
      {
        id: 'the-book',
        tabLabel: 'The book',
        headline: 'I started by getting into the book itself.',
        body: [
          'Before creating a content strategy, I wanted to understand the voice, audience and purpose behind the work. I asked: Who is actually supposed to read this? Where do they discover books? Why should they care? What makes this book different? What do we want people to feel before they even read it? Where are we selling it? What does a successful launch look like?',
          'That gave us a clearer audience: young Nigerian and Gen-Z readers who enjoy fun, distinctly Nigerian stories, whether or not they consider themselves “serious readers.”',
        ],
        tags: ['Literary marketing', 'Voice discovery', 'Target reader personas', 'Theme breakdowns'],
      },
      {
        id: 'the-story',
        tabLabel: 'The story',
        headline: 'I turned the launch into a story.',
        body: [
          'Instead of immediately saying, “Hey guys, How’s Breakfast Faring? is coming!”, I wanted to create curiosity first. I started with playful polls such as, “What do you think I’m about to launch?” with options like a short film, a book or 💍.',
          'From there, the content gradually revealed more about the project. The idea was simple: don’t give the audience the whole story at once. Give them reasons to keep watching.',
          'I explored soft-launch content, Nigerian nostalgia, cultural references, conversational videos, polls, carousels and, eventually, content that spoke directly about the book’s themes.',
        ],
        tags: ['Content hooks', 'Nostalgia marketing', 'Interactive polls', 'Video reels', 'Carousels'],
      },
      {
        id: 'arc-strategy',
        tabLabel: 'ARC strategy',
        headline: 'I built the ARC strategy.',
        body: [
          'One of the biggest things I pushed for was getting the book into people’s hands before launch day. We identified relevant readers, creators, influencers and public figures who could genuinely connect with the book’s themes. I helped structure the outreach, refine the messaging and coordinate the Advanced Reader Copies.',
          'We didn’t stop at “please review my book.” Where appropriate, I pushed for different forms of social proof — written reviews, video reviews, excerpts and conversations that could continue giving the book visibility after launch.',
          'The goal wasn’t just to get people to read the book. It was to create evidence that other people were reading it and enjoying it.',
        ],
        tags: ['Influencer outreach', 'ARC distribution', 'Review gathering', 'Quote extraction'],
        quote: {
          text: 'The goal wasn’t just to get people to read the book.',
          highlight: 'It was to show that people were reading it and enjoying it.',
        },
      },
      {
        id: 'launch-management',
        tabLabel: 'Launch',
        headline: 'Then came launch management.',
        body: [
          'As launch got closer, my role became much bigger than content. I tracked what needed to happen, followed up on outstanding tasks, coordinated content, checked ARC access, helped with launch communication and reminders, supported the virtual launch and kept an eye on the things that are easy to forget when you’re the person publishing a book.',
          'There were plenty of “Allison, we need to do this TODAY” moments. 😂 So I kept asking: What’s pending? Who needs to be contacted? What needs to go out? What are we waiting for? What happens next?',
        ],
        tags: ['Timeline management', 'Asset delivery', 'Checklists', 'Launch-day sprint'],
      },
      {
        id: 'the-voice',
        tabLabel: 'The voice',
        headline: 'I wanted the marketing to feel like the book.',
        body: [
          'The book is playful and unconventional, so I didn’t want the marketing to feel like a stiff literary campaign.',
          'We experimented with curiosity, nostalgia, humour, cultural references, book themes, ARC reactions, launch content, reviews and continued promotion.',
          'Even when we used simple carousel posts, the goal was to make them feel conversational rather than overly promotional. The content needed to feel like something you’d actually stop scrolling for.',
        ],
        tags: ['Curiosity', 'Nostalgia', 'Humour', 'Cultural references', 'Conversational content'],
      },
      {
        id: 'the-result',
        tabLabel: 'The result',
        headline: 'From “I have this book” to a structured launch.',
        body: [
          'I took a project that started with, “Energy, I have this book. I know what I can do. I just don’t know the strategy,” and turned it into a structured launch campaign with a content direction, pre-launch strategy, ARC outreach, launch communication, post-launch content and ongoing reader engagement.',
          'And perhaps the best validation came from the author herself. She described having me on the project as a relief, saying I gave her “rest and a sense of direction” and kept her accountable throughout the launch.',
          'Her words summed up my role pretty well: marketer, content strategist, executive assistant and, occasionally, professional pesterer. 😂',
        ],
        tags: ['Content direction', 'Pre-launch strategy', 'ARC outreach', 'Launch management', 'Reader engagement'],
        quote: {
          text: 'She gave me rest and a sense of direction —',
          highlight: 'and kept me accountable throughout the launch.',
          author: 'Author Testimonial',
        },
      },
    ],
    media: [
      {
        src: '/assets/breakfast-faring1.jpeg',
        alt: 'Book Cover',
        caption: '',
        tag: '',
      },
      {
        src: '/assets/breakfast-faring2.jpeg',
        alt: ' Book Review',
        caption: '',
        tag: '',
      },
      {
        src: '/assets/breakfast-faring3.jpeg',
        alt: 'Sales',
        caption: '',
        tag: '',
      },
    ],
  },
  {
    id: 'streetchurch',
    number: '003',
    title: 'StreetChurch',
    role: 'Assistant Content Lead → Interviewer',
    summary:
      'Contributing content ideas, developing interview concepts and questions, and bringing engaging conversations to life on camera.',
    description: [
      'My role at StreetChurch was mainly focused on contributing content ideas and helping bring some of them to life. I worked with the content team to brainstorm ideas that could make StreetChurch’s content more engaging, particularly content involving real people and conversations.',
      'I helped develop interview questions and concepts, interviewed people for different pieces of content, and represented StreetChurch on camera when needed. I also interviewed actors during movie media junkets, thinking on my feet, asking engaging questions and creating conversations that felt natural rather than overly scripted.',
      'It was a focused role that gave me hands-on experience in content ideation, interviewing, audience engagement and working as part of a creative team.',
    ],
    primaryImage: '/assets/streetchurch1.jpeg',
    galleryPreview: [
      '/assets/streetchurch1.jpeg',
    ],
    externalLinks: [
      {
        label: 'Content 1',
        url: 'https://www.instagram.com/reel/DIREJVVsQdY/?stkn=aHBrcDN0YTVxbjF1',
      },
      {
        label: 'Content 2',
        url: 'https://www.instagram.com/reel/DHtID8GtdNT/?stkn=MWc5OXY4MDlxbzZ0ag==',
      },
    ],
    sections: [
      {
        id: 'my-contribution',
        tabLabel: 'My contribution',
        headline: 'Content ideas, interviews and bringing them to life.',
        body: [
          'I worked with the content team to brainstorm ideas that could make StreetChurch’s content more engaging, especially content built around real people and conversations.',
          'I helped develop interview concepts and questions, interviewed people for different pieces of content, and represented StreetChurch on camera when needed. Interviewing actors during movie media junkets pushed me to think on my feet and create conversations that felt natural rather than overly scripted.',
          'It was a relatively focused role, but it gave me hands-on experience in content ideation, interviewing, audience engagement and working as part of a creative team.',
        ],
        tags: ['Content ideation', 'Interview concepts', 'Question development', 'On-camera interviews', 'Content execution'],
      },
    ],
    media: [
      {
        src: '/assets/streetchurch1.jpeg',
        alt: 'StreetChurch on-camera recording session',
        caption: 'Hosting live conversational segments and media junkets.',
        tag: '',
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

export const testimonials: Testimonial[] = [
  {
    id: 'charles-isidi',
    quote:
      '“I really loved your ability to take on everything with a meticulousness, I saw how you were resourceful and your ability to leverage your existing community to deliver excellently. I wouldn’t have been able to execute this project without your help. Well done”',
    author: 'Charles Isidi',
    role: 'Marketing & Growth',
    organization: 'African Impact Initiative',
  },
  {
    id: 'chimamaka-adeniyi',
    quote: [
      '“Allison, I can\'t even lie, having you as the marketer for How\'s Breakfast Faring has been such a relief right from the beginning. I\'m so glad I hired you before I started anything. One thing I can do is paniccc, and having you doing all the strategy and arranging and accountability gave me rest and a sense of direction for this book launch.',
      'You were basically the marketer, the content strategist, and the executive assistant all in one. I allowed myself rest and think of other things because you were there to keep tabs on all the efforts. I love that you have been very organized, innovative with the content ideas, and very active. Like, active.',
      'I could recommend you a thousand times for anyone in need of an assistant in any capacity because you will indeed get shit done. 7am oh, 12am oh, I\'m receiving a text from Allison. At some point I was low key annoyed with how much you would pester me to meet up 😭, but I needed it like madd if not we wouldn\'t have achieved so much.',
      'You pushed me to do things I wouldn\'t normally have done just because I dey do \'I don\'t wanna inconvenience...I don\'t wanna look as if\' omoo, now I know to carry my thing on my head lol. I genuinely am very grateful for your guidance through this launch period. I don\'t regret a single thing. Thanks for working with me!”',
    ],
    author: 'Chimamaka Adeniyi',
    role: 'Author of ‘How’s Breakfast Faring’',
    organization: 'Poet & writer',
  },
]
