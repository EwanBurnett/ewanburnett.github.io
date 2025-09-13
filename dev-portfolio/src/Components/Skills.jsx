
//Languages 
import { DiPython, DiTerminalBadge } from 'react-icons/di';
//TODO: C++, C#, C, HLSL, GLSL, Rust, ASM, Lua, BASH

//APIs 
import { FaRust } from 'react-icons/fa';

//Tools
import { DiVisualstudio } from 'react-icons/di';
import { FaGitAlt } from 'react-icons/fa';
import { SiAssemblyscript, SiCmake, SiCplusplus, SiLua } from 'react-icons/si';

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

export function MakeIcon({ src }) {
    return (<object data={src} />);
}

//TODO: Embed SVG icons manually.... 
export function Icon_CSharp() {
    return (
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <g
                transform="matrix(1.3333333,0,0,-1.3333333,0,486.66667)"
                id="g10"><g
                    transform="scale(0.1)"
                    id="g12">

                    <mask id="Csharp">
                        <rect x="0" y="0" width="4330.1334" height="4866.6666" fill="#ffffff"></rect>
                        <path
                            id="path22"
                            style={{ fill: "#000000", fillOpacity: "1", stroke: "none" }}
                            d="m 2091.74,1561.69 c -92.09,-163.33 -267.1,-273.71 -467.95,-273.71 -199.62,0 -373.64,109 -466.21,270.6 -44.97,78.53 -70.82,169.44 -70.82,266.43 0,296.59 240.44,537.02 537.03,537.02 198.33,0 371.44,-107.64 464.46,-267.59 l 469.39,270.3 c -186.57,322.06 -534.89,538.73 -933.85,538.73 -595.64,0 -1078.474,-482.85 -1078.474,-1078.46 0,-195.4 51.981,-378.64 142.832,-536.7 186.102,-323.759 535.422,-541.771 935.642,-541.771 400.95,0 750.82,218.883 936.65,543.601 l -468.7,271.55" /><path
                            id="path24"
                            style={{ fill: "#000000", fillOpacity: "1", stroke: "none" }}
                            d="M 2684.87,1563.34 H 2578.2 V 2080 h 106.67 v -516.66" /><path
                            id="path26"
                            style={{ fill: "#000000", fillOpacity: "1", stroke: "none" }}
                            d="M 2921.53,1563.34 H 2814.87 V 2080 h 106.66 v -516.66" /><path
                            id="path28"
                            style={{ fill: "#000000", fillOpacity: "1", stroke: "none" }}
                            d="m 2491.53,1886.67 v 106.67 h 516.67 v -106.67 h -516.67" /><path
                            id="path30"
                            style={{ fill: "#000000", fillOpacity: "1", stroke: "none" }}
                            d="m 2491.53,1650 v 106.67 H 3008.2 V 1650 h -516.67" />
                    </mask>

                    <path mask="url(#Csharp)"
                        id="path14"
                        style={{ fill: "#f8f8f8", fillOpacity: "1", stroke: "none" }}
                        d="m 3247.41,2576.9 c -0.03,61.37 -13.15,115.6 -39.7,162.15 -26.07,45.77 -65.12,84.13 -117.49,114.46 -432.35,249.29 -865.11,497.82 -1297.31,747.36 -116.52,67.27 -229.49,64.82 -345.15,-3.42 C 1275.68,3495.96 414.105,3002.35 157.371,2853.65 51.6406,2792.44 0.191406,2698.77 0.164063,2577.01 0,2075.68 0.164063,1574.35 0,1073 0.0234375,1012.97 12.5938,959.789 37.9688,913.949 64.0547,866.801 103.648,827.379 157.23,796.359 413.98,647.66 1275.66,154.078 1447.71,52.5703 c 115.71,-68.2695 228.68,-70.7109 345.24,-3.4219 432.21,249.5626 865,498.0816 1297.41,747.3636 53.58,31.008 93.17,70.449 119.26,117.566 25.34,45.844 37.93,99.022 37.95,159.062 0,0 0,1002.41 -0.16,1503.76" />
                    <path mask="url(#Csharp)"
                        id="path16"
                        style={{ fill: "#e8e8e8", fillOpacity: "1", stroke: "none" }}
                        d="M 1628.75,1829.89 37.9688,913.949 C 64.0547,866.801 103.648,827.379 157.23,796.359 413.98,647.66 1275.66,154.078 1447.71,52.5703 c 115.71,-68.2695 228.68,-70.7109 345.24,-3.4219 432.21,249.5626 865,498.0816 1297.41,747.3636 53.58,31.008 93.17,70.449 119.26,117.566 L 1628.75,1829.89" />
                    <path mask="url(#Csharp)"
                        id="path18"
                        style={{ fill: "#e8e8e8", fillOpacity: "1", stroke: "none" }}
                        d="m 1157.58,1558.58 c 92.57,-161.6 266.59,-270.6 466.21,-270.6 200.85,0 375.86,110.38 467.95,273.71 l -462.99,268.2 -471.17,-271.31" />
                    <path mask="url(#Csharp)"
                        id="path20"
                        style={{ fill: "#f0f0f0", fillOpacity: "1", stroke: "none" }}
                        d="m 3247.41,2576.9 c -0.03,61.37 -13.15,115.6 -39.7,162.15 L 1628.75,1829.89 3209.62,914.078 c 25.34,45.844 37.93,99.022 37.95,159.062 0,0 0,1002.41 -0.16,1503.76" />

                </g></g>
        </svg>
    )
}

const programmingLanguages = [
    { Name: "C++ 20", Icon: <SiCplusplus /> },
    { Name: "HLSL", Icon: <FaQuestion /> },
    { Name: "GLSL", Icon: <FaQuestion /> },
    { Name: "Rust", Icon: <FaRust /> },
    { Name: "C#", Icon: <Icon_CSharp /> },
    { Name: "C", Icon: <FaQuestion /> },
    { Name: "Python", Icon: <DiPython /> },
    { Name: "x86 Assembly", Icon: <SiAssemblyscript /> },
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
    const { t, i18n } = useTranslation();

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