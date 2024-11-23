import React from 'react';
import projectImages from './ProjectImages';
import ProjectLinkIcon from './ProjectLinkIcon';

/* project 영역의 item */
export default function ProjectItem({ src, alt, title, description, icon }) {
    return (
        <article className='project__item'>
            {/* src가 projectImages.team_project_02라면 className에 project__item-thumbnail--light 추가 */}
            <img className={`project__item-thumbnail ${src === projectImages.team_project_02 ? 'project__item-thumbnail--light' : ''}`}
                src={src} alt={alt} />
            <h3 className='project__item-title'>{title}</h3>
            <h4 className='project__item-description'>{description}</h4>
            <div className='project__item-flex'>
                {icon.map((icon, index) => (
                    <ProjectLinkIcon key={index} href={icon.href} title={icon.title} src={icon.src} alt={icon.alt} />
                ))}
            </div>
        </article>
    )
}