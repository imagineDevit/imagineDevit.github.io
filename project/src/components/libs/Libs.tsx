import {Component} from "solid-js";

import {PLang} from "../../models";
import {LangLibs} from "./langLibs/LangLibs";
import styles from "./Libs.module.css";

export const Libs: Component = () => {
    let values = Object.values(PLang);
    return (
        <div class={styles.Content}>
            {values.map((lang) => <LangLibs lang={lang}/>)}
        </div>
    )
}