import {Component} from "solid-js";
import {PLang} from "../../../models";
import {libs} from "../../../state";
import styles from "./LangLibs.module.css";
import {Lib} from "../lib/Lib";
import {LangLabel} from "../langLabel/LangLabel";


export type LangLibsProps = {
    lang: PLang;
}

export const LangLibs: Component<LangLibsProps> = ({lang}) => {

    const plangs = libs.filter(lib => lib.lang === lang);


    if (plangs.length === 0) return (<></>);

    return (

        <div>
            <LangLabel lang={lang}/>

            <div class={styles.Libs}>
                {plangs.map(lib => <Lib project={lib}/>)}
            </div>
        </div>
    )
}