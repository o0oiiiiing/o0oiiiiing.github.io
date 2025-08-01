import React, { useEffect, useState } from 'react';
import '../../styles/commons/header.css';

export default function Header({ scrollFunctions }) {
    // 스크롤 감지 상태
    const [isScrolled, setIsScrolled] = useState(false);

    // 스크롤 감지 함수
    const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsScrolled(scrollY > 0); // 스크롤 위치에 따라 상태 업데이트
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Home으로 스크롤하는 함수
    const scrollToHome = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const [isSubNavOpen, setIsSubNavOpen] = useState(false);

    const toggleSubNav = () => {
        setIsSubNavOpen(prev => !prev);
    };

    return (
        <>
            <header className={`header ${isScrolled || isSubNavOpen ? 'glassmorphism' : ''}`}>
                <div className='header__container'>
                    <h1 className='header__logo'>Dahyeon Park</h1>
                    <nav className='nav'>
                        <ul className='nav__list'>
                            <li className='nav__item' onClick={scrollToHome}>home</li>
                            <li className='nav__item' onClick={scrollFunctions.scrollToSkill}>skill</li>
                            <li className='nav__item' onClick={scrollFunctions.scrollToProject}>project</li>
                            <li className='nav__item' onClick={scrollFunctions.scrollToExperience}>experience</li>
                            <li className='nav__item' onClick={scrollFunctions.scrollToContact}>contact</li>
                        </ul>
                    </nav>

                    {/* 서브 네비게이션 */}
                    {/* 모바일 또는 작은 화면에서만 보이도록 설정 */}
                    <div className='sub-nav__icon-container'>
                        <span className='sub-nav__icon material-symbols-rounded' onClick={toggleSubNav}>
                            {`${isSubNavOpen ? 'close' : 'menu'}`}
                        </span>
                    </div>
                </div>

                <nav className={`sub-nav ${isSubNavOpen ? 'open' : 'close'}`}>
                    <ul className='sub-nav__list'>
                        <li className='sub-nav__item' onClick={scrollToHome}>home</li>
                        <li className='sub-nav__item' onClick={scrollFunctions.scrollToSkill}>skill</li>
                        <li className='sub-nav__item' onClick={scrollFunctions.scrollToProject}>project</li>
                        <li className='sub-nav__item' onClick={scrollFunctions.scrollToExperience}>experience</li>
                        <li className='sub-nav__item' onClick={scrollFunctions.scrollToContact}>contact</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}