import React, { useRef } from 'react';
import '../../styles/sections/contact.css';
import emailjs from "@emailjs/browser";

export default function Contact({ contactRef }) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_m2hzsfl', 'template_gps714f', form.current, {
                publicKey: '6QJST-4J1Q4DL2lqb',
            })
            .then(
                () => {
                    alert('메일이 성공적으로 전송되었습니다!');
                    console.log('SUCCESS!');
                    form.current.reset() // form 초기화
                },
                (error) => {
                    alert('메일 전송에 실패했습니다. 다시 시도해주세요.');
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <section className='contact' ref={contactRef}>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='con__container'>
                        <div className='con__info'>
                            <h2 className='con__heading'>Contact</h2>
                            <p className='con__description'>피드백 및 문의사항이 있으시면 아래 양식을 작성해주세요 :)</p>
                        </div>
                        <div>
                            <label htmlFor="name" className='con__label'>성함</label>
                            <input type='text' id="name" name="name" className='con__input' placeholder='성함을 입력해 주세요.' />
                        </div>
                        <div>
                            <label htmlFor="email" className='con__label'>이메일</label>
                            <input type='email' id="email" name="email" className='con__input' placeholder='회신받을 이메일을 입력해 주세요.' />
                        </div>
                        <div>
                            <label htmlFor="message" className='con__label'>내용</label>
                            <textarea id="message" name="message" className='con__textarea' placeholder='내용을 입력해 주세요.'></textarea>
                        </div>
                        <button className='con__submit-btn'>전송</button>
                    </div>
                </form>
            </section>
        </>
    )
}