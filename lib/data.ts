import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import ecommerceImg from '@/public/eCommerce.png';
import portfolio from '@/public/pf.png';
import fileFlow from '@/public/ff.png';
import wealthManagement from '@/public/wm.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'eCommerce',
    description:
      'Designed and developed a full-stack eCommerce platform using Java Spring Boot and Angular, enhancing user shopping experiences.',
    tags: ['Java', 'Spring boot', 'MySQL', 'Angular'],
    imageUrl: ecommerceImg,
  },
  {
    title: 'Portfolio',
    description:
      'Crafted a dynamic portfolio using TypeScript, Next.js, and React, styled with Tailwind CSS and animated with Framer Motion',
    tags: ['TypeScript', 'Next.js', 'Tailwind', 'React', 'Framer Motion'],
    imageUrl: portfolio,
  },
  {
    title: 'File Flow',
    description:
      'Developed an application that processes uploaded files via EC2, storing results in S3 and logging details in DynamoDB.',
    tags: ['React', 'AWS', 'DynamoDB', 'Tailwind', 'EC2', 'Lambda', 'S3'],
    imageUrl: fileFlow,
  },
  {
    title: 'Wealth Management',
    description:
      'A wealth management tool utilizing AWS and CQRS patterns to manage client portfolios efficiently, enhancing data handling and scalability.',
    tags: ['Java', 'Dagger', 'AWS', 'CQRS', 'Lambda', 'DynamoDB', 'SQS'],
    imageUrl: wealthManagement,
  },
] as const;

export const skillsData = [
  'Java',
  'Python',
  'PHP',
  'C++',
  'SQL',
  'HTML',
  'JavaScript',
  'TypeScript',
  'Angular',
  'React',
  'Spring Boot',
  'AWS',
  'Docker',
  'Jenkins',
  'Kubernetes',
  'Git',
  'MySQL',
  'Hibernate',
  'MongoDB',
  'Elasticsearch',
  'Logstash',
  'Kibana',
  'Splunk',
  'Terraform',
  'Microservices',
  'Jira',
  'Selenium',
  'Linux',
] as const;
