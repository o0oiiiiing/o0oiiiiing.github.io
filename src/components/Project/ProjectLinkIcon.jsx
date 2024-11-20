export default function ProjectLinkIcon(link, title, src, alt) {
    return (
        <>
            <a href={link} target="_blank" rel="noopener noreferrer" title={title}>
                <img src={src} alt={alt} />
            </a>
        </>
    )
}