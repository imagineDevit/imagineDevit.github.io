import {Component, onMount} from 'solid-js';

import styles from './App.module.css';
import {Header} from "./components/header/Header";
import {Intro} from "./components/intro/Intro";
import {Menu} from "./components/menu/Menu";
import {Libs} from "./components/libs/Libs";
import {onScrollY, registerAnchors, setShowDescription, showDescription} from "./store";
import {Footer} from "./components/footer/Footer";
import {MAX_VISIBLE_DESCRIPTION, TOP_OFFSET_MAX, TOP_OFFSET_MIN} from "./models";

const App: Component = () => {

    const gitUser = 'imagineDevit';
    const gitUrl = 'https://github.com/imagineDevit';

    window.addEventListener('scroll', () => {
        if (window.scrollY > MAX_VISIBLE_DESCRIPTION) {
            setShowDescription(false);
        } else {
            setShowDescription(true);
        }

        onScrollY(window.scrollY - ((showDescription() ? TOP_OFFSET_MIN : TOP_OFFSET_MAX)))
    });

    onMount(registerAnchors)

    return (
        <div class={styles.App}>
            <div class={styles.FixedTop}>
                <Header user={gitUser} url={gitUrl}/>
                {showDescription() && <Intro/>}
                <Menu/>
            </div>


            <Libs/>
            <div class={styles.FixedBottom}>
                <Footer/>
            </div>
        </div>
    );
};

export default App;
