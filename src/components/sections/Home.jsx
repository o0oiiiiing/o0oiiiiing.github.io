import React, { useEffect, useState } from 'react';
import '../../styles/sections/home.css';

export default function Home() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <main className='section__home'>
                <div className='background background__gradient'
                    style={{
                        filter: `brightness(${Math.max(1 - scrollY / 700, 0.4)})` // 스크롤에 따라 밝기 조절
                    }}
                />
                <div className='background background__noise-effect' />
                <h1 className='title'
                    style={{
                        filter: `brightness(${Math.max(1 - scrollY / 700, 0.4)})` // 스크롤에 따라 밝기 조절
                    }}
                >
                    안녕하세요,<br />
                    프론트엔드 개발자 <strong className='title__large-text title__bounce-text'>"박다현"</strong> 입니다.
                </h1>
                <div className='scroll-prompt'>
                    <span className='scroll-prompt__text'>scroll down</span>
                    <span className='scroll-prompt__icon scroll-prompt__bounce-icon material-symbols-rounded'>
                        keyboard_double_arrow_down
                    </span>
                </div>
            </main>
        </>
    )
}