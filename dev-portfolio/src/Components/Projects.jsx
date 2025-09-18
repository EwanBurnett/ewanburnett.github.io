
import { FaWindows, FaLinux, FaAndroid, FaPlaystation } from "react-icons/fa";
import { CgBrowser } from 'react-icons/cg';
import styles from "./Projects.module.css";
import Markdown from 'react-markdown';
import axios from "axios";
import { useEffect, useState } from "react";

import project_0_img_0 from "../Assets/Projects/RTX_Vulkan/RTX-1.png"; 
import project_0_img_1 from "../Assets/Projects/RTX_Vulkan/RTX-2.png"; 
import project_1_img_0 from "../Assets/Projects/SDF_Demo/SDF_Demo_01.png"; 
import project_1_video from "../Assets/Projects/SDF_Demo/SDF_Demo.mp4";
import project_2_img_0 from "../Assets/Projects/Onyx/Onyx_1.png"; 
import project_2_img_1 from "../Assets/Projects/Onyx/Onyx_2.png"; 
import project_3_img_0 from "../Assets/Projects/Wild to Wired/WildToWired-2.png"; 
import project_3_video from "../Assets/Projects/Wild to Wired/WildToWired.mp4"; 
import project_4_img_0 from "../Assets/Projects/CSE-168/Firefly-1.png"; 
import project_4_video from "../Assets/Projects/CSE-168/CSE-168-Demo.mp4"; 
import project_5_img_0 from "../Assets/Projects/Lapis/Lapis_01.webp"
import project_5_video from "../Assets/Projects/Lapis/Lapis_Demo.mp4"; 



//TODO: Import this properly! 
const projects = [
        {
            "title": "Vulkan Ray Tracing",
            "brief": "Exploring RTX in Vulkan",
            "date": "2025-02-21",
            "platforms": [
                "Windows",
                "Linux",
            ],
            "description": "A project exploring Hardware-Accelerated Ray Tracing using the Vulkan API, developed as a part of my Year-3 Dissertation work on Real-Time Global Illumination methods. ",
            "repository": null,
            "article": null,
            "video": null,
            "thumbnail": project_0_img_0,
            "background": project_0_img_1, 
        },
        {
            "title": "Signed Distance Functions",
            "brief": "Power of the Elements",
            "date": "2025-08-18",
            "platforms": [
                "Web",
            ],
            "description": "A project exploring Hardware-Accelerated Ray Tracing using the Vulkan API, developed as a part of my Year-3 Dissertation work on Real-Time Global Illumination methods. ",
            "repository": null,
            "article": null,
            "video": project_1_video,
            "thumbnail": project_1_img_0,
            "background": null, 
        }, 
        {
            "title": "Onyx",
            "brief": "Cross-Platform Game Engine",
            "date": "2025-08-18",
            "platforms": [
                "Windows", 
                "Linux", 
                "Android"
            ],
            "description": "A project exploring Hardware-Accelerated Ray Tracing using the Vulkan API, developed as a part of my Year-3 Dissertation work on Real-Time Global Illumination methods. ",
            "repository": null,
            "article": null,
            "video": null,
            "thumbnail": project_2_img_0,
            "background": project_2_img_1, 
        },
                {
            "title": "Wild To Wired",
            "brief": "Jingle Jam 2024 Entry",
            "date": "2025-08-18",
            "platforms": [
                "Windows", 
                "Linux", 
            ],
            "description": "A project exploring Hardware-Accelerated Ray Tracing using the Vulkan API, developed as a part of my Year-3 Dissertation work on Real-Time Global Illumination methods. ",
            "repository": null,
            "article": null,
            "video": project_3_video,
            "thumbnail": project_3_img_0,
            "background": null, 
        },
                      {
            "title": "Firefly",
            "brief": "CPU-Side Path Tracing",
            "date": "2025-08-18",
            "platforms": [
                "Windows", 
                "Linux", 
            ],
            "description": "A project exploring Hardware-Accelerated Ray Tracing using the Vulkan API, developed as a part of my Year-3 Dissertation work on Real-Time Global Illumination methods. ",
            "repository": null,
            "article": null,
            "video": project_4_video,
            "thumbnail": project_4_img_0,
            "background": null, 
        }, 
                              {
            "title": "Lapis",
            "brief": "PlayStation 5 Game Engine",
            "date": "2025-08-18",
            "platforms": [
                "PlayStation 5", 
            ],
            "description": "A project exploring Hardware-Accelerated Ray Tracing using the Vulkan API, developed as a part of my Year-3 Dissertation work on Real-Time Global Illumination methods. ",
            "repository": null,
            "article": null,
            "video": project_5_video,
            "thumbnail": project_5_img_0,
            "background": null, 
        }, 
    ]

const platforms = {
    "Windows": <FaWindows />,
    "Linux": <FaLinux />,
    "PlayStation 5": <FaPlaystation />,
    "Android": <FaAndroid />,
    "Web": <CgBrowser />
};

/*
 <h3>
 {data.date}
 </h3>
 */

export function ProjectItem(props) {
    const data = props.data;

    const [hover, setHover] = useState(false);

    return (
        <div className={styles.projectWrapper}>
            <div className={styles.projectContainer} onMouseEnter={(e) => setHover(true)} onMouseLeave={(e) => setHover(false)}>

                <div className={styles.projectCard}>
                    <div className={styles.cardForeground}>

                        <div className={styles.projectPlatforms}>
                            <ul>
                                {data.platforms.map(platform => {
                                    return (
                                        <li>
                                            <div className={styles.platformIcon}>
                                                {platforms[platform]}
                                                <div className={styles.platformTooltip}>
                                                    {platform}
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className={styles.projectHeader}>

                            <div className={styles.projectTitle}>
                                <h1>
                                    {data.title}
                                </h1>

                            </div>
                            <div className={styles.projectBrief}>
                                <h2>
                                    {data.brief}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardBackground}>
                        <div className={styles.cardThumbnail}>
                            <img src={data.thumbnail} />
                        </div>
                        {data.video != null ?
                            (
                                <div className={styles.cardVideo}>
                                    <video src={data.video} autoPlay loop muted preload />
                                </div>
                            ) :
                            data.background != null ? (
                                <div className={styles.cardBackground}>
                                    <img src={data.background} />
                                </div>
                            ) : null
                        }
                    </div>
                </div>
                <div className={styles.projectDetails}>
                    <div className={styles.projectDescription}>
                        <Markdown>
                            {data.description}
                        </Markdown>
                    </div>
                    <div className={styles.projectLinks}>
                        {data.repository ?
                            (<a href={data.repository} target="_blank">Repository</a>) :
                            (null)
                        }
                        {data.article ?
                            (<a href={data.article} target="_blank">Read More</a>) :
                            (null)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    /*
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        //Retrieve the project data from JSON via Axios. 
        axios.get("/data/projects.json")
            .then((res) => {
                setProjects(res.data.projects);
            }
            );
    }, []);
    
    if (projects === null) {
        return (
            <></>
        );
    }
    else {
        */
        return (
            <div>
                {projects.map(project => {
                    return (
                        <ProjectItem data={project}></ProjectItem>
                    );
                })}
            </div>
        );
    //}
}