"use client";

import React from 'react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hooks'
import { FaPaperPlane } from 'react-icons/fa';

export default function Contact() {

    const { ref } = useSectionInView("Contact", 0.5);
    return (
        <section 
        id='contact'
        ref={ref}
        className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
        >
            <SectionHeading>Contact Me</SectionHeading>
            <p className='text-gray-700 -mt-6'>Please contact me directly at {" "}
                <a 
                className='underline' 
                href='mailto:rafet.uregen7@gmail.com'
                >
                    rafet.uregen7@gmail.com
                </a>
                {" "}or through this form.
            </p>
            <form className='mt-10 flex flex-col'>
                <input type="email" placeholder='Your Email' className='h-14 px-4 rounded-lg transition-all border border-black/10'/>
                <textarea name="" id="" placeholder='Your message' className='h-52 my-3 rounded-lg border border-black/10 transition-all p-4'></textarea>
                <button 
                type='submit'
                className='group flex items-center gap-3 bg-gray-950 rounded-full w-[8rem] text-white py-3 px-4 justify-center'
                >
                    Submit
                    <FaPaperPlane className='group-hover:-translate-y-1 transition'/>
                </button>
            </form>
        </section>
    )
}
