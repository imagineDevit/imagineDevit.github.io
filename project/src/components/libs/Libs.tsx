import {Component, createEffect, createMemo, createSignal} from "solid-js";

import {match, PLang, Project} from "../../models";
import {LangLibs} from "./langLibs/LangLibs";
import styles from "./Libs.module.css";
import {libs} from "../../state";
import {registerAnchors, searchTerm} from "../../store";

export const Libs: Component = () => {

    let values = Object.values(PLang);

    const [projects, setProjects] = createSignal(libs)

    createEffect(() => {
        if (searchTerm()) {
            setProjects(libs.filter(l => l.keywords !== undefined && match(searchTerm()!!, l)))
        } else {
            setProjects(libs)
        }

        setTimeout(() => {
            registerAnchors()
        }, 1000)
    })

    const pLangs  = createMemo<Project[][]>(() => {
        return values.map(v => projects().filter(l => l.lang === v))
    })



    return (


        <div class={styles.Content}>
            {projects().length === 0 && <div class={styles.NoResult}>
                <div class={styles.Folder}> 📂</div>
                <div> No project found !!!
                </div> </div>}
            {pLangs().map((ps) => <LangLibs libs={ps}/>)}
        </div>

    )
}