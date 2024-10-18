import React from 'react';
import '../../styles/sections/education.css';

export default function Education({ educationRef }) {

    return (
        <>
            <section className='education' ref={educationRef}>
                <h2 className='education__heading'>Education</h2>
            </section>
        </>
    )
}