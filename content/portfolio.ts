export const portfolio = {
  name: 'Alison',
  title: 'Executive Assistant · Project Manager · Content Strategist',
  intro: 'I bring shape, momentum and calm to ambitious ideas - from event plans and book launches to content that gets people talking.',
  about: 'I work behind the scenes and in the room: organising moving parts, making clear plans, asking the useful questions and helping creative work land with intention. I am equal parts project manager, marketing mind and professional pesterer.',
  services: ['Executive assistance', 'Project management', 'Content strategy', 'Launch management', 'Marketing coordination', 'Interviewing'],
  cases: [
    { id: 'startup-showcase', number: '01', eyebrow: 'Executive Assistance / Project Management', title: 'Startup Showcase: Bringing it together', summary: 'Turning a growing list of founders, vendors, venue decisions and deadlines into an actual event plan.', tags: ['Events', 'Operations', 'Budgeting'], color: 'coral' },
    { id: 'breakfast', number: '02', eyebrow: 'Book Marketing / Content Strategy / Launch Management', title: 'How\'s Breakfast Faring?', summary: 'Building a personality-filled book launch campaign from scattered ideas to structured momentum.', tags: ['Book marketing', 'Content strategy', 'Launch'], color: 'lilac' },
    { id: 'streetchurch', number: '03', eyebrow: 'Assistant Content Lead → Interviewer', title: 'StreetChurch', summary: 'Contributing ideas, developing questions and creating conversations that felt natural rather than scripted.', tags: ['Ideation', 'Interviews', 'Content'], color: 'mint' },
  ],
} as const

export const startupSections = [
  { title: 'The plan', body: 'Before jumping into vendors and payments, I broke the event down: venue, branding, furniture, food, sound, screens, photography, speakers, guest experience and logistics.', quote: 'Because "we need to organise an event" is not a task. It\'s about 30 tasks wearing a trench coat.' },
  { title: 'Venue as a business decision', body: 'I looked beyond whether a space looked good. Capacity, configuration, meeting rooms, branding opportunities, furniture, screens, projector quality, sound, food and accessibility all mattered. I visited venues to check measurements and placement because some things simply cannot be solved from a WhatsApp photo.' },
  { title: 'Money & vendors', body: 'I tracked invoices, approvals, changes, payments and receipts across branding, printing, carpentry, food, photography, sound and furniture. I found better options where we could and flagged overspending before it became a bigger problem.', quote: 'Don\'t just have a conversation. Get the next step.' },
  { title: 'Creative direction', body: 'Alongside the design and branding team, I thought through how the event should feel in the physical space - from branded materials to the welcome experience - so the branding felt intentional instead of like banners everywhere.' },
  { title: 'Planning ahead', body: 'I checked the projector, confirmed laptop and connection details, and planned logistics before event day. "We\'ll figure it out on the day" is a dangerous sentence in event management.' },
  { title: 'The paper trail', body: 'I created a central folder for invoices and receipts and tracked pending and completed payments. When money moves, there should be a trail.' },
  { title: 'Management', body: 'My goal was to keep the founder out of unnecessary chaos. I brought clear options, prices and next steps instead of handing over more problems to chase.' },
]

export const breakfastSections = [
  { title: 'The book', body: 'How\'s Breakfast Faring? is a collection of 20 witty, whimsical and absurdist Nigerian short stories across drama, sci-fi, satire, romance and absurdism. I started by understanding the voice, audience and purpose behind the work.' },
  { title: 'The story', body: 'I turned the launch into a story: playful polls, Nigerian nostalgia, cultural references, conversational videos, carousels and gradual reveals that gave people reasons to keep watching.' },
  { title: 'ARC strategy', body: 'I identified readers, creators, influencers and public figures who could genuinely connect with the themes, then helped structure outreach, messaging and Advanced Reader Copies. The goal was to create evidence that other people were reading and enjoying it.' },
  { title: 'Launch management', body: 'I tracked outstanding tasks, coordinated content, checked ARC access, supported launch communication and kept asking: What\'s pending? Who needs to be contacted? What needs to go out? What happens next?' },
  { title: 'The voice', body: 'The book is playful and unconventional, so the marketing was too. We experimented with curiosity, nostalgia, humour, cultural references, book themes, ARC reactions, launch content, reviews and continued promotion.' },
  { title: 'The result', body: 'A project that began with "I have this book. I know what I can do. I just don\'t know the strategy" became a structured campaign with clear direction, pre-launch strategy, ARC outreach and ongoing reader engagement.', quote: 'She gave me rest and a sense of direction - and kept me accountable throughout the launch.' },
]

export const streetChurchContributions = ['Content ideation', 'Interview concepts', 'Question development', 'On-camera interviews', 'Content execution']

export const links = {
  linkedin: 'https://www.linkedin.com/posts/african-impact-initiative_africanimpactchallenge-africanimpactchallenge-activity-7505672245558579202-EQXJ',
  bookAnnouncement: 'https://www.instagram.com/reel/DcyFF9hOLu-/?stkn=bWxtZmxwZ2FjbmFy',
  streetChurch: ['https://www.instagram.com/reel/DIREJVVsQdY/?stkn=aHBrcDN0YTVxbjF1', 'https://www.instagram.com/reel/DHtID8GtdNT/?stkn=MWc5OXY4MDlxbzZ0ag==', 'https://www.instagram.com/p/DdRAa0miLSi/?stkn=MTA4cGtiNXRlaXV2dQ=='],
} as const

