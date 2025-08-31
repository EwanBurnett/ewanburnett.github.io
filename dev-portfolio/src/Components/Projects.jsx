
import { FaWindows, FaLinux, FaAndroid, FaPlaystation } from "react-icons/fa";
import { CgBrowser } from 'react-icons/cg';
import styles from "./Projects.module.css";
import Markdown from 'react-markdown';

const platforms = {
    "Windows": <FaWindows />,
    "Linux": <FaLinux />,
    "PlayStation 5": <FaPlaystation />,
    "Android": <FaAndroid />,
    "Web": <CgBrowser />
};

const projects = [
    {
        title: "PROJECT_TITLE",
        brief: "PROJECT_BRIEF",
        date: "2025-05-11",
        platforms: ["Windows", "PlayStation 5", "Android", "Linux", "Web"],
        description: "_PROJECT_DESCRIPTION_ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        repository: "PROJECT_REPOSITORY",
        article: "PROJECT_ARTICLE",
        video: "PROJECT_VIDEO",
        thumbnail: "https://www.dummyimage.com/1000x500/00ff59/0011ff.png",
    },
    {
        title: "Onyx",
        brief: "Cross-Platform 3D Game Engine",
        date: "2025-08-12",
        platforms: ["Windows", "PlayStation 5", "Android", "Linux"],
        description: "PROJECT_DESCRIPTION Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        repository: "https://github.com/EwanBurnett/Onyx.git",
        article: null,
        video: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
        thumbnail: "https://www.dummyimage.com/2000x500/00ff59/0011ff.png",
        },
        /*
        */
    {
        title: "PROJECT_TITLE",
        brief: "PROJECT_BRIEF",
        date: "2025-05-11",
        platforms: ["Windows", "PlayStation 5", "Android", "Linux", "Web"],
        description: "_PROJECT_DESCRIPTION_ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        repository: "PROJECT_REPOSITORY",
        article: "PROJECT_ARTICLE",
        video: "PROJECT_VIDEO",
        thumbnail: "https://www.dummyimage.com/1000x500/00ff59/0011ff.png",
    },
    {
        title: "PROJECT_TITLE",
        brief: "PROJECT_BRIEF",
        date: "2025-05-11",
        platforms: ["Windows", "PlayStation 5", "Android", "Linux", "Web"],
        description: "_PROJECT_DESCRIPTION_ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        repository: "PROJECT_REPOSITORY",
        article: "PROJECT_ARTICLE",
        video: "PROJECT_VIDEO",
        thumbnail: "https://www.dummyimage.com/1000x500/00ff59/0011ff.png",
    },
    {
        title: "PROJECT_TITLE",
        brief: "PROJECT_BRIEF",
        date: "2025-05-11",
        platforms: ["Windows", "PlayStation 5", "Android", "Linux", "Web"],
        description: "_PROJECT_DESCRIPTION_ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        repository: "PROJECT_REPOSITORY",
        article: "PROJECT_ARTICLE",
        video: "PROJECT_VIDEO",
        thumbnail: "https://www.dummyimage.com/1000x500/00ff59/0011ff.png",
    },
    {
        title: "PROJECT_TITLE",
        brief: "PROJECT_BRIEF",
        date: "2025-05-11",
        platforms: ["Windows", "PlayStation 5", "Android", "Linux", "Web"],
        description: "_PROJECT_DESCRIPTION_ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        repository: "PROJECT_REPOSITORY",
        article: "PROJECT_ARTICLE",
        video: "PROJECT_VIDEO",
        thumbnail: "https://www.dummyimage.com/1000x500/00ff59/0011ff.png",
    },
];


/*
 <h3>
 {data.date}
 </h3>
 */

export function ProjectItem(props) {
    const data = props.data;

    return (
        <div className={styles.projectWrapper}>
            <div className={styles.projectContainer}>

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
                                <video src={data.video} />
                            </div>
                        ) : 
                        data.thumbnail != null ? (
                        <div className={styles.cardVideo}>
                            <img src={data.thumbnail} />
                        </div>
                        )    :
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