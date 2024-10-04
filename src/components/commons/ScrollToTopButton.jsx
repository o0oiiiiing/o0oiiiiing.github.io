import React from 'react';
import '../../styles/commons/scrollToTopButton.css';

export default function ScrollToTopButton() {

    // top으로 스크롤 이동하는 함수
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <button className="scrollToTopButton" onClick={scrollToTop}>
                <span className="scrollToTopButton__icon material-symbols-rounded">
                    expand_less
                </span>
            </button>
        </>
    )
}