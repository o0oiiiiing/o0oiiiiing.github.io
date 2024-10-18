import React from 'react';
import '../../styles/sections/project.css';
import team_project_01 from '../../assets/team_project_01.png'
import team_project_02 from '../../assets/team_project_02.png'
import team_project_03 from '../../assets/team_project_03.png'
import personal_project_01 from '../../assets/personal_project_01.png'

export default function Project({ projectRef }) {

    return (
        <>
            <section className='project' ref={projectRef}>
                <h2 className='project__heading'>Project</h2>
                <div className='project__grid'>
                    <article className='project__item'>
                        <img className='project__item-thumbnail' src={personal_project_01} alt="프로젝트 이미지" />
                        <h3 className='project__item-title'>진행중 - 개인 포트폴리오</h3>
                        <a href='https://github.com/o0oiiiiing/o0oiiiiing.github.io.git' target='_blank' className='link'>소스코드 (github)</a>
                        <h4 className='project__item-description'>웹 디자인 진행 중</h4>
                        <h4 className='project__item-description'>포트폴리오를 한 눈에 보기 쉽게 사이트로 제작하였습니다.</h4>
                    </article>
                    <article className='project__item'>
                        <img className='project__item-thumbnail' src={team_project_03} alt="프로젝트 이미지" />
                        <h3 className='project__item-title'>pretzel</h3>
                        <a href='https://www.figma.com/design/12h0iVmQPgLmmot9PuNr4B/%EC%9B%B9-%EB%94%94%EC%9E%90%EC%9D%B8?node-id=0-1&t=DNbm5H6Nci4PmtrT-1' target='_blank' className='link'>웹 디자인 (figma)</a>
                        <br />
                        <a href='https://github.com/ICT-pretzel/Pretzel_Next_admin' target='_blank' className='link'>소스코드 - admin (github)</a>
                        <br />
                        <a href='https://github.com/ICT-pretzel/Pretzel_Next_user' target='_blank' className='link'>소스코드 - user (github)</a>
                        <h4 className='project__item-description'>(team) 영화 OTT 서비스를 제공하는 사이트입니다.</h4>
                    </article>
                    <article className='project__item'>
                        <img className='project__item-thumbnail project__item-thumbnail--light' src={team_project_02} alt="프로젝트 이미지" />
                        <h3 className='project__item-title'>제주여행</h3>
                        <a href='https://www.figma.com/design/12h0iVmQPgLmmot9PuNr4B/%EC%9B%B9-%EB%94%94%EC%9E%90%EC%9D%B8?node-id=0-1&t=DNbm5H6Nci4PmtrT-1' target='_blank' className='link'>웹 디자인 (figma)</a>
                        <br />
                        <a href='https://github.com/o0oiiiiing/ICT_project02' target='_blank' className='link'>소스코드 (github)</a>
                        <h4 className='project__item-description'>(team) 제주도의 여행 정보를 제공하는 사이트입니다.</h4>
                    </article>
                    <article className='project__item'>
                        <img className='project__item-thumbnail' src={team_project_01} alt="프로젝트 이미지" />
                        <h3 className='project__item-title'>forest</h3>
                        <a href='https://www.figma.com/design/12h0iVmQPgLmmot9PuNr4B/%EC%9B%B9-%EB%94%94%EC%9E%90%EC%9D%B8?node-id=0-1&t=DNbm5H6Nci4PmtrT-1' target='_blank' className='link'>웹 디자인 (figma)</a>
                        <br />
                        <a href='https://github.com/o0oiiiiing/ICT_project01' target='_blank' className='link'>소스코드 (github)</a>
                        <h4 className='project__item-description'>(team) 향수를 주제로 한 쇼핑몰 사이트입니다.</h4>
                    </article>
                </div>
            </section>
        </>
    )
}