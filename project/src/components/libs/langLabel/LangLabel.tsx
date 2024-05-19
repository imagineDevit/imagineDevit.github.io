import {Component} from "solid-js";
import {logoOf, PLang} from "../../../models";
import styles from "./LangLabel.module.css";

export type LangLabelProps = {
    lang: PLang;
}

export const LangLabel: Component<LangLabelProps> = ({lang}) => {
    return (
        <div id={lang.valueOf()} class={styles.Content}>
            <div class={styles.Logo}>
                <img src={logoOf(lang)} alt={lang} width={40}/>
            </div>

            <span class={styles.Lang}>{lang}</span>
        </div>
    )
}