import React from 'react';
import '../../styles/sections/skill.css';
import html from '../../assets/skills/html.png'
import css from '../../assets/skills/css.png'
import js from '../../assets/skills/js.png'
import jsp from '../../assets/skills/jsp.png'
import react from '../../assets/skills/react.png'
import nextJs from '../../assets/skills/nextJs.png'
import emotion from '../../assets/skills/emotion.png'
import mobX from '../../assets/skills/mobX.png'

export default function Skill({ skillRef }) {

    return (
        <>
            <section className='skill' ref={skillRef}>
                <h2 className='skill__heading'>skill</h2>
                <article>
                    <h3>Web Technologies</h3>
                    <img className='skill__icon' src={html} alt="HTML" />
                    <img className='skill__icon' src={css} alt="CSS" />
                    <img className='skill__icon' src={js} alt="JavaScript" />
                    <img className='skill__icon' src={jsp} alt="JSP" />
                </article>
                <article>
                    <h3>Frontend Frameworks/Libraries</h3>
                    <img className='skill__icon' src={react} alt="React" />
                    <img className='skill__icon' src={nextJs} alt="Next.js" />
                    <img className='skill__icon' src={emotion} alt="emotion" />
                    <img className='skill__icon' src={mobX} alt="MobX" />
                </article>
                <article>
                    <h3>Tools</h3>
                </article>
                <article>
                    <h3>Cooperation</h3>
                </article>
            </section>
        </>
    )
}