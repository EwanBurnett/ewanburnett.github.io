import styles from './AboutMe.module.css';
import Markdown from 'react-markdown';

const aboutMeImage = "https://www.dummyimage.com/500x1000/00ff59/0011ff.png";

const aboutMeText = `
# About Me
Hi! 👋

I'm Ewan, a UK-based Software Engineer specialising in Real-time Rendering and Computer Graphics. 

I'm currently a __Final Year__ student, studying an __Integrated Master's__ in __Computer Science for Games__ at __Sheffield Hallam University__, where I've learned __Advanced C++ Programming__, __Game Engine Development__, and even had a chance to work directly with __PlayStation® 5 Development Kits__ to produce my own software. I'm currently focused on my __Final Year Dissertation__ project on (__Real-time Global Illumination__ / __GPU-Accelerated Mesh Voxelisation methods__ / __Mesh Shading in Vulkan__ / __Something Cool!__).

I have a real passion for __Games__, and the amazing technology that drives them. I've been a student of Game Development __since 2018__, and have worked with many __industry-standard tools__ as a result. 

I'm also an avid Linguist - Proficient in __Japanese__, and Conversational in __Mandarin Chinese__ and __German__. 

I'm currently seeking __Graduate Positions__ in Software Engineering __worldwide__, and would love to bring my passion, knowledge, and expertise to the field as a professional! 

(And if you're curious, My favorite titles are: NieR: Automata, Monster Hunter World and Final Fantasy 14!)
`;
export default function AboutMe(){ 
    return(
        <div>
            <div className={styles.aboutMeWrapper}>
                <div className={styles.aboutMeContainer}>
                    <div className={styles.aboutMeImage}>
                      {/*
                       <img src={aboutMeImage}></img> 
                      */}
                    </div>
                    <div className={styles.aboutMeText}>
                        <Markdown>
                            {aboutMeText}
                        </Markdown>
                    </div>
                </div>
            </div>

        </div>
    );
}