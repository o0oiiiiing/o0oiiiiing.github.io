import React from 'react';
import { useState } from 'react';
import projImages from './ProjImages';
import ProjLinkIcon from './ProjLinkIcon';
import ProjModal from './ProjModal';

/* project 영역의 item */
export default function ProjItem({ src, alt, title, description, icon }) {
    const [isModalOpen, setIsModalOpen] = useState(false);      /* 모달 표시 여부 */
    const [currentProjName, setCurrentProjName] = useState(''); /* 프로젝트 이름 (인자로 보내기 위함) */

    const openProjModal = (projName) => {
        setCurrentProjName(projName);
        setIsModalOpen(true); // 모달 열기
    };

    const closeProjModal = () => {
        setIsModalOpen(false); // 모달 닫기
    };

    return (
        <article className='proj__item'>
            {/* src가 projectImages.team_project_02라면 className에 project__item-thumbnail--light 추가 */}
            <img className={`proj__item-thumbnail ${src === projImages.team_project_02 ? 'proj__item-thumbnail--light' : ''}`}
                src={src} alt={alt} onClick={() => openProjModal(alt)} />
            <h3 className='proj__item-title'>{title}</h3>
            <h4 className='proj__item-description'>{description}</h4>
            <div className='proj__item-flex'>
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