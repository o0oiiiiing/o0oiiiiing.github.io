import React from 'react';
import '../../styles/sections/experience.css';
import ExperienceItem from './ExperienceItem';
import ExperienceImages from './ExperienceImages';

export default function Education({ experienceRef }) {
    const experienceItem = [
        {
            src: ExperienceImages.bcu,
            alt: '부천대학교',
            title: '부천대학교',
            date: '2020.03 - 2022.02 (2년)',
            description: ['정보통신과 졸업']
        },
        {
            src: ExperienceImages.ict,
            alt: '한국ICT인재개발원',
            title: '한국ICT인재개발원',
            date: '2023.12 - 2024.07 (7개월)',
            description:
                [
                    'Java 개발자 양성 과정 수료',
                    '',
                    '1. 기초 프로그래밍',
                    '2. SQL',
                    '4. 백엔드 개발',
                    '5. 프론트엔드 개발',
                    '6. Open API 활용 개발 프로젝트',
                    '7. AI 융합 웹 애플리케이션 제작 프로젝트'
                ]
        },
        {
            src: ExperienceImages.osc,
            alt: '한걸음컴퍼니',
            title: '한걸음컴퍼니',
            date: '2024.11 - 현재',
            description: ['웹R&D부서 개발팀 사원', '', '- 랜딩페이지 전환 스크립트 삽입']
        },
    ];

    return (
        <>
            <section className='experience' ref={experienceRef}>
                <h2 className='experience__heading'>Experience</h2>
                {experienceItem.map((item, index) => (
                    <ExperienceItem key={index} src={item.src} alt={item.alt}
                        title={item.title} date={item.date} description={item.description} />
                ))}
            </section>
        </>
    )
}