import {Component} from "solid-js";
import {Project} from "../../../models";
import styles from "./Lib.module.css"
import github from "../../../assets/github.png"
import web from "../../../assets/web.png"

export type LibProps = {
    project: Project;
}

export const Lib: Component<LibProps> = ({project}: LibProps) => {

    const navigate = (url: string) => {
        window.open(url, '_blank');
    }

    return (
        <div class={styles.Content}>
            <div class={styles.Name}>{project.name}</div>
            <div class={styles.Link} onClick={() => navigate(project.github.url)}>
                <img src={github} width={15} alt={'github'}/>
                <div> SOURCE CODE</div>
            </div>
            {project.site &&
                <div class={styles.Link} onClick={() => navigate(project.site!!.url)}>
                    <img src={web} width={15} alt={'website'}/>
                    <div> WEBSITE</div>
                </div>
            }
            <div class={styles.Desc}>{project.description}</div>
        </div>

    )
}