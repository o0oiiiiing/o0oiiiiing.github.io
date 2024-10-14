import React from 'react';

export default function SkillFigure({ src, alt, caption }) {
    return (
        <figure className='skill__item-figure'>
            <img className='skill__item-icon' src={src} alt={alt} />
            <figcaption className='skill__item-caption'>{caption}</figcaption>
        </figure>
    )
};