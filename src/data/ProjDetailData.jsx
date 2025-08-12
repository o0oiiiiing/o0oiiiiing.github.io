import { projImages } from '../components/Project/ProjImages';

export const projDetailData = [
    {
        title: '개인 포트폴리오',
        period: '2024.12 - 현재',
        mainImage: projImages.portfolio_thumb,
        tag: ['👩🏻 개인 프로젝트', '🖥 웹사이트', 'React', 'CI/CD', '반응형'],
        description: [
            {
                subTitle: '👩🏻‍💻 프로젝트 소개',
                type: 'text',
                content: `React를 기반으로 한 눈에 보기 쉬운 포트폴리오 사이트를 제작하였으며, 반응형 UI, 이메일 전송 기능, 모달 등 다양한 UI 요소를 직접 구현했습니다.
                앞으로도 프로젝트 추가 및 기능 개선을 통해 꾸준히 업데이트할 예정입니다.`
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
            },
            {
                subTitle: '🚀 이번 프로젝트를 통해 개선·성장한 부분',
                type: 'text',
                content: `• Git Commit Message Convention을 학습하고 적용하여, <strong>변경 이력 파악 속도</strong>를 높였습니다.
                    • 반복적으로 사용되는 UI 요소를 컴포넌트로 분리하여 <strong>재사용성</strong>과 <strong>유지보수성</strong>을 강화하였습니다.
                    • 의미론적(Semantic) HTML 태그를 사용하여 <strong>웹 접근성</strong>과 <strong>코드 가독성</strong>을 개선하였습니다.
                    • GitHub Actions를 활용하여 자동 배포 환경을 구축하고 시도하였습니다.
                `
            },
        ],
    },
    {
        title: 'pretzel',
        period: '2024.06 - 2024.07',
        mainImage: projImages.pretzel_thumb,
        tag: ['👨🏻‍👩🏻‍👧🏻‍👦🏻 팀 프로젝트', '🖥 웹사이트', 'Next.js'],
        description: [
            {
                subTitle: '👩🏻‍💻 프로젝트 소개',
                type: 'text',
                content: 'Next.js, Spring Boot, Python 기반의 AI 분석 기능을 갖춘 영화 제공 OTT 사이트입니다.'
            },
            {
                subTitle: '👥 팀 구성원',
                type: 'text',
                content: '5인\n• 프론트엔드 : 박다현, 최현민\n• 백엔드 : 정주형, 고예찬, 이기찬'
            },
            {
                subTitle: '📝 맡은 역할',
                type: 'text',
                content: '• 웹디자인 (figma)\n• 프론트엔드 영역 git 형상 관리\n• admin 페이지 전체 구현\n• user 페이지 일부 구현'
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
                        items: ['• React', '• Next.js', '• MobX', '• Axios', '• emotion', '• MUI']
                    },
                    {
                        category: 'DB',
                        items: ['• MariaDB', '• HeidiSQL']
                    },
                    {
                        category: '기타 도구',
                        items: ['• VSCode, postman']
                    }
                ]
            },
            {
                subTitle: '✨ 구현한 주요 기능',
                type: 'group',
                content: [
                    {
                        category: '대시보드 시각화',
                        items: [
                            '• MUI Line, Bar, Pie 차트를 활용하여 구독·월별 통계, 장르별 비율, 시청률 TOP 10 시각화'
                        ]
                    },
                    {
                        category: '통합 관리 시스템',
                        items: [
                            '• 회원, 콘텐츠, 문의, 신고, 공지, FAQ 등 전 영역 CRUD 및 페이징·검색 기능 구현'
                        ]
                    },
                    {
                        category: '동적 UI/UX',
                        items: [
                            '• 로그인 상태 및 권한에 따른 메뉴 표시와 스타일링 변경',
                            '• 상세 페이지에서 리뷰 작성·신고, 찜, 출연진 정보 표시 기능 구현'
                        ]
                    }
                ]
            },
            {
                subTitle: '🖥 주요 화면',
                type: 'image',
                content: [
                    {
                        src: projImages.pretzel_01,
                        alt: 'Pretzel 01'
                    },
                    {
                        src: projImages.pretzel_02,
                        alt: 'Pretzel 02'
                    },
                    {
                        src: projImages.pretzel_03,
                        alt: 'Pretzel 03'
                    },
                    {
                        src: projImages.pretzel_04,
                        alt: 'Pretzel 04'
                    },
                    {
                        src: projImages.pretzel_05,
                        alt: 'Pretzel 05'
                    }
                ]
            }
        ],
    },
    {
        title: '제주여행',
        period: '2024.04 - 2024.05',
        mainImage: projImages.jejuTravel_thumb,
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
        mainImage: projImages.forest_thumb,
        tag: ['👨🏻‍👩🏻‍👧🏻‍👦🏻 팀 프로젝트', '🖥 웹사이트', 'Java', 'JSP'],
        description: [
            {
                subTitle: '👩🏻‍💻 프로젝트 소개',
                type: 'text',
                content: '향수를 주제로 한 쇼핑몰 사이트입니다.'
            },
            {
                subTitle: '👥 팀 구성원',
                type: 'text',
                content: '4인\n• 팀장 : 정주형\n• 팀원 : 박다현, 김형주, 김철환'
            },
            {
                subTitle: '📝 맡은 역할',
                type: 'text',
                content: '• 웹디자인 (figma)\n• 메인, 상품, 검색 페이지의 프론트엔드 및 백엔드 기능 구현\n• header, footer 컴포넌트 구현'
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
                        items: ['• OracleDB', '• SQL Developer']
                    },
                    {
                        category: '기타 도구',
                        items: ['• Eclipse']
                    }
                ]
            },
            {
                subTitle: '✨ 구현한 주요 기능',
                type: 'group',
                content: [
                    {
                        category: '메인 페이지 배경 이미지 자동 전환',
                        items: ['• 일정 시간 간격으로 메인 페이지 배경 이미지가 자동으로 변경되도록 구현']
                    },
                    {
                        category: '스크롤 연동 가로 슬라이드',
                        items: ['• 세로 스크롤 도중 특정 섹션에서 상품 목록이 좌→우로 슬라이드되는 기능 구현']
                    },
                    {
                        category: '옵션 기반 상품 검색',
                        items: ['• 사용자가 선택한 옵션에 따라 상품 목록을 필터링하는 기능 구현']
                    }
                ]
            },
        ],
    }
];