
import { FaWindows, FaLinux, FaAndroid, FaPlaystation } from "react-icons/fa";
import { CgBrowser } from 'react-icons/cg';
import styles from "./Projects.module.css";
import Markdown from 'react-markdown';
import axios from "axios";
import { useEffect, useState } from "react";

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
                            data.thumbnail != null ? (
                                <div className={styles.cardVideo}>
                                    <img src={data.thumbnail} />
                                </div>
                            ) :
                                null
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
        return (
            <div>
                {projects.map(project => {
                    return (
                        <ProjectItem data={project}></ProjectItem>
                    );
                })}
            </div>
        );
    }
}