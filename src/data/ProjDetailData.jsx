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
                content: 'React를 기반으로 한 눈에 보기 쉬운 포트폴리오 사이트를 제작하였으며, 반응형 UI, 이메일 전송 기능, 모달 등 다양한 UI 요소를 직접 구현했습니다.\n앞으로도 프로젝트 추가 및 기능 개선을 통해 꾸준히 업데이트할 예정입니다.'
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
                        items: ['VSCode', '• Prettier', '• ESLint']
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
        tag: ['👨🏻‍👩🏻‍👧🏻‍👦🏻 팀 프로젝트', '🖥 웹사이트', 'Java', 'JSP'],
        description: [
            {
                subTitle: '👩🏻‍💻 프로젝트 소개',
                type: 'text',
                content: '제주도를 주제로 한 여행 정보와 커뮤니티를 OPEN API를 활용하여 제공하는 사이트입니다.'
            },
            {
                subTitle: '👥 팀 구성원',
                type: 'text',
                content: '5인\n• 팀장 : 원유영\n• 팀원 : 박다현, 유경화, 이성훈, 최현민'
            },
            {
                subTitle: '📝 맡은 역할',
                type: 'text',
                content: '• 웹디자인 (figma)\n• 메인페이지 및 상세페이지 프론트엔드, 백엔드 기능 구현\n• header, footer, 탑버튼과 같은 공통 컴포넌트 구현'
            },
            {
                subTitle: '⚙ 개발 환경',
                type: 'group',
                content: [
                    {
                        category: '사용한 언어',
                        items: ['• Java', '• HTML5', '• CSS3', '• JavaScript']
                    },
                    {
                        category: '프레임워크 및 라이브러리',
                        items: ['• Spring', '• MyBatis', '• jQuery']
                    },
                    {
                        category: 'DB',
                        items: ['• MariaDB', '• HeidiSQL']
                    },
                    {
                        category: '기타 도구',
                        items: ['• STS']
                    }
                ]
            },
            {
                subTitle: '✨ 구현한 주요 기능',
                type: 'group',
                content: [
                    {
                        category: '배너 이미지 자동 슬라이드',
                        items: ['• 배너 이미지를 일정 시간 간격으로 자동 전환하는 슬라이드 기능 구현']
                    },
                    {
                        category: 'Summernote 활용',
                        items: ['• Summernote를 활용하여 사용자가 손쉽게 Q&A를 작성할 수 있는 입력 창 구현']
                    },
                    {
                        category: '리뷰 작성 기능',
                        items: ['• 리뷰 작성 시 별점 선택과 이미지 첨부 및 상세 내용을 입력할 수 있는 기능 구현']
                    },
                ]
            },
        ],
    },
    {
        title: 'forest',
        period: '2024.03 - 2024.04',
        mainImage: projImages.team_project_01,
        tag: ['👨🏻‍👩🏻‍👧🏻‍👦🏻 팀 프로젝트', '🖥 웹사이트', 'Java', 'JSP'],
        description: [
            {
                subTitle: '👩🏻‍💻 프로젝트 소개',
                type: 'text',
                content: '향수를 주제로 한 쇼핑몰 사이트입니다.'
            }
        ],
    }
];