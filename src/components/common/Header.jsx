import React from 'react';
import '../../styles/common/header.css';

export default function Header() {
    return (
        <>
            <header className='header'>
                <h1 className='header__logo'>Dahyeon Park</h1>
                <nav className='nav'>
                    <ul className='nav__list'>
                        <li className='nav__item'>홈</li>
                        <li className='nav__item'>메뉴1</li>
                        <li className='nav__item'>메뉴2</li>
                        <li className='nav__item'>메뉴3</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}