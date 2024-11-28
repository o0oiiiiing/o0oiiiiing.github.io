import React from 'react';
import projImages from './ProjImages';
import ProjLinkIcon from './ProjLinkIcon';

/* project 영역의 item */
export default function ProjItem({ src, alt, title, description, icon }) {
    return (
        <article className='proj__item'>
            {/* src가 projectImages.team_project_02라면 className에 project__item-thumbnail--light 추가 */}
            <img className={`proj__item-thumbnail ${src === projImages.team_project_02 ? 'proj__item-thumbnail--light' : ''}`}
                src={src} alt={alt} />
            <h3 className='proj__item-title'>{title}</h3>
            <h4 className='proj__item-description'>{description}</h4>
            <div className='proj__item-flex'>
                {icon.map((icon, index) => (
                    <ProjLinkIcon key={index} href={icon.href} title={icon.title} src={icon.src} alt={icon.alt} />
                ))}
            </div>
        </article>
    )
}