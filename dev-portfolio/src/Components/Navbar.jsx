import styles from "./Navbar.module.css"
import logo from "../logo.svg"
import { HiOutlineTranslate } from 'react-icons/hi';

import { useTranslation } from 'react-i18next';
import { useCallback, useState, useRef} from "react";

export function NavHome() {
    return (
        <div className={styles.navHome}>
            {/* The "Home" button - Always visible in the top-left.*/}
            <a href="#">
                {/*
                <div>
                    <img src={logo} className={styles.logo} alt="logo" />
                </div>
                    */}
                <div className={styles.name}>
                    Ewan Burnett
                </div>
            </a>
        </div>
    );
}

/*TODO: Wrap this in a Class...*/
const Languages = [
    { code: "en", label: "English" },
    { code: "jp", label: "日本語" },
    { code: "zh", label: "中文" },
];



export function LanguageMenu() {
    const {t, i18n} = useTranslation(); 

    return (
        <div className={styles.languageMenu}>
            {/* The Language Selection menu. */}
            <a className={styles.languageButton}>
                <HiOutlineTranslate />
                ({i18n.language})
            </a>
            <div className={styles.languageDropdown}>
                {Languages.map(({ code, label }) => (
                    <a key={code} onClick={(e) => { i18n.changeLanguage(code); }}>{label}</a>
                ))}
            </div>
        </div>
    );
}

export function NavMenu() {
    const {t, i18n} = useTranslation(); 
    const menuRef = useRef(null); 
    const [sideBarEnabled, setSideBarEnabled] = useState(false); 
    const toggleSidebar = () => { 
        const prevState = sideBarEnabled; 
        setSideBarEnabled(!prevState); 
        console.log("Toggling Sidebar!\n" + !prevState); 

        const menu = menuRef.current;
        if(sideBarEnabled){

        menu.style.width = "100%";
        }
        else{ 
            menu.style.width = "0%"; 
        }

    };
    return (
        <div className={styles.navMenu}>
            {/* The Navigation menu - Collapses into a Hamburger menu on smaller screen sizes. */}
            <ul className={styles.navLinks}>
                <li><a href="#Projects">{t("projects_section_header")}</a></li>
                <li><a href="#Experience">{t("experience_section_header")}</a></li>
                <li><a href="#About-Me">{t("about_me_section_header")}</a></li>
                <li><a href="#Contact">{t("contact_section_header")}</a></li>
                <li><a href="#Gallery">{t("gallery_section_header")}</a></li>
                <li><LanguageMenu /></li>
            </ul>
            <div className={styles.hamburger}>
                <input type="checkbox" className={styles.menuToggle} onClick={toggleSidebar} />
                <div className={styles.hamburgerLines}>
                    <span className={[styles.line]} />
                    <span className={[styles.line]} />
                    <span className={[styles.line]} />
                </div>
            </div>
            <div className={styles.sidebar} ref={menuRef}>
                <a href="#Home">{t("home_header")}</a>
                <a href="#Projects">{t("projects_section_header")}</a>
                <a href="#Experience">{t("experience_section_header")}</a>
                <a href="#About-Me">{t("about_me_section_header")}</a>
                <a href="#Contact">{t("contact_section_header")}</a>
                <a href="#Gallery">{t("gallery_section_header")}</a>
                <LanguageMenu />
            </div>
        </div>
    );
}




export default function Navbar() {
    return (
        <nav className={styles.Navbar}>
            <NavHome />
            <NavMenu />
        </nav>
    );
};
