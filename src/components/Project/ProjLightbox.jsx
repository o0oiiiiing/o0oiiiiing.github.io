import { createPortal } from 'react-dom';

export default function ProjLightbox({ images, currentIndex, onPrev, onNext, onClose }) {
    const img = images[currentIndex];
    if (!img) return null; // 이미지가 없으면 아무것도 렌더링하지 않음

    return createPortal(
        <>
            <div className="proj__lightbox">
                <div className="proj__lightbox-content">
                    <button type="button" className="proj__lightbox-close material-symbols-rounded" onClick={onClose}>Close</button>
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

                    {/* 마지막이 아닐 때만 오른쪽 버튼 */}
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