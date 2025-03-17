import React, { useEffect } from 'react';

/* item의 썸네일을 클릭하면 나오는 모달 */
export default function ProjModal({ projName, onClose }) {

    return (
        <>
            <article className='proj__modal'>
                <div className='proj__modal-scrim' onClick={onClose}></div>
                <div className='proj__modal-content'>
                    <h1 className='proj__modal-heading'>{projName}</h1>
                </div>
            </article>
        </>
    )
}