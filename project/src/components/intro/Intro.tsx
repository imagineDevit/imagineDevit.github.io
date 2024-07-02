import {Component} from "solid-js";
import styles from "./Intro.module.css";

export const Intro: Component = () => {
    return (
        <div class={styles.IntroContainer}>
            <div class={styles.Intro}>
                <p>There is no <strong>L♡VE</strong> without <strong>SHARING</strong> 🥰. Right ? ! ?</p>
                <p>I love coding and I use and learn a lot from open source projects.</p>
                <p>👇Here is my modest contribution to the community 🙈 ⸰ ⸰ ⸰ </p>
            </div>
        </div>
    )
}