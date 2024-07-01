"use client";

import React from 'react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitButton from './SubmitButton';
import toast from 'react-hot-toast';

export default function Contact() {
    const { ref } = useSectionInView("Contact", 0.5);

    return (
        <motion.section 
        id='contact'
        ref={ref}
        className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
        initial={{ 
            opacity:0 
        }}
        animate={{ 
            opacity:1 
        }}
        transition={{
            duration:1
        }}
        viewport={{
            once:true,
        }}
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
            <form 
            className='mt-10 flex flex-col'
            action={async (FormData) => {

                console.log(Object.fromEntries(FormData.entries()));
                const { data, error } = await sendEmail(FormData);

                if(error) {
                    toast.error(error);
                    return;
                }

                toast.success("Message sent successfully!");
            }}
            >
                <input 
                type="email" 
                placeholder='Your Email' 
                className='h-14 px-4 rounded-lg transition-all border border-black/10' 
                required 
                maxLength={500}
                name='senderEmail'
                />
                <textarea 
                name="message" 
                placeholder='Your message' 
                className='h-52 my-3 rounded-lg border border-black/10 transition-all p-4' 
                required  
                maxLength={500}
                />
                <SubmitButton/>
            </form>
        </motion.section>
    )
}
