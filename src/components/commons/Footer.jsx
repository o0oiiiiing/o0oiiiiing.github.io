import React from 'react';
import '../../styles/commons/footer.css';
import githubIcon from '../../assets/icon/github_w.png';

export default function Footer() {

    return (
        <>
            <footer>
                <p className='footer__copyright'>© 2024 - 2025 Dahyeon Park. All rights reserved.</p>
                <a href="https://github.com/o0oiiiiing" target="_blank" rel="noopener noreferrer" title="github">
                    <img className="footer__icon" src={githubIcon} alt="github" />
                </a>
            </footer>
        </>
    )
}