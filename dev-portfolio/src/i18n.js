import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: {
                tagline_intro: "Hi, I'm Ewan. I'm a",
                tagline_main: "Graphics Programmer",
                resume_name: "CV / Resume",
                projects_section_header: "Projects",
                experience_section_header: "Experience",
                about_me_section_header: "About Me",
                skills_section_header: "Skills",
                contact_section_header: "Contact",
                gallery_section_header: "Gallery",
                skill_programming_languages_header: "Programming Languages",
                skill_platforms_header: "Platforms",
                skill_graphics_apis_header: "Graphics APIs",
                skill_tools_header: "Development Tools",
                about_me: `
# About Me

Hi! 👋

I'm Ewan, a UK-based Software Engineer specialising in Real-time Rendering and Computer Graphics. 

I'm currently a __Final Year__ student, studying an __Integrated Master's__ in __Computer Science for Games__ at __Sheffield Hallam University__, where I've learned __Advanced C++ Programming__, __Game Engine Development__, and even had a chance to work directly with __PlayStation® 5 Development Kits__ to produce my own software. I'm currently focused on my __Final Year Dissertation__ project on (__Real-time Global Illumination__ / __GPU-Accelerated Mesh Voxelisation methods__ / __Mesh Shading in Vulkan__ / __Something Cool!__).

I have a real passion for __Games__, and the amazing technology that drives them. I've been a student of Game Development __since 2018__, and have worked with many __industry-standard tools__ as a result. 

I'm also an avid Linguist - Proficient in __Japanese__(JLPT N3), and Conversational in __Mandarin Chinese__ and __German__. 

I'm currently seeking __Graduate Positions__ in Software Engineering __worldwide__, and would love to bring my passion, knowledge, and expertise to the field as a professional! 

(And if you're curious, My favorite titles are: NieR: Automata, Monster Hunter World and Final Fantasy 14!)
                `,
                experience: {
                    university: {
                        companyName: "Sheffield Hallam University",
                        startDate: "September 2020",
                        endDate: "May 2026",
                        description: 
`
Studied an Integrated Master's in Computer Science for Games at Sheffield Hallam University, in the UK. 

During my degree I specialised in Computer Graphics; studying 
    Essential __Linear Algebra__ and __Calculus__ for rendering, 
    __Cross-platform__ Game Engine Development with __PlayStation® 5__ Development Kits, and
    __Concurrent High-Performance__ Software Development with __C++__ and __Vulkan__.
    
Here are some Notable projects from my degree:

    ◈ Level 7 Dissertation: GPGPU Mesh Voxellisation methods 
    ◈ Level 7 Group Project: ???    
    ◈ Level 7 Assignment (PPG): Vortex GPU Particle Simulation
    ◈ Level 7 Assignment (GPT): Real-Time Volumetric Rendering
    ◈ Level 6 Dissertation: Real-Time Global Illumination with Irradiance Probe cascades
    ◈ Level 6 Group Project: Tactics (PlayStation 5) (Engine Programmer)

`
                    },
                    college: {
                        companyName: "Confetti Institute of Creative Technologies",
                        startDate: "September 2018",
                        endDate: "June 2020",
                        description: 
`
Studied a BTEC Level 3 National Diploma in Creative Digital Media, at Confetti Institute of Creative Technologies (NTU), focusing on Games Technology. 

At Confetti, I learned the foundations of Game Development - With a primary focus on In-Engine programming, through __C++ in Unreal Engine 4__ and __C# in Unity Engine__. Additionally, we explored the entire Production Pipeline; Using __Game Design Principles__ to define sequences, __3D Modelling in Autodesk Maya__ to create environments, and finally Implementing behaviour and interactions in-engine. 

I also gained valuable __QA Testing__ experience, working with local studios to playtest Video games and Board games. 
`
                    },
                },
            },
        },

        jp: {
            translation: {
                tagline_intro: "ヘイ、ユアンです。",
                tagline_main: "グラフィックス プログラマー",
                resume_name: "履歴書",
                projects_section_header: "プロジェクト",
                experience_section_header: "職歴",
                about_me_section_header: "私について",
                skills_section_header: "スキル",
                contact_section_header: "連絡",
                gallery_section_header: "ギャラリー",
                skill_programming_languages_header: "プログラム言語",
                skill_platforms_header: "プラットフォーム",
                skill_graphics_apis_header: "グラフィックス API",
                skill_tools_header: "開発ツール",
                about_me: `
# 私について 
ヘイ！👋

イギリスからソフトウェアエンジニアのユアンです。私の専門は__リアルタイムレンダリング__や__コンピューターグラフィックス__などです。

現在、大学院生として、Sheffield Hallam 大学で「ゲームのコンピューターサイエンス」と言う学位を勉強しています。大学で __PlayStation® 5 開発キット__ を使って、独自のソフトウェアを開発しできました。その他、__ゲームエンジンの開発方__ と __上級のC++プログラミング__ も勉強しました。今、 (__「リアルタイムグローバル・イルミネーション方法」__ / __「GPUハードウェアアクセラレーションボクセル方法」__ / __「Vulkan APIでMesh Shadingする方法」__ / __「カッコイイもの!」__) についての学位論文をしています。

ゲーマーと向上心がある人として、__ゲーム技術__　は本当に好きです。2018年からゲーム開発を勉強したので、主の開発ツールを使ったことがあるわけです。

お趣味は言語です！英語の母語話者ですが、日本語もよく分かります (JLPT N3のレベルぐらい)。中国語とドイツ語も自立に勉強しています。世界中の皆さんと話したいです！

プロフェッショナルとして __世界中__ からの __ソフトウェア業界__で職業とインターンシップを探しています。

(気になちゃったら、一番好きのゲームは:　「ニーア オートマタ」、「モンスターハンター」ールド」と「ファイナルファンタジー１４」です！)
`,
                experience: {
                    university: {
                        companyName: "Sheffield Hallam University",
                        startDate: "2020年9月",
                        endDate: "2026年5月",
                        description: `
//A description of my time at Sheffield Hallam University 

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `
                    },
                    college: {
                        companyName: "Confetti Institute of Creative Technologies",
                        startDate: "2018年9月",
                        endDate: "2020年6月",
                        description: `
//A description of my time at Confetti 

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `
                    },
                },
            },
        },
        zh: {
            translation: {
                tagline_intro: "你好，我叫Ewan。我是一名",
                tagline_main: "图形程序员",
                resume_name: "简历",
                projects_section_header: "项目",
                experience_section_header: "工作经历",
                about_me_section_header: "自我评价",
                skills_section_header: "技能",
                contact_section_header: "联系方式",
                gallery_section_header: "图辑",
                skill_programming_languages_header: "电脑语言",
                skill_platforms_header: "平台",
                skill_graphics_apis_header: "电脑绘图",
                skill_tools_header: "软件开发软件",
                about_me: `
# 自我评价

Hi! 👋

I'm Ewan, a UK-based Software Engineer specialising in Real-time Rendering and Computer Graphics. 

I'm currently a __Final Year__ student, studying an __Integrated Master's__ in __Computer Science for Games__ at __Sheffield Hallam University__, where I've learned __Advanced C++ Programming__, __Game Engine Development__, and even had a chance to work directly with __PlayStation® 5 Development Kits__ to produce my own software. I'm currently focused on my __Final Year Dissertation__ project on (__Real-time Global Illumination__ / __GPU-Accelerated Mesh Voxelisation methods__ / __Mesh Shading in Vulkan__ / __Something Cool!__).

I have a real passion for __Games__, and the amazing technology that drives them. I've been a student of Game Development __since 2018__, and have worked with many __industry-standard tools__ as a result. 

I'm also an avid Linguist - Proficient in __Japanese__(JLPT N3), and Conversational in __Mandarin Chinese__ and __German__. 

I'm currently seeking __Graduate Positions__ in Software Engineering __worldwide__, and would love to bring my passion, knowledge, and expertise to the field as a professional! 

(And if you're curious, My favorite titles are: NieR: Automata, Monster Hunter World and Final Fantasy 14!)
                `,
                experience: {
                    university: {
                        companyName: "谢菲尔德哈勒姆大学 (硕士)",
                        startDate: "2020年9月",
                        endDate: "2026年6月",
                        description: `
//A description of my time at Sheffield Hallam University 

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `
                    },
                    college: {
                        companyName: "Confetti Institute of Creative Technologies",
                        startDate: "2018年9月",
                        endDate: "2020年6月",
                        description: `
//A description of my time at Confetti 

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `
                    },
                },
            },
        },
    },
});



export default i18n; 