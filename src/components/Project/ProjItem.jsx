import React from 'react';
import { useState } from 'react';
import ProjLinkIcon from './ProjLinkIcon';
import ProjModal from './ProjModal';

/* project 영역의 item */
export default function ProjItem({ src, alt, title, type, description, icon, className }) {

    const [isModalOpen, setIsModalOpen] = useState(false);      /* 모달 표시 여부 */
    const [currentProjName, setCurrentProjName] = useState(''); /* 프로젝트 이름 (인자로 보내기 위함) */

    // 모달 열기
    const openProjModal = (projName) => {
        setCurrentProjName(projName);
        setIsModalOpen(true);
    };

    // 모달 닫기
    const closeProjModal = () => {
        setIsModalOpen(false);
    };

    return (
        <article className='proj__item'>
            <img className={`proj__item-thumbnail ${className}`}
                src={src} alt={alt} onClick={() => openProjModal(alt)} />
            <h3 className='proj__item-title'>{title}</h3>
            <p className="proj__item-type">{type === '팀' ? '👨🏻‍👩🏻‍👧🏻‍👦🏻 팀 프로젝트' : '👩🏻 개인 프로젝트'}</p>
            <h4 className='proj__item-description'>{description}</h4>
            <div className='proj__item-grid'>
                {icon.map((icon, index) => (
                    <ProjLinkIcon key={index} href={icon.href} title={icon.title} src={icon.src} alt={icon.alt} />
                ))}
            </div>
            {/* isModalOpen이 true일 때만 JSX 실행 */}
            {isModalOpen && (
                <ProjModal projName={currentProjName} onClose={closeProjModal} />
            )}
        </article>
    )
}