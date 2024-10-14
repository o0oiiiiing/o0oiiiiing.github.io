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
import axios from '../../assets/skills/axios.png'
import router from '../../assets/skills/router.png'
import sts from '../../assets/skills/sts.png'
import vsCode from '../../assets/skills/vsCode.png'
import figma from '../../assets/skills/figma.png'
import postman from '../../assets/skills/postman.png'
import git from '../../assets/skills/git.png'
import github from '../../assets/skills/github.png'
import discord from '../../assets/skills/discord.png'
import SkillFigure from './SkillFigure';

export default function Skill({ skillRef }) {

    const webTechnologies = [
        { src: html, alt: "HTML", caption: "HTML" },
        { src: css, alt: "CSS", caption: "CSS" },
        { src: js, alt: "JavaScript", caption: "JavaScript" },
        { src: jsp, alt: "JSP", caption: "JSP" },
    ];

    const frontend = [
        { src: react, alt: "React", caption: "React" },
        { src: nextJs, alt: "Next.js", caption: "Next.js" },
        { src: emotion, alt: "emotion", caption: "emotion" },
        { src: mobX, alt: "MobX", caption: "MobX" },
        { src: axios, alt: "axios", caption: "axios" },
        { src: router, alt: "router", caption: "router" },
    ]

    const tools = [
        { src: vsCode, alt: "VSCode", caption: "VSCode" },
        { src: sts, alt: "sts", caption: "sts" },
        { src: figma, alt: "figma", caption: "figma" },
        { src: git, alt: "git", caption: "git" },
        { src: github, alt: "github", caption: "github" },
        { src: postman, alt: "postman", caption: "postman" },
        { src: discord, alt: "Discord", caption: "Discord" },
    ]

    return (
        <>
            <section className='skill' ref={skillRef}>
                <h2 className='skill__heading'>SKILL</h2>
                <article className='skill__item'>
                    <h3 className='skill__item-title'>Web Technologies</h3>
                    <div className='skill__item-flex'>
                        {webTechnologies.map((tech, index) => (
                            <SkillFigure key={index} src={tech.src} alt={tech.alt} caption={tech.caption} />
                        ))}
                    </div>
                </article>
                <article className='skill__item'>
                    <h3 className='skill__item-title'>Frontend Frameworks/Libraries</h3>
                    <div className='skill__item-flex'>
                        {frontend.map((fe, index) => (
                            <SkillFigure key={index} src={fe.src} alt={fe.alt} caption={fe.caption} />
                        ))}
                    </div>
                </article>
                <article className='skill__item'>
                    <h3 className='skill__item-title'>Tools</h3>
                    <div className='skill__item-flex'>
                        {tools.map((tool, index) => (
                            <SkillFigure key={index} src={tool.src} alt={tool.alt} caption={tool.caption} />
                        ))}
                    </div>
                </article>
            </section>
        </>
    )
}