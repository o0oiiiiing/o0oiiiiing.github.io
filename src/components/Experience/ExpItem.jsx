import React from 'react';

/* experience 영역의 item */
export default function ExpItem({ src, alt, title, date, description }) {

    // 중첩된 리스트를 처리하는 함수
    function renderDescList(description) {
        return (
            <>
                {description.map((desc, index) => {
                    if (typeof desc === 'string') {
                        if (desc === '') {
                            return <br key={index} />; // 빈 문자열일 경우 <br />
                        }
                        return <li key={index} className='exp__item-description'>{desc}</li>; // 일반 문자열일 경우 <li>
                    } else if (desc.type === 'list' && Array.isArray(desc.items)) {
                        return (
                            <ul key={index}>
                                {renderDescList(desc.items)} {/* 재귀적으로 처리 */}
                            </ul>
                        );
                    }
                    return null; // 예상치 못한 데이터는 렌더링하지 않음
                })}
            </>
        );
    }

    return (
        <article className='exp__item'>
            <img className='exp__item-icon' src={src} alt={alt} />
            <div className='exp__item-content'>
                <h3 className='exp__item-title'>{title}</h3>
                <p className='exp__item-date'>{date}</p>
                <ul className='exp__item-description-list'>
                    {renderDescList(description)}
                </ul>
            </div>
        </article>
    )
}