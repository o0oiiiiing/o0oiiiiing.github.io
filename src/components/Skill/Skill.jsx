import React from 'react';
import '../../styles/sections/skill.css';
import SkillFigure from './SkillFigure';
import skillImages from './SkillImages';

export default function Skill({ skillRef }) {

    const webTechnologies = [
        { src: skillImages.html, alt: "HTML", caption: "HTML" },
        { src: skillImages.css, alt: "CSS", caption: "CSS" },
        { src: skillImages.js, alt: "JavaScript", caption: "JavaScript" },
        { src: skillImages.jsp, alt: "JSP", caption: "JSP" },
        { src: skillImages.asp, alt: "ASP", caption: "ASP" },
    ];

    const frontend = [
        { src: skillImages.react, alt: "React", caption: "React" },
        { src: skillImages.nextJs, alt: "Next.js", caption: "Next.js" },
        { src: skillImages.emotion, alt: "emotion", caption: "emotion" },
        { src: skillImages.mobX, alt: "MobX", caption: "MobX" },
        { src: skillImages.axios, alt: "axios", caption: "axios" },
        { src: skillImages.router, alt: "router", caption: "router" },
    ];

    const tools = [
        { src: skillImages.vsCode, alt: "VSCode", caption: "VSCode" },
        { src: skillImages.sts, alt: "STS", caption: "STS" },
        { src: skillImages.figma, alt: "figma", caption: "figma" },
        { src: skillImages.git, alt: "git", caption: "git" },
        { src: skillImages.github, alt: "GitHub", caption: "GitHub" },
        { src: skillImages.postman, alt: "postman", caption: "postman" },
        { src: skillImages.discord, alt: "Discord", caption: "Discord" },
        { src: skillImages.editPlus, alt: "EditPlus", caption: "EditPlus" },
        { src: skillImages.fileZilla, alt: "FileZilla", caption: "FileZilla" },
    ];

    const database = [
        { src: skillImages.oracleDB, alt: "oracleDB", caption: "oracleDB" },
        { src: skillImages.mariaDB, alt: "mariaDB", caption: "mariaDB" },
    ];

    return (
        <>
            <section className='skill' ref={skillRef}>
                <h2 className='heading'>Skill</h2>
                <div className='skill__flex'>
                    <article className='skill__item'>
                        <h3 className='skill__item-title'>Web Technologies</h3>
                        <div className='skill__item-flex'>
                            {webTechnologies.map((tech, index) => (
                                <SkillFigure key={index} src={tech.src} alt={tech.alt} caption={tech.caption} />
                            ))}
                        </div>
                    </article>
                    <article className='skill__item'>
                        <h3 className='skill__item-title'>Frameworks / Libraries</h3>
                        <div className='skill__item-flex'>
                            {frontend.map((fe, index) => (
                                <SkillFigure key={index} src={fe.src} alt={fe.alt} caption={fe.caption} />
                            ))}
                        </div>
                    </article>
                </div>
                <div className='skill__flex'>
                    <article className='skill__item'>
                        <h3 className='skill__item-title'>Tools</h3>
                        <div className='skill__item-flex'>
                            {tools.map((tool, index) => (
                                <SkillFigure key={index} src={tool.src} alt={tool.alt} caption={tool.caption} />
                            ))}
                        </div>
                    </article>
                    <article className='skill__item'>
                        <h3 className='skill__item-title'>Database</h3>
                        <div className='skill__item-flex'>
                            {database.map((db, index) => (
                                <SkillFigure key={index} src={db.src} alt={db.alt} caption={db.caption} />
                            ))}
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}