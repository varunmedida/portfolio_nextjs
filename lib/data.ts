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
    title: 'Software Engineer at EPAM Systems',
    location: 'Hyderabad, India',
    description:
      'Contributed to the CARMA wealth management tool using Java, Spring Boot, and AWS. Enhanced project performance and scalability using CQRS patterns. Resolved critical infrastructure issues, leading to significant cost savings.',
    icon: React.createElement(FaReact),
    date: '2020 - 2022',
  },
  {
    title: 'Associate System Engineer at Tata Consultancy Services',
    location: 'Hyderabad, India',
    description:
      'Executed data migration projects, reduced backup failures by 85%, and spearheaded database administration tasks. Utilized factory design patterns to improve scalability and reduce development time.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2020',
  },
  {
    title: 'Intern at Spyry Technologies',
    location: 'Hyderabad, India',
    description:
      'Conducted Vulnerability Assessment and Penetration Testing on web applications, identifying and mitigating security vulnerabilities using Kali Linux and Burp Suite.',
    icon: React.createElement(LuGraduationCap),
    date: 'March 2018 - May 2018',
  },
  {
    title: 'Graduate Research Assistant at Georgia State College of Law',
    location: 'Atlanta, Georgia, USA',
    description:
      'Automated data collection processes, increasing efficiency by 70%. Developed dynamic data visualizations using Python and Matplotlib, enhancing data analysis accessibility by 20%.',
    icon: React.createElement(LuGraduationCap),
    date: '2023 - Present',
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
    tags: ['Java', 'Dagger', 'DynamoDB', 'CQRS', 'Lambda', 'AWS', 'SQS'],
    imageUrl: wealthManagement,
  },
  {
    title: 'Portfolio',
    description:
      'Crafted a dynamic portfolio using TypeScript, Next.js, and React, styled with Tailwind CSS and animated with Framer Motion',
    tags: ['TypeScript', 'Next.js', 'Tailwind', 'React', 'Framer Motion'],
    imageUrl: portfolio,
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
