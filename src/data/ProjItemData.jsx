import { projImages } from '../components/Project/ProjImages';

export const projItemData = [
    {
        src: projImages.personal_project_01,
        alt: '개인 포트폴리오',
        title: '개인 포트폴리오',
        type: '개인',
        description: '포트폴리오를 한 눈에 보기 쉽게 사이트로 제작하였습니다.',
        icon: [
            {
                href: 'https://github.com/o0oiiiiing/o0oiiiiing.github.io.git',
                title: '소스코드',
                src: projImages.github,
                alt: 'github'
            },
        ],
        option: ''
    },
    {
        src: projImages.team_project_03,
        alt: 'pretzel',
        title: 'pretzel',
        type: '팀',
        description: '영화 OTT 서비스를 제공하는 사이트입니다.',
        icon: [
            {
                href: 'https://www.figma.com/design/12h0iVmQPgLmmot9PuNr4B/%EC%9B%B9-%EB%94%94%EC%9E%90%EC%9D%B8?node-id=0-1&t=DNbm5H6Nci4PmtrT-1',
                title: '웹 디자인',
                src: projImages.figma,
                alt: 'figma'
            },
            {
                href: 'https://github.com/ICT-pretzel/Pretzel_Next_admin',
                title: '소스코드 (admin)',
                src: projImages.github,
                alt: 'github'
            },
            {
                href: 'https://github.com/ICT-pretzel/Pretzel_Next_user',
                title: '소스코드 (user)',
                src: projImages.github,
                alt: 'github'
            },
        ],
        class: ''
    },
    {
        src: projImages.team_project_02,
        alt: '제주여행',
        title: '제주여행',
        type: '팀',
        description: '제주도의 여행 정보를 제공하는 사이트입니다.',
        icon: [
            {
                href: 'https://www.figma.com/design/12h0iVmQPgLmmot9PuNr4B/%EC%9B%B9-%EB%94%94%EC%9E%90%EC%9D%B8?node-id=0-1&t=DNbm5H6Nci4PmtrT-1',
                title: '웹 디자인',
                src: projImages.figma,
                alt: 'figma'
            },
            {
                href: 'https://github.com/o0oiiiiing/ICT_project02',
                title: '소스코드',
                src: projImages.github,
                alt: 'github'
            },
        ],
        class: 'proj__item-thumbnail--light'
    },
    {
        src: projImages.team_project_01,
        alt: 'forest',
        title: 'forest',
        type: '팀',
        description: '향수를 주제로 한 쇼핑몰 사이트입니다.',
        icon: [
            {
                href: 'https://www.figma.com/design/12h0iVmQPgLmmot9PuNr4B/%EC%9B%B9-%EB%94%94%EC%9E%90%EC%9D%B8?node-id=0-1&t=DNbm5H6Nci4PmtrT-1',
                title: '웹 디자인',
                src: projImages.figma,
                alt: 'figma'
            },
            {
                href: 'https://github.com/o0oiiiiing/ICT_project01',
                title: '소스코드',
                src: projImages.github,
                alt: 'github'
            },
        ],
        class: ''
    },
];