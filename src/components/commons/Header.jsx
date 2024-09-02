import React from 'react';
import '../../styles/commons/header.css';

export default function Header() {
    return (
        <>
            <header className='header'>
                <h1 className='header__logo'>Dahyeon Park</h1>
                <nav className='nav'>
                    <ul className='nav__list'>
                        <li className='nav__item'>home</li>
                        <li className='nav__item'>skill</li>
                        <li className='nav__item'>project</li>
                        <li className='nav__item'>contact</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}