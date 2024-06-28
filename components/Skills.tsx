"use client";

import React from 'react'
import SectionHeading from './SectionHeading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

export default function Skills() {

    const { ref } = useSectionInView("Skills", 0.3);

  return (
    <section 
    id='skills' 
    ref={ref}
    className='mb-28 scroll mt-28 sm:mb-40'
    >
        <SectionHeading>Skills</SectionHeading>
        <ul 
        className='flex flex-wrap max-w-[50rem] justify-center items-center gap-2 text-lg text-gray-800'
        >
            {skillsData.map((skill, index) => (
                <motion.li 
                key={index} 
                className='py-3 px-5 bg-white rounded-xl border-black/10 border'
                variants={fadeInVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once:true,
                }}
                custom={index}
                >
                {skill}
                </motion.li>
            ))}
        </ul>
    </section>
  )
}
