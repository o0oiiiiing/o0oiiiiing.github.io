import { createPortal } from 'react-dom';

// 프로젝트 모달 내의 이미지 라이트박스
export default function ProjLightbox({ images, currentIndex, onPrev, onNext, onClose }) {
    
    const img = images[currentIndex];
    if (!img) return null; // 이미지가 없으면 아무것도 렌더링하지 않음

    return createPortal(
        <>
            <div className="proj__lightbox">
                <div className="proj__lightbox-content">

                    <button type="button" className="proj__lightbox-close material-symbols-rounded" onClick={onClose}>Close</button>

                    {/* 처음이 아닐 때만 이전 버튼 활성화 */}
                    {currentIndex > 0 && (
                        <button
                            type="button"
                            className="proj__lightbox-prev material-symbols-rounded"
                            onClick={onPrev}
                            aria-label="이전 이미지"
                        >
                            chevron_left
                        </button>
                    )}

                    <img className="proj__lightbox-img" src={img.src} alt={img.alt} />

                    {/* 마지막이 아닐 때만 다음 버튼 활성화 */}
                    {currentIndex < images.length - 1 && (
                        <button
                            type="button"
                            className="proj__lightbox-next material-symbols-rounded"
                            onClick={onNext}
                            aria-label="다음 이미지"
                        >
                            chevron_right
                        </button>
                    )}
                </div>
            </div>
        </>,
        document.body
    );
}