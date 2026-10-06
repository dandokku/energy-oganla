export interface GalleryImage {
  src: string
  alt: string
  className: string
}

export interface Project {
  number: string
  title: string
  text: string
  image: string
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
    number: '001',
    title: 'The first room.',
    text: 'Where a simple idea became a room full of honest conversations.',
    image: '/assets/playground-gathering-2.png',
  },
  {
    number: '002',
    title: 'Making space.',
    text: 'A soft place for curious people to arrive, connect and think out loud.',
    image: '/assets/playground-portrait-1.png',
  },
  {
    number: '003',
    title: 'The next chapter.',
    text: 'Small moments, big questions and plenty of room to play.',
    image: '/assets/playground-event-4.png',
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
