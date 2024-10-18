import React from 'react';
import '../../styles/sections/contact.css';

export default function Contact({ contactRef }) {

    return (
        <>
            <section className='contact' ref={contactRef}>
                <h2 className='contact__heading'>Contact</h2>
            </section>
        </>
    )
}