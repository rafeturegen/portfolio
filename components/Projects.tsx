"use client";

import React, { useEffect } from 'react'
import SectionHeading from './SectionHeading';
import { projectsData } from '@/lib/data';
import Project from './Project';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {

  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
        <div>
            {projectsData.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project}/>
              </React.Fragment>
            ))}
        </div>
    </section>
  )
}
