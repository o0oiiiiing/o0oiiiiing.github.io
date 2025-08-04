import React from 'react';
import '../../styles/commons/footer.css';
import githubIcon from '../../assets/icon/github_w.webp';
import tistoryIcon from '../../assets/icon/tistory_w.webp';

export default function Footer() {

    return (
        <>
            <footer>
                <p className='footer__copyright'>© 2024 - 2025 Dahyeon Park. All rights reserved.</p>
                <div className="footer__sns">
                    <a href="https://github.com/o0oiiiiing" target="_blank" rel="noopener noreferrer" title="github">
                        <img className="footer__icon" src={githubIcon} alt="github" />
                    </a>
                    <a href="https://o0oiiiiing.tistory.com" target="_blank" rel="noopener noreferrer" title="tistory">
                        <img className="footer__icon" src={tistoryIcon} alt="tistory" />
                    </a>
                </div>
            </footer>
        </>
    )
}