//? TSX files will be ignored by Content Layer

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
    'I specialize in the development of high-performing mobile first applications. I possess exceptional problem-solving abilities and continuously learn new things by staying up to date with cutting-edge technologies. I primarily focus my time around TypeScript, React, React Native, and Node.js frameworks.',
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
  //     school: 'Palm Beach State College',
  //     degree: "Associate's Degree in Computer Science",
  //     start: '2018',
  //     end: '2020',
  //   },
  // ],
  work: [
    {
      company: '28 Wellness',
      link: 'https://28.co',
      badges: ['Remote'],
      title: 'Technical Lead -> Head of Engineering',
      start: '2023',
      end: 'Now',
      description:
        'Primary in house engineer for a fast growing health tech startup. Grew technical infrastructure to support increase from 50k MAU to over 500k MAU in a few months. Responsible for translating all product ideas and business decisions into technical projects, and also carrying out a number of these projects from start to finish. Managed a combined team of in house engineers and contractors.',
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
      title: 'Bird Watcher',
      techStack: ['Side Project', 'TypeScript', 'React Native', 'NVR'],
      description: 'A mobile app built to interface with Frigate NVR..',
      link: {
        label: 'Bird Watcher on GitHub',
        href: 'https://github.com/billyjacoby/bird-watcher',
      },
    },
    {
      title: 'Frontrunner',
      techStack: ['Full Time', 'Next.js', 'React', 'React Native', 'Web3'],
      description:
        'A decentralized sports betting platform built on the Injective blockchain.',
    },
    {
      title: 'Solspace Wallet',
      techStack: ['React Native', 'Bluetooth', 'Web3', 'Solana'],
      description:
        'A web3 wallet for Solana that connects to a hardware wallet via Bluetooth.',
    },
  ],
} as const;
