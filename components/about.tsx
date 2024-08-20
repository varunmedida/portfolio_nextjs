'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        Skilled software engineer with a rich foundation in{' '}
        <span className='font-medium'>
          {' '}
          Java, Spring Boot, and AWS technologies
        </span>
        , supplemented by robust front-end expertise in{' '}
        <span className='font-medium'> Angular</span>, graduating with a degree
        in <span className='font-medium'>Information Technology</span>.
        Transitioning from a successful stint at EPAM Systems where I delivered
        high-impact projects including a comprehensive wealth management
        platform and a dynamic eCommerce website, I thrive on leveraging my
        extensive <span className='font-medium'>full-stack development</span>{' '}
        skills to solve{' '}
        <span className='font-medium'>
          complex problems and deliver scalable solutions
        </span>
        .
      </p>

      <p>
        <span className='italic'>Outside the office</span>, I’m equally
        passionate about expanding my horizons. Whether it's diving into the
        strategic complexities of video games, exploring new insights through
        movies, or unwinding with my dog, I bring the same enthusiasm to my
        personal pursuits as I do to my professional projects. Additionally, I'm
        continually enriching my understanding of the world through ongoing
        studies in Computer Science and honing my creative expression through
        guitar, making every day a journey of discovery and{' '}
        <span className='font-medium'>growth </span>.
      </p>
    </motion.section>
  );
}
