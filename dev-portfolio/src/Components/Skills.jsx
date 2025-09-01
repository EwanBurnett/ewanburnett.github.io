
//Languages 
import { DiPython, DiTerminalBadge } from 'react-icons/di';
//TODO: C++, C#, C, HLSL, GLSL, Rust, ASM, Lua, BASH

//APIs 
import { FaRust } from 'react-icons/fa';

//Tools
import { DiVisualstudio } from 'react-icons/di';
import { FaGitAlt } from 'react-icons/fa';
import { SiCmake, SiLua } from 'react-icons/si';

import { FaJira } from 'react-icons/fa';

import { BsNvidia } from 'react-icons/bs';
//TODO: PIX, RenderDoc, 

import { SiAutodeskmaya } from 'react-icons/si';

import { FaUnity } from 'react-icons/fa';
import { SiUnrealengine } from 'react-icons/si';


//Graphics APIs
import { SiOpengl, SiVulkan, SiWebgpu } from 'react-icons/si';
//TODO: DX11, DX12 

//Platform Icons

import { FaAndroid, FaLinux, FaPlaystation, FaWindows } from 'react-icons/fa';

import { CgBrowser } from 'react-icons/cg';

import { FaQuestion } from 'react-icons/fa';

import { useTranslation } from 'react-i18next';
import styles from './Skills.module.css';


const programmingLanguages = [
    { Name: "C++ 20", Icon: <FaQuestion /> },
    { Name: "HLSL", Icon: <FaQuestion /> },
    { Name: "GLSL", Icon: <FaQuestion /> },
    { Name: "Rust", Icon: <FaRust /> },
    { Name: "C#", Icon: <FaQuestion /> },
    { Name: "C", Icon: <FaQuestion /> },
    { Name: "Python", Icon: <DiPython /> },
    { Name: "x86 Assembly", Icon: <FaQuestion /> },
    { Name: "Lua", Icon: <SiLua /> },
    { Name: "BASH", Icon: <DiTerminalBadge /> },
];

const platforms = [
    { Name: "Windows", Icon: <FaWindows /> },
    { Name: "Linux", Icon: <FaLinux /> },
    { Name: "PlayStation® 5", Icon: <FaPlaystation /> },
    { Name: "Android", Icon: <FaAndroid /> },
    { Name: "Web", Icon: <CgBrowser /> },
];

const graphicsAPIs = [
    { Name: "Vulkan 1.3", Icon: <SiVulkan /> },
    { Name: "DirectX 12", Icon: <FaQuestion /> },
    { Name: "WebGPU", Icon: <SiWebgpu /> },
    { Name: "DirectX 11", Icon: <FaQuestion /> },
    { Name: "OpenGL", Icon: <SiOpengl /> },
]

const tools = [
    { Name: "Visual Studio 2022", Icon: <DiVisualstudio /> },
    { Name: "Git", Icon: <FaGitAlt /> },
    { Name: "NVidia Nsight", Icon: <BsNvidia /> },
    { Name: "Microsoft PIX", Icon: <FaQuestion /> },
    { Name: "RenderDoc", Icon: <FaQuestion /> },
    { Name: "Jira", Icon: <FaJira /> },
    { Name: "CMake", Icon: <SiCmake /> },
    { Name: "SPIR-V", Icon: <FaQuestion /> },
    { Name: "Autodesk Maya", Icon: <SiAutodeskmaya /> },
    { Name: "Unreal Engine 5", Icon: <SiUnrealengine /> },
    { Name: "Unity Engine", Icon: <FaUnity /> },
];

/*
const engines = [
    { Name: "Unreal Engine 5", Icon: <SiUnrealengine /> },
    { Name: "Unity Engine", Icon: <FaUnity /> },
];
*/

const BentoLayout = (props) => {
    const { children } = props;
    return (
        <div className={styles.bento}>
            <div className={styles.bentoGrid}>
                {children}
            </div>
        </div>
    );
};

function BentoCategory({ items, title }) {
    return (
        <div className={styles.bentoCategory}>
            <h1>{title}</h1>
            <div>
                {items.map(item => {
                    return (
                        <div className={styles.bentoItem}>
                            <div className={styles.bentoIcon}>{item['Icon']}
                                <div className={styles.bentoTooltip}>{item['Name']}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default function Skills() {
    const {t, i18n} = useTranslation(); 

    return (
        <div>
            <BentoLayout>
                <BentoCategory items={programmingLanguages} title={t("skill_programming_languages_header")} />
                <BentoCategory items={platforms} title={t("skill_platforms_header")} />
                <BentoCategory items={graphicsAPIs} title={t("skill_graphics_apis_header")} />
                <BentoCategory items={tools} title={t("skill_tools_header")} />
            </BentoLayout>
        </div>
    );
}