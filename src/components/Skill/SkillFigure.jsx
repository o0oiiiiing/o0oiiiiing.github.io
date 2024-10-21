import React from 'react';

/* skill 영역 item의 이미지와 이미지 설명 */
export default function SkillFigure({ src, alt, caption }) {
    return (
        <figure className='skill__item-figure'>
            <img className='skill__item-icon' src={src} alt={alt} />
            <figcaption className='skill__item-caption'>{caption}</figcaption>
        </figure>
    )
};