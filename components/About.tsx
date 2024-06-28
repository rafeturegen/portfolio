"use client";

import React, { useEffect } from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {

  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section 
    className='flex flex-col gap-2 justify-center items-center max-w-[50rem] sm:mb-40 scroll-mt-28'
    initial={{ opacity:0, y:100 }}
    animate={{ opacity:1, y:0 }}
    transition={{
        delay:0.175,
    }}
    ref={ref}
    id='about'
    >
        <SectionHeading>About Me</SectionHeading>
        <p 
        className='text-center leading-[3] font-light mb-3'
        >
        As a second-year math student at {" "}
        <span className='font-medium'>METU</span>
        , I excel academically and stand as a {" "}
        <span className='font-medium'>honor {" "}</span> 
        student. With my expertise
        in HTML, CSS, Javascript and {" "}
        <span className='underline'>
            React{"(Next.js)"}
        </span>
        , I'm ready to take on exciting challenges.I'm passionate about diving
        into Full-Stack, and eager to bring my {" "}
        <span className='font-medium'>
            curiosity
        </span> and {" "}
        <span className='font-medium'>
            determination
        </span> to drive impactful projects forward.
        My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
        </p>
    </motion.section>
  )
}
