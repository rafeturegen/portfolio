"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className='max-w-[50rem] mb-28 text-center sm:mb-0'>
        <div className='flex justify-center items-center relative'>
            <div className='relative'>
                <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type:"tween",
                    duration:0.2,
                }}
                >
                    <Image 
                    src="/linkedin_pp.jpg" 
                    alt="Rafet's photo" 
                    width={192} 
                    height={192} 
                    quality={95} 
                    priority={true} 
                    className='rounded-full border-[0.35rem] object-cover shadow-xl h-24 w-24 border-white '
                    />
                </motion.div>
                <motion.span 
                className='text-3xl absolute bottom-0 right-0'
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type:"spring",
                    stiffness: 125,
                    delay: 0.1,
                    duration:0.7
                }}
                >
                👋
            </motion.span>
            </div>
        </div>
        <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        >
            <span className="font-bold">Hello, I'm Rafet.</span> I'm a{" "}
            <span className="font-bold">full-stack developer</span> with{" "}
            <span className="font-bold">1 year</span> of experience. I enjoy
            building <span className="italic">sites & apps</span>. My focus is{" "}
            <span className="underline">React (Next.js)</span>.
        </motion.h1>
        <motion.div 
        className='flex flex-col gap-4 justify-center mt-4 items-center sm:flex-row text-lg'
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay:0.1,
        }}
        >
            <Link href="#contact" className='bg-slate-950 text-slate-100 py-2 px-4 rounded-3xl flex items-center gap-2 group hover:scale-110 active:scale-105'>
                Contact me here{" "}
                <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
            </Link>
            <a 
            href="/cv.pdf" 
            download 
            className='flex items-center gap-2 py-2 px-4 bg-slate-50 rounded-3xl group hover:scale-110 active:scale-105 border border-black/10'
            >
                Download CV {""}
                <HiDownload className='group-hover:translate-y-1 transition'/>
            </a>
            <a 
            target='_blank'
            className="hover:scale-[1.15] active:scale-110 bg-slate-50 rounded-full w-10 h-10 flex justify-center items-center border border-black/10 hover:text-gray-950" 
            href='https://www.linkedin.com/in/rafet-uregen-053525253/'
            >
                <BsLinkedin className=''/>
            </a>
            <a 
            target='_blank'
            className="hover:scale-[1.15] active:scale-110 bg-slate-50 rounded-full w-10 h-10 flex justify-center items-center border border-black/10 hover:text-gray-950" 
            href='https://www.linkedin.com/in/rafet-uregen-053525253/?locale=en_US'
            >
                <BsGithub className=''/>
            </a>
        </motion.div>

    </section>
  )
}