export type CaseId = (typeof portfolio.cases)[number]['id']
export const caseContent = { 'startup-showcase': startupSections, breakfast: breakfastSections } as const

export function placeholderLabel(label: string) { return label }

export const mediaLabels = {
  'startup-showcase': ['Startup Showcase group photo', 'At the welcome desk', 'The Startup Showcase board', 'On stage at the Startup Showcase'],
  breakfast: ["A reader's pre-order message", '50 sales on Selar in the first few days of pre-launch', 'Book cover'],
} as const

export const streetChurchLabels = ['Interactive content 01', 'Interactive content 02', 'Interactive content 03']

export const streetChurchLinks = links.streetChurch

export const startupEventLink = links.linkedin

export const bookLinks = { announcement: links.bookAnnouncement, review: '#' }

export const contactCopy = 'Have a project with a lot of moving parts? Let\'s make it make sense.'

export const footerCopy = 'Built with intention. Always asking: what happens next?'

export const aboutBullets = ['Clearer plans', 'Calmer launches', 'Better follow-through']

export const sectionLabels = { work: 'Selected work', about: 'A little about me', contact: 'Let\'s work together' }

export const navItems = ['Work', 'About', 'Contact'] as const

export const mediaPlaceholderClass = 'media-placeholder'

export const workNote = 'A closer look at the work behind the work.'

export const streetChurchBody = 'I worked with the content team to brainstorm ideas that could make StreetChurch\'s content more engaging, particularly content involving real people and conversations. I also interviewed actors during movie media junkets, which pushed me to think on my feet and ask engaging questions.'

export const featuredQuote = 'The best work is often the work that makes everything else feel possible.'

export const serviceIntro = 'The things I\'m good at, and the things I like doing.'

export const contactEmail = '#'

export const socialLabel = 'LinkedIn'

export const placeholderMediaNote = 'Placeholder media · replace with the real image when ready'

export const homeCta = 'See the work'

export const footerName = 'Alison'

export const homeKicker = 'Operations, ideas & momentum'

export const sectionEyebrow = 'Portfolio / 2026'

export const pageDescription = 'Portfolio of Alison - Executive Assistant, Project Manager, Content Strategist and Marketing professional.'

export const mediaAlt = 'Portfolio media placeholder'

export const copyright = '© 2026 Alison'

export const externalLinkLabel = 'Open external link'

export const nextLabel = 'Next case study'

export const previousLabel = 'Previous case study'

export const backLabel = 'Back to work'

export const menuLabel = 'Open menu'

export const closeLabel = 'Close menu'

export const allWorkLabel = 'All selected work'

export const viewCaseLabel = 'Read case study'

export const capabilitiesLabel = 'Capabilities'

export const introductionLabel = 'Introduction'

export const mediaLabel = 'Media'

export const linksLabel = 'Links'

export const detailsLabel = 'The details'

export const profileLabel = 'About Alison'

export const availableLabel = 'Available for thoughtful work'

export const viewOnLabel = 'View on Instagram'

export const placeholderReviewLabel = 'Book review link coming soon'

export const heroAccent = 'Alison'

export const heroStatement = 'The calm behind the momentum.'

export const aboutStatement = 'I help ambitious people move from "we should" to "it\'s done."'

export const serviceStatement = 'Strategy, structure and follow-through for creative projects.'

export const contactStatement = 'Tell me what you\'re building.'

export const contactLinkLabel = 'Start a conversation'

export const homeScrollLabel = 'Scroll to explore'

export const caseStudyLabel = 'Case study'

export const footerNote = 'Executive support, project thinking and content with personality.'

export const pageTheme = 'editorial'

export const accentWord = 'momentum'

export const placeholderMediaAria = 'Media placeholder'

export const missingLinkLabel = 'Link to be added'

export const servicesHeading = 'What I bring'

export const selectedWorkHeading = 'Work that moved things forward.'

export const aboutHeading = 'A reliable second brain for ideas in motion.'

export const contactHeading = 'Let\'s make the next step clear.'

export const homeDescription = 'Executive assistance, project management and content strategy for people doing interesting work.'

export const availableTag = 'Currently open to selected projects'

export const experienceTag = 'Events · Books · Content'

export const mediaHeading = 'The visual proof'

export const quoteLabel = 'A note from the work'

export const linkHeading = 'Explore the project'

export const workIndex = '01-03'

export const wordmark = 'ALISON'

export const navHome = 'Home'

export const contactPlaceholder = 'Email link coming soon'

export const currentYear = 2026

export const allExternalLinksNewTab = true

export const noBackend = true

export const lastUpdated = 'October 2026'

export const contentEditableLater = true

export const brandTone = 'warm, direct, capable'

export const originalDesign = true

export const finalNote = 'No invented personal details. Replace placeholders as real media and URLs become available.'

export const portfolioReady = true

export const end = true
