import React from 'react';
import '../../styles/sections/home.css';

export default function Home() {
    return (
        <>
            <main className='section__home'>
                <div className='background background__gradient' />
                <div className='background background__noise-effect' />
                <h1 className='title'>
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