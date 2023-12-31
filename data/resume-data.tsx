import { GitHubIcon } from '@/components/resume/icons/GitHubIcon';
import { LinkedInIcon } from '@/components/resume/icons/LinkedInIcon';
import { XIcon } from '@/components/resume/icons/XIcon';

export const RESUME_DATA = {
  name: 'Billy Jacoby',
  initials: 'WKJ',
  location: 'Brodheadsville, Pennsylvania, USA',
  locationLink: 'https://www.google.com/maps/place/Brodheadsville',
  about:
    'Experienced Full Stack Engineer focused on building performant and enjoyable applications',
  summary:
    'I focus building performant, mobile friendly applications. Strong problem-solving skills and a determination to learn and stay up to date with the latest technologies. I focus mostly on TypeScript, React, React Native, and Node.js.',
  avatarUrl: 'https://avatars.githubusercontent.com/u/27246508?v=4',
  personalWebsiteUrl: 'https://billyjacoby.com',
  contact: {
    email: 'billyjacoby@gmail.com',
    tel: '+16313072188',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/billyjacoby',
        icon: GitHubIcon,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/billyjacoby/',
        icon: LinkedInIcon,
      },
      {
        name: 'X',
        url: 'https://x.com/billyjacoby',
        icon: XIcon,
      },
    ],
  },
  // education: [
  //   {
  //     school: 'Wrocław University of Technology',
  //     degree: "Bachelor's Degree in Control systems engineering and Robotics",
  //     start: '2007',
  //     end: '2010',
  //   },
  // ],
  work: [
    {
      company: '28 Wellness',
      link: 'https://28.co',
      badges: ['Remote'],
      title: 'Technical Lead',
      start: '2023',
      end: 'Now',
      description:
        'Primary in house engineer for a fast growing health tech startup. Grew technical infrastructure to support increase from 50k MAU to over 500k MAU in a few months. Responsible for translating all product ideas and business decisions into technical projects, and also carried out a number of these projects from start to finish. Managed a combined team of in house engineers and contractors.',
    },
    {
      company: 'Frontrunner',
      link: 'https://twitter.com/frontrunnerxyz?lang=en',
      badges: ['Remote'],
      title: 'Software Engineer → Senior Software Engineer',
      start: '2022',
      end: '2023',
      description:
        "Led the Frontend team in developing the company's web application and native mobile apps. The project was architected and developed from ideation to delivery under my guidance, leveraging deep technical knowledge and experience in frontend development. Ensure team’s priorities stay aligned with the company’s direction and on track for timely completion.",
    },
    {
      company: 'Solspace Wallet',
      badges: ['Remote'],
      title: 'Software Engineer',
      start: '2020',
      end: '2022',
      description:
        'Designed, architected, and optimized a React Native application that enabled interaction with the Solana blockchain using a Bluetooth hardware wallet. Technical challenges included scaling for thousands of users, optimizing code, and caching to improve performance.',
    },
    {
      company: 'Prometheus Technology',
      link: 'https://www.prometheus-ts.com',
      badges: ['Owner'],
      title: 'Software Engineer',
      start: '2016',
      end: '2021',
      description:
        'Overcome unique technical challenges designing and building custom websites and web applications for medium to large-sized businesses. Utilized my extensive knowledge of various programming languages and the ability to develop and implement bespoke e-commerce solutions. Through a combination of technical expertise and problem-solving skills, I successfully delivered tailored web solutions that met the specific needs of each customer.',
    },
  ],
  skills: [
    'JavaScript',
    'TypeScript',
    'React/Next.js/Remix',
    'React Native',
    'Node.js',
    'GraphQL',
    'tRPC',
    'WebRTC',
  ],
  projects: [
    {
      title: '28 Wellness',
      techStack: ['Full Time', 'TypeScript', 'Next.js', 'tRPC', 'React Native'],
      description: "A women's health fitness platform and mobile application.",
      link: {
        label: '28.co',
        href: 'https://28.co/',
      },
    },
    {
      title: 'Browsernaut',
      techStack: ['Side Project', 'TypeScript', 'Rust', 'Desktop App', 'Tauri'],
      description:
        'A macOS application that opens URLs in various applications beyond web browsers.',
      link: {
        label: 'Browsernaut on GitHub',
        href: 'https://github.com/billyjacoby/browsernaut',
      },
    },
    {
      title: 'Frontrunner',
      techStack: ['Full Time', 'Next.js', 'React', 'React Native', 'Web3'],
      description:
        'A decentralized sports betting platform built on the Injective blockchain.',
    },
    // {
    //   title: 'Minimal',
    //   techStack: ['Side Project', 'Next.js', 'Puppeteer'],
    //   description:
    //     'Minimalist calendars, habit trackers and planners generator',
    //   link: {
    //     label: 'useminimal.com',
    //     href: 'https://useminimal.com/',
    //   },
    // },
    // {
    //   title: 'Barepapers',
    //   techStack: ['Side Project', 'Next.js', 'Puppeteer'],
    //   description:
    //     'Generates beautiful wallpapers using random shapes and gradients',
    //   link: {
    //     label: 'barepapers.com',
    //     href: 'https://barepapers.com/',
    //   },
    // },
    // {
    //   title: 'Year progress',
    //   techStack: ['Side Project', 'TypeScript', 'Next.js'],
    //   description: 'Tracks current year progress and displays a countdown',
    //   link: {
    //     label: 'getyearprogress.com',
    //     href: 'https://getyearprogress.com/',
    //   },
    // },
    // {
    //   title: 'Parabol',
    //   techStack: [
    //     'Full Stack Developer',
    //     'TypeScript',
    //     'React',
    //     'Node.js',
    //     'GraphQL',
    //   ],
    //   description:
    //     'The Agile meeting co-pilot that delivers better meetings with less effort',
    //   link: {
    //     label: 'github.com',
    //     href: 'https://parabol.co/',
    //   },
    // },
    // {
    //   title: 'Evercast',
    //   techStack: [
    //     'Lead Frontend Developer',
    //     'TypeScript',
    //     'React',
    //     'Node.js',
    //     'GraphQL',
    //   ],
    //   description:
    //     'Creative collaboration platform that combines video conferencing and HD media streaming',
    //   link: {
    //     label: 'evercast.us',
    //     href: 'https://www.evercast.us/',
    //   },
    // },
    // {
    //   title: 'Mobile Vikings',
    //   techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
    //   description:
    //     'Android application for leading virtual mobile operator in Poland',
    //   link: {
    //     label: 'mobilevikings.pl',
    //     href: 'https://mobilevikings.pl/',
    //   },
    // },
    // {
    //   title: 'Howdy',
    //   techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
    //   description:
    //     'Howdy is a place for you to join communities you care about',
    //   link: {
    //     label: 'play.google.com',
    //     href: 'https://howdy.co/',
    //   },
    // },
    // {
    //   title: 'Tastycloud',
    //   techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
    //   description:
    //     'Android application for managing and displaying restaurant menus in kiosk mode',
    //   link: {
    //     label: 'tastycloud.fr',
    //     href: 'https://www.tastycloud.fr/',
    //   },
    // },
    // {
    //   title: 'Ambit',
    //   techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
    //   description:
    //     'Android application that helps with sharing your contact details',
    // },
    // {
    //   title: 'Bim',
    //   techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
    //   description:
    //     'Android application that helps with booking a table in a restaurants',
    // },
    // {
    //   title: 'Canal Digital GO',
    //   techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
    //   description:
    //     'Video streaming mobile application for Canal Digital subscribers',
    // },
  ],
} as const;
