import React from 'react';

/* experience 영역의 item */
export default function ExperienceItem({ src, alt, title, date, description }) {
    return (
        <article className='experience__item'>
            <img className='experience__item-icon' src={src} alt={alt} />
            <div className='experience__item-content'>
                <h3 className='experience__item-title'>{title}</h3>
                <p className='experience__item-date'>{date}</p>
                {description.map((des, index) => (
                    des === '' ?
                    <br key={index} /> :
                    <p key={index} className='experience__item-description'>{des}</p>
                ))}
            </div>
        </article>
    )
}