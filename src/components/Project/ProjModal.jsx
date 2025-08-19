import { useEffect, useState } from 'react';
import { projDetailData } from '../../data/ProjDetailData';
import ProjLightbox from './ProjLightbox';

// item의 썸네일을 클릭하면 나오는 모달
export default function ProjModal({ projName, onClose }) {

    const [isLightboxOpen, setIsLightboxOpen] = useState(false);  // 라이트박스 표시 여부
    const [currentIndex, setCurrentIndex] = useState(0);  // 이미지 인덱스 (인자로 보내기 위함)
    const [lightboxImages, setLightboxImages] = useState([]);     // 이번 라이트박스에서 순회할 이미지 배열

    // 라이트박스 열기
    const openProjLightbox = (images, startIdx) => {
        setLightboxImages(images);
        setCurrentIndex(startIdx);
        setIsLightboxOpen(true);
    };

    // 라이트박스 닫기
    const closeProjLightbox = () => setIsLightboxOpen(false);

    // 좌우 이동 (순환)
    const goPrev = () => setCurrentIndex(i => (i - 1 + lightboxImages.length) % lightboxImages.length);
    const goNext = () => setCurrentIndex(i => (i + 1) % lightboxImages.length);

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
                <div className='proj__modal-body'>
                    <button className='proj__modal-close material-symbols-rounded' onClick={onClose}>close</button>
                    <h1 className='proj__modal-heading'>{proj.title}</h1>
                    <p className='proj__modal-period'>{proj.period}</p>
                    <div className="proj__modal-thumb-wrapper">
                        <img className='proj__modal-thumb' src={proj.mainImage} alt={proj.title} />
                    </div>
                    <div className='proj__modal-tags'>
                        {proj.tag.map((tag, i) => (
                            <span key={i} className='proj__modal-tag'>{tag}</span>
                        ))}
                    </div>
                    {proj.description.map((desc, i) => (
                        <div key={i} className="proj__modal-section">
                            <h2 className="proj__modal-subtitle">{desc.subTitle}</h2>

                            {desc.type === 'text' && <p className='proj__modal-content' dangerouslySetInnerHTML={{ __html: desc.content }} />}

                            {desc.type === 'link' && (
                                <a href={desc.content} target="_blank" rel="noopener noreferrer" className='proj__modal-link'>
                                    {desc.content}
                                </a>
                            )}

                            {desc.type === 'group' && (
                                <div className="proj__modal-group-wrapper">
                                    {desc.content.map((group, idx) => (
                                        <div key={idx} className="proj__modal-group">
                                            <h3 className="proj__modal-category">{group.category}</h3>
                                            <ul className='proj__modal-list'>
                                                {group.items.map((item, j) => (
                                                    <li key={j}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {desc.type === 'image' && (
                                <>
                                    <div className="proj__modal-image-wrapper">
                                        {desc.content.map((img, idx) => (
                                            <img
                                                key={idx}
                                                className='proj__modal-image'
                                                src={img.src}
                                                alt={img.alt}
                                                onClick={() => openProjLightbox(desc.content, idx)} />
                                        ))}
                                    </div>

                                    {isLightboxOpen && (
                                        <ProjLightbox images={lightboxImages}
                                            currentIndex={currentIndex}
                                            onPrev={goPrev}
                                            onNext={goNext}
                                            onClose={closeProjLightbox} />
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </article>
        </>
    )
}