import {Component} from "solid-js";
import {Project} from "../../../models";
import styles from "./LangLibs.module.css";
import {Lib} from "../lib/Lib";
import {LangLabel} from "../langLabel/LangLabel";


export type LangLibsProps = {
    libs: Project[];
}

export const LangLibs: Component<LangLibsProps> = ({libs}) => {

    if (libs.length === 0) return (<></>);

    return (

        <div>
            <LangLabel lang={libs[0].lang}/>

            <div class={styles.Libs}>
                {libs.map(lib => <Lib project={lib}/>)}
            </div>
        </div>
    )
}