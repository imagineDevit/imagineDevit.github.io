import {Component} from "solid-js";
import {PLang} from "../../models";
import styles from "./Menu.module.css";
import {showDescription} from "../../store";

export const Menu: Component = () => {

    const langs = Object.values(PLang)

    const scrollTo = (lang: PLang) => {
        const element = document.getElementById(lang.valueOf())
        if (element) {
            window.scrollTo({
                top: element.offsetTop - (showDescription() ? 290 : 120),
                behavior: 'smooth'
            })

        }
    }

    return (
        <div class={styles.MenuContainer}>
            <div class={styles.Menu}>
                {langs.map((lang) => (
                    <div classList={
                        {
                            [styles.MenuItem]: true
                        }
                    } onClick={() => scrollTo(lang)}>{lang}</div>
                ))}
            </div>
            <div class={styles.Separator}/>
            <div class={styles.Search}>
                <div class={styles.Loupe}> 🔍</div>
                <input class={styles.Input} type="text" placeholder="Search"/>
            </div>
        </div>
    )
}