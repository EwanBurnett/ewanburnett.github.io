import styles from './Landing.module.css';
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaBluesky } from 'react-icons/fa6';

const githubLink = "https://github.com/EwanBurnett";
const linkedinLink = "https://www.linkedin.com/in/ewanburnettsk/";
const blueskyLink = "https://bsky.app/profile/ewanburnett.bsky.social";
const youtubeLink = "https://www.youtube.com/@EwanBurnettSK";

export function Socials() {
    return (
        <ul className={styles.socials}>
            <li><a className={styles.icon} href={githubLink} target="_blank"><FaGithub /></a></li>
            <li><a className={styles.icon} href={linkedinLink} target="_blank"><FaLinkedinIn /></a></li>
            <li><a className={styles.icon} href={blueskyLink} target="_blank"><FaBluesky /></a></li>
            <li><a className={styles.icon} href={youtubeLink} target="_blank"><FaYoutube /></a></li>
        </ul>
    );
}

export function ResumeButton() {
    return (
        <div className={styles.resume}>
            <a href="/" target="_blank">CV / Resume</a>
        </div>
    );
}
export default function Landing() {
    return (
        <div className={styles.landing}>
            <div className={styles.tagline}>
                <h2>Hi, I'm Ewan. I'm a</h2>
                <h1>Graphics Programmer</h1>
            </div>
            <ResumeButton />
            <Socials />
        </div>
    )
}