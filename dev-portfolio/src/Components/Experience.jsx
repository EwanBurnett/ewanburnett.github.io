
import styles from './Experience.module.css'

import Markdown from 'react-markdown';
import { useTranslation } from 'react-i18next';

//TODO: Load from JSON
const experience = [
    /*
    //Here's where I'd put my job experience... if I had some!!!
    {
        title: "Junior Software Engineer",
        company: "Some Company",
        companyURL: null,
        startDate: "July 2026",
        endDate: "Present",
        grade: null,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    */
    {
        title: "MComp Computer Science for Games",
        company: "experience.university.companyName",
        companyURL: "https://www.shu.ac.uk",
        startDate: "experience.university.startDate",
        endDate: "experience.university.endDate",
        grade: "1st.",
        description: "experience.university.description"
    },
    {
        title: "BTEC Games Technology",
        company: "experience.college.companyName",
        companyURL: "https://confetti.ac.uk",
        startDate: "experience.college.startDate",
        endDate: "experience.college.endDate",
        grade: "Distinction",
        description: "experience.college.description"
    },


];

export function ExperienceItem(props) {
    const { t, i18n } = useTranslation();
    const item = props.data;

    return (
        <div className={styles.experienceWrapper}>
            <div className={styles.experienceHeader}>
                <div className={styles.experienceTitle}>
                    <h2>{item.title}</h2>
                    {item.grade ?
                        (
                            <div className={styles.experienceGrade}>
                                <h2> | </h2>
                                <h2>{item.grade}</h2>
                            </div>
                        ) :
                        null
                    }
                </div>
                <div className={styles.experienceCompany}>
                    {item.companyURL ?
                        (
                            <a href={item.companyURL} target="_blank">
                                <h3>{t(item.company)}</h3>
                            </a>
                        ) :
                        (<h3>{item.company}</h3>)
                    }
                </div>
                <div className={styles.experienceDates}>
                    <h4>{t(item.startDate)} — {t(item.endDate)}</h4>
                </div>
            </div>
            <div className={styles.experienceDescription}>
                <Markdown>{t(item.description)}</Markdown>
            </div>

        </div>
    );

}

export default function Experience() {
    return (
        <div className={styles.experience}>
            {experience.map(item => {
                return (
                    <ExperienceItem data={item}></ExperienceItem>
                );
            })}
        </div>
    );
}