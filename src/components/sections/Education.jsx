import React from 'react';
import '../../styles/sections/education.css';

export default function Education({ educationRef }) {

    return (
        <>
            <section className='education' ref={educationRef}>
                <h2 className='education__heading'>EDUCATION</h2>
            </section>
        </>
    )
}