import ExpImages from '../components/Experience/ExpImages';

export const expItemData = [
    {
        src: ExpImages.osc,
        alt: '한걸음컴퍼니',
        title: '한걸음컴퍼니',
        date: '2024.11 - 현재',
        description:
            [
                '웹R&D부서 개발팀 사원', '', '',
                {
                    type: 'list',
                    items: [
                        '랜딩페이지 기능 추가 및 수정',
                        {
                            type: 'list',
                            items: [
                                '전환 스크립트 추가, API 연동 등',
                            ],
                        }, '',
                        '허용 IP 관리 메뉴 개발',
                        {
                            type: 'list',
                            items: [
                                '기존 관리자 페이지에 IP 추가가 가능한 메뉴 개발',
                            ],
                        }, '',
                    ],
                },
            ]
    },
    {
        src: ExpImages.ict,
        alt: '한국ICT인재개발원',
        title: '한국ICT인재개발원',
        date: '2023.12 - 2024.07 (7개월)',
        description:
            [
                'Java 개발자 양성 과정 수료', '', '',
                '1. 기초 프로그래밍',
                '2. SQL',
                '4. 백엔드 개발',
                '5. 프론트엔드 개발',
                '6. Open API 활용 개발 프로젝트',
                '7. AI 융합 웹 애플리케이션 제작 프로젝트'
            ]
    },
    {
        src: ExpImages.bcu,
        alt: '부천대학교',
        title: '부천대학교',
        date: '2020.03 - 2022.02 (2년)',
        description: ['정보통신과 졸업']
    },
];