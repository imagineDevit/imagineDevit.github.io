import {Component} from "solid-js";
import {PLang, TOP_OFFSET_MAX, TOP_OFFSET_MIN} from "../../models";
import styles from "./Menu.module.css";
import {activeLang, hasAnchor, setActiveLang, setSearchTerm, showDescription} from "../../store";

export const Menu: Component = () => {

    const langs = Object.values(PLang)

    const scrollTo = (lang: PLang) => {

        if (!hasAnchor(lang)) return

        const element = document.getElementById(lang.valueOf())


        if (element) {
            setActiveLang(lang, true, document.body.scrollHeight > window.innerHeight)
            window.scrollTo({
                top: element.offsetTop - (showDescription() ? TOP_OFFSET_MAX : TOP_OFFSET_MIN),
                behavior: 'smooth'
            })
        }
    }

    return (
        <div classList={
            {[styles.MenuContainer] : true,
            [styles.BgBlack] : !showDescription()}
        }>
            <div class={styles.Menu}>
                {langs.map((lang) => (
                    <div classList={
                        {
                            [styles.MenuItem]: true,
                            [styles.LightGrey] : !showDescription(),
                            [styles.Blue] : activeLang() === lang,
                            [styles.Clickable] : hasAnchor(lang),
                            [styles.Disabled] : !hasAnchor(lang)
                        }
                    } onClick={() => scrollTo(lang)} >{lang}</div>
                ))}
            </div>
            <div classList={
                {
                    [styles.Separator]: true,
                    [styles.BgWhite] : !showDescription()
                }
            }/>
            <div class={styles.Search}>
                <div class={styles.Loupe}> 🔍</div>
                <input classList={
                    {[styles.Input] : true,
                    [styles.White] : !showDescription(),
                    [styles.BgBlack] : !showDescription()}
                }
                       type="text"
                       placeholder="Search"
                       onInput={(e: any) => {
                           const  s = e.target.value
                           if (s.length >= 3) {
                               setSearchTerm(s)
                           } else {
                               setSearchTerm('')
                           }
                       }}
                />
            </div>
        </div>
    )
}