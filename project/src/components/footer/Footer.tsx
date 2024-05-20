import {Component, createSignal} from "solid-js";
import logo from "../../assets/logo.png";
import styles from "./Footer.module.css";

export const Footer: Component = () => {

    const [year, _] = createSignal(new Date().getFullYear())

    return (
        <div class={styles.Footer}>
            <div>
                <img  class={styles.Logo} src={logo} alt={'logo'} width={25}/>
            </div>
            <div>
                © {year()} imagineDevit. All rights reserved.
            </div>

        </div>
    )

}