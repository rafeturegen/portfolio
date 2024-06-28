"use client";

import React, { useRef } from 'react'
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl,
}: ProjectProps) {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target:ref,
        offset:["0 1", "1.33 1"]
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
    ref={ref} 
    style={{
        scale:scaleProgress,
        opacity:opacityProgress,
    }}
    className='mb-3 sm:mb-8 last:mb-0 group scroll-mt-48'
    id='projects'
    >
        <section 
        className='bg-gray-100 max-w-[42rem] relative border border-black/5 overflow-hidden sm:pr-8 h-72 sm:h-80 mb-3 sm:mb-8 last:mb-0 even:pl-2 hover:bg-gray-200 transition'
        
        >
            <div className='pt-4 pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[54%] flex flex-col h-full group-even:ml-72'>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
                <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                    {tags.map((tag, index) => (
                        <li key={index} className='bg-black/[0.7] px-3 py-1 uppercase tracking-wider text-white rounded-full text-sm'>
                            {tag}   
                        </li>
                    ))}
                </ul>
            </div>
            <Image 
            src={imageUrl} 
            alt={description} 
            quality={95}
            className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
            group-hover:scale-105
            group-hover:-rotate-2
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-even:group-hover:rotate-2
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:right-[initial] 
            group-even:-left-40'
            />
        </section>
    </motion.div>

  )
}
