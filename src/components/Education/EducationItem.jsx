import React from 'react';

/* education 영역의 item */
export default function EducationItem({ src, alt, title, date, description }) {
    return (
        <article className='education__item'>
            <img className='education__item-icon' src={src} alt={alt} />
            <h3 className='education__item-title'>{title}</h3>
            <p className='education__item-date'>{date}</p>
            <p className='education__item-description'>{description}</p>
        </article>
    )
}