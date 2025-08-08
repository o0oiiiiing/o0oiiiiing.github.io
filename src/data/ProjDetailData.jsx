import { projImages } from '../components/Project/ProjImages';

export const projDetailData = [
    {
        title: '개인 포트폴리오',
        period: '2024.12 - 현재',
        mainImage: projImages.personal_project_01,
        tag: ['👩🏻 개인 프로젝트', '🖥 웹사이트', 'React', 'CI/CD', '반응형'],
        description: [
            {
                subTitle: '👩🏻‍💻 프로젝트 소개',
                type: 'text',
                content: 'React를 기반으로 한 눈에 보기 쉬운 포트폴리오 사이트를 제작하였으며, 반응형 UI, 이메일 전송 기능, 모달 등 다양한 UI 요소를 직접 구현했습니다.\n 앞으로도 프로젝트 추가 및 기능 개선을 통해 꾸준히 업데이트할 예정입니다.'
            },
            {
                subTitle: '🔗 사이트 링크',
                type: 'link',
                content: 'https://o0oiiiiing.github.io/'
            },
            {
                subTitle: '⚙ 개발 환경',
                type: 'group',
                content: [
                    {
                        category: '사용한 언어',
                        items: ['• HTML5', '• CSS3', '• JavaScript']
                    },
                    {
                        category: '프레임워크 및 라이브러리',
                        items: [
                            '• React',
                            '• EmailJS : 이메일 전송 기능 구현',
                            '• react-tooltip : 마우스 오버 시 툴팁 생성'
                        ]
                    },
                    {
                        category: '상태 관리',
                        items: ['• React 내장 hook (useState, useEffect)']
                    },
                    {
                        category: '배포 및 서버',
                        items: [
                            '• 호스팅 플랫폼: Github Pages',
                            '• 배포 도구: gh-pages',
                            '• CI/CD: Github Actions로 main 브랜치 푸시 시 자동 빌드 및 배포'
                        ]
                    },
                    {
                        category: '기타 도구',
                        items: ['• Prettier', '• ESLint']
                    }
                ]
            }
        ],
    },
    {
        title: 'pretzel',
        period: '2024.06 - 2024.07',
        mainImage: projImages.team_project_03,
        tag: ['👨🏻‍👩🏻‍👧🏻‍👦🏻 팀 프로젝트', '🖥 웹사이트', 'Next.js'],
        description: [
            {
                subTitle: '👩🏻‍💻 프로젝트 소개',
                type: 'text',
                content: '영화 OTT 서비스를 제공하는 사이트입니다.'
            }
        ],
    },
    {
        title: '제주여행',
        period: '2024.04 - 2024.05',
        mainImage: projImages.team_project_02,
        tag: ['👨🏻‍👩🏻‍👧🏻‍👦🏻 팀 프로젝트', '🖥 웹사이트', 'Java', 'JSP', 'JSTL'],
        description: [
            {
                subTitle: '👩🏻‍💻 프로젝트 소개',
                type: 'text',
                content: '제주도의 여행 정보를 제공하는 사이트입니다.'
            }
        ],
    },
    {
        title: 'forest',
        period: '2024.03 - 2024.04',
        mainImage: projImages.team_project_01,
        tag: ['👨🏻‍👩🏻‍👧🏻‍👦🏻 팀 프로젝트', '🖥 웹사이트', 'Java', 'JSP', 'JSTL'],
        description: [
            {
                subTitle: '👩🏻‍💻 프로젝트 소개',
                type: 'text',
                content: '향수를 주제로 한 쇼핑몰 사이트입니다.'
            }
        ],
    }
];