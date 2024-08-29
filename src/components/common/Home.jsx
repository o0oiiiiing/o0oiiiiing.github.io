import React from 'react';
import '../../styles/common/home.css';

export default function Home() {
    return (
        <>
            <main>
                <div className='background background__gradient' />
                <div className='background background__noise-effect' />
                <h1 className='title'>
                    안녕하세요,<br />
                    프론트엔드 개발자 <strong className='title__large-text bounce-text'>"박다현"</strong> 입니다.
                </h1>
            </main>
        </>
    )
}