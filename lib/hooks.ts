import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { useEffect } from 'react';
import { SectionName } from './types';

export function  useSectionInView (sectionName: SectionName, threshold:number) {
    const { ref, inView } = useInView({
        threshold:0.5,
    });
    
    
    const { setActiveSection, timeOfLastClick} = useActiveSectionContext();
    
    useEffect(() => {
        if(inView && Date.now() - timeOfLastClick > 1000) {
        setActiveSection(sectionName);
    }
    }, [inView, timeOfLastClick, setActiveSection, sectionName])

    return {
        ref,
    };
}
