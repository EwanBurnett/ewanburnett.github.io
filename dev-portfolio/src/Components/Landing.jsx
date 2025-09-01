import styles from './Landing.module.css';
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaBluesky } from 'react-icons/fa6';
import { LuMail } from 'react-icons/lu';

import { useTranslation } from 'react-i18next';

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
            <li><a className={styles.icon} href={"mailto:ewanburnettsk@outlook.com"}><LuMail/></a></li>
        </ul>
    );
}

export function ResumeButton() {
const { t, i18n } = useTranslation();
    return (
        <div>
            <div className={styles.resume}>
                <a href="/" target="_blank">{t("resume_name")}</a>
            </div>
        </div>
    );
}
export default function Landing() {
    const { t, i18n } = useTranslation();
    return (
        <div className={styles.landing}>
            <div className={styles.tagline}>
                <h2>{t("tagline_intro")}</h2>
                <h1>{t("tagline_main")}</h1>
            </div>
            <div className={styles.handles}>
                <ResumeButton />
                <Socials />
            </div>
        </div>
    )
}

