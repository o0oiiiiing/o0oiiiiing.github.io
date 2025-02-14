import React from 'react';
import '../../styles/sections/contact.css';

export default function Contact({ contactRef }) {

    return (
        <>
            <section className='contact' ref={contactRef}>
                <h2 className='heading'>Contact</h2>
                <div>
                    <input type='text' placeholder='이름' />
                    <input type='email' placeholder='이메일' /> @&nbsp;
                    <input type='email' placeholder='이메일 도메인' />
                    <select>
                        <option value='naver.com'>직접 입력</option>
                        <option value='naver.com'>naver.com</option>
                        <option value='gmail.com'>gmail.com</option>
                        <option value='naver.com'>hanmail.net</option>
                    </select>
                    <input type='text' placeholder='내용' />
                </div>
            </section>
        </>
    )
}