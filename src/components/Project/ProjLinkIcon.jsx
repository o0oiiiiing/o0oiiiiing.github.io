import { Tooltip } from 'react-tooltip';

/* project 영역의 링크 이동 아이콘 */
export default function ProjLinkIcon({ href, title, src, alt, tooltipId }) {
    return (
        <>
            <a href={href} target="_blank" rel="noopener noreferrer" className='proj__item-icon-container' data-tooltip-id={tooltipId}
                data-tooltip-content={title}>
                <img className="proj__item-icon" src={src} alt={alt} />
            </a>
            <Tooltip id={tooltipId} place="bottom" className='test' />
        </>
    )
}