import styles from './AboutMe.module.css';
import Markdown from 'react-markdown';
import aboutMeImg from "../Assets/AboutMe_Image.png";

import { useTranslation } from 'react-i18next';

const aboutMeImage = "https://www.dummyimage.com/600x1000/00ff59/0011ff.png";


export default function AboutMe() {

    const { t, i18n } = useTranslation();
    return (
        <div>
            <div className={styles.aboutMeWrapper}>
                <div className={styles.aboutMeContainer}>
                    {/*
                      */}
                    <div className={styles.aboutMeImageBox}>
                        <div className={styles.aboutMeImage}>
                            <img src={aboutMeImg}></img>
                        </div>

                    </div>
                    <div className={styles.aboutMeText}>
                        <Markdown>
                            {t("about_me")}
                        </Markdown>
                    </div>
                </div>
            </div>

        </div>
    );
}