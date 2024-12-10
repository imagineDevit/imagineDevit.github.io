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
            <div class={styles.DescContainer}>
                <div class={styles.Version}>
                    <a href={project.version.url}
                       target={'_blank'}>
                        <img alt="version"
                             src={project.version.badgeSrc}/>
                    </a>
                </div>
                <div class={styles.Desc}>
                    {project.description}
                </div>
                <div class={styles.Links}>
                    <div class={styles.BtnLink} onClick={() => navigate(project.github.url)}>
                        <div class={styles.BtnLinkImg}>
                            <img src={github} width={15} alt={'github'}/>
                        </div>
                        <div class={styles.BtnLinkText}> source code</div>
                    </div>

                    {project.site &&
                        <div class={styles.BtnLink} onClick={() => navigate(project.site!!.url)}>
                            <div class={styles.BtnLinkImg}>
                                <img src={web} width={15} alt={'website'}/>
                            </div>
                            <div class={styles.BtnLinkText}>documentation</div>
                        </div>
                    }
                </div>
            </div>
        </div>

    )
}