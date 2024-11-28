import React from 'react';

/* item의 썸네일을 클릭하면 나오는 모달 */
export default function ProjModal({ projName, onClose }) {
    return (
        <> 
            <article className='proj__modal'>
                <h1>{projName}</h1>
            </article>
        </>
    )
}