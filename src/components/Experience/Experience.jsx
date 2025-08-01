import React from 'react';
import '../../styles/sections/experience.css';
import { expItemData } from '../../data/ExpItemData';
import ExpItem from './ExpItem';

export default function Education({ experienceRef }) {

    return (
        <>
            <section className='experience' ref={experienceRef}>
                <h2 className='heading'>Experience</h2>
                <div className='exp__grid'>
                    {expItemData.map((item, index) => (
                        <ExpItem key={index} src={item.src} alt={item.alt}
                            title={item.title} date={item.date} description={item.description} />
                    ))}
                </div>
            </section>
        </>
    )
}