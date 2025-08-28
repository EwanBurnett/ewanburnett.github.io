import styles from "./Navbar.module.css"
import logo from "../logo.svg"

export function NavHome() {
    return (
        <div className={styles.navHome}>
            {/* The "Home" button - Always visible in the top-left.*/}
            <a href="/">
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
export var siteLangCode = "en"; 
const Languages = [
    {code: "en", label: "English"}, 
    {code: "jp", label: "日本語"}, 
    {code: "zh", label: "汉语"},
];

function SetSiteLanguage(languageCode){ 
    siteLangCode = languageCode;    //TODO: This isn't C! Set state properly!
    console.log("Setting Language to " + siteLangCode); 
}

export function LanguageMenu() {
    return (
        <div className={styles.languageMenu}>
            {/* The Language Selection menu. */}
            <a className={styles.languageButton}>
               Language ({siteLangCode})
            </a>
            <div className={styles.languageDropdown}>
                {Languages.map(({code, label}) => (
                    <a key={code} onClick={(e) => {SetSiteLanguage(code)}}>{label}</a>
                ))}
            </div>
        </div>
    );
}

export function NavMenu() {
    return (
        <div className={styles.navMenu}>
            {/* The Navigation menu - Collapses into a Hamburger menu on smaller screen sizes. */}
            <ul className="nav-links">
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Gallery">Gallery</a></li>
                <li><a href="#About-Me">About Me</a></li>
                <li><a href="#Contact">Contact</a></li>
                <li><LanguageMenu/></li>
            </ul>
        </div>
    );
}




export default function Navbar() {
    return (
        <nav className={styles.Navbar}>
            <NavHome />
            <NavMenu/>
        </nav>
    );
};
