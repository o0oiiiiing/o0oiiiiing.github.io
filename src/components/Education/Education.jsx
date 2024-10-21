import React from 'react';
import '../../styles/sections/education.css';
import EducationItem from './EducationItem';
import educationImages from './EducationImages';

export default function Education({ educationRef }) {
    const educationItem = [
        { src: educationImages.bcu, alt: '부천대학교', title: '부천대학교', date: '2020.03 ~ 2022.02', description: '정보통신과' },
        { src: educationImages.ict, alt: '한국ICT인재개발원', title: '한국ICT인재개발원', date: '2023.12 ~ 2024.07', description: 'Java 개발자 양성 과정' },
    ];

    return (
        <>
            <section className='education' ref={educationRef}>
                <h2 className='education__heading'>Education</h2>
                {educationItem.map((item, index) => (
                    <EducationItem key={index} src={item.src} alt={item.alt}
                        title={item.title} date={item.date} description={item.description} />
                ))}
            </section>
        </>
    )
}