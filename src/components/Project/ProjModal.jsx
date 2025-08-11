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
                <div className='proj__modal-body'>
                    <span className='proj__modal-close material-symbols-rounded' onClick={onClose}>close</span>
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

                            {desc.type === 'text' && <p className='proj__modal-content'>{desc.content}</p>}

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
                                <div className="proj__modal-image-wrapper">
                                    {desc.content.map((img, idx) => (
                                        <img key={idx} className='proj__modal-image' src={img.src} alt={img.alt} />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                </div>
            </article>
        </>
    )
}