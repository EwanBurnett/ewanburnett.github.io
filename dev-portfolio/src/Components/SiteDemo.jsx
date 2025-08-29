import { useEffect } from "react";
import styles from "./SiteDemo.module.css";

var mainCanvas;

function InitSiteDemo() {

}

export default function SiteDemo() {

    useEffect(() => {
        InitSiteDemo();
    });
    return (
            <canvas ref={mainCanvas} className={styles.mainCanvas} />
    )
}