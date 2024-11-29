import React from 'react';

/* project 영역의 링크 이동 아이콘 */
export default function ProjLinkIcon({ href, title, src, alt }) {
    return (
        <>
            <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
                <img className="proj__item-icon" src={src} alt={alt} />
            </a>
        </>
    )
}