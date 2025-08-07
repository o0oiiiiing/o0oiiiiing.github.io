import { useEffect } from 'react';
import { projDetailData } from '../../data/ProjDetailData';

/* item의 썸네일을 클릭하면 나오는 모달 */
export default function ProjModal({ projName, onClose }) {

    const proj = projDetailData.find(item => item.title === projName);

    useEffect(() => {
        // 모달 열릴 때 body 스크롤 막기
        document.body.style.overflow = 'hidden';

        return () => {
            // 모달 닫힐 때 복구
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <>
            <article className='proj__modal'>
                <div className='proj__modal-scrim' onClick={onClose}></div>
                <div className='proj__modal-content'>
                    <span className='proj__modal-close material-symbols-rounded' onClick={onClose}>close</span>
                    <h1 className='proj__modal-heading'>{proj.title}</h1>
                    <img className='proj__modal-image' src={proj.mainImage} alt={proj.title} />
                </div>
            </article>
        </>
    )
}