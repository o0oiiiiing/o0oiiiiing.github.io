import React from 'react';
import '../../styles/sections/project.css';
import { projItemData } from '../../data/ProjItemData';
import ProjItem from './ProjItem';

export default function Project({ projectRef }) {

    return (
        <>
            <section className='project' ref={projectRef}>
                <h2 className='heading'>Project</h2>
                <div className='proj__grid'>
                    {projItemData.map((item, index) => (
                        <ProjItem key={index} mainIndex={index} src={item.src} alt={item.alt} title={item.title} type={item.type}
                            description={item.description} icon={item.icon} className={item.class} />
                    ))}
                </div>
            </section>
        </>
    )
}