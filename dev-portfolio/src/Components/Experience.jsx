
import styles from './Experience.module.css'

import Markdown from 'react-markdown';

const experience = [
    {
        title: "Junior Software Engineer",
        company: "Some Company",
        companyURL: null,
        startDate: "July 2026",
        endDate: "Present",
        grade: null,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: "MComp Computer Science for Games",
        company: "Sheffield Hallam University",
        companyURL: "https://www.shu.ac.uk",
        startDate: "September 2020",
        endDate: "May 2026",
        grade: "1st.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: "BTEC Games Technology",
        company: "Confetti Institute of Creative Technologies",
        companyURL: "https://confetti.ac.uk",
        startDate: "September 2018",
        endDate: "June 2020",
        grade: "Distinction",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },


];

export function ExperienceItem(props) {
    const item = props.data;

    return (
        <div className={styles.experienceWrapper}>
            <div className={styles.experienceHeader}>
                <div className={styles.experienceTitle}>
                    <h2>{item.title}</h2>
                    {item.grade ?
                        (
                            <div className={styles.experienceGrade}>
                                <h3> | </h3>
                                <h3>{item.grade}</h3>
                            </div>
                        ) :
                        null
                    }
                </div>
                <div className={styles.experienceCompany}>
                    {item.companyURL ?
                        (
                            <a href={item.companyURL} target="_blank">
                                <h3>{item.company}</h3>
                            </a>
                        ) :
                        (<h3>{item.company}</h3>)
                    }
                </div>
                <div className={styles.experienceDates}>
                    <h4>{item.startDate} — {item.endDate}</h4>
                </div>
            </div>
            <div className={styles.experienceDescription}>
                <Markdown>{item.description}</Markdown>
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