import {Component} from 'solid-js';

import styles from './App.module.css';
import {Header} from "./components/header/Header";
import {Intro} from "./components/intro/Intro";
import {Menu} from "./components/menu/Menu";
import {Libs} from "./components/libs/Libs";
import {setShowDescription, showDescription} from "./store";

const App: Component = () => {

    const gitUser = 'imagineDevit';
    const gitUrl = 'https://github.com/imagineDevit';


    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            setShowDescription(false);
        } else {
            setShowDescription(true);
        }
    });

    return (
        <div class={styles.App}>
            <div class={styles.Fixed}>
                <Header user={gitUser} url={gitUrl}/>
                {showDescription() && <Intro/>}
                <Menu/>
            </div>


            <Libs/>
        </div>
    );
};

export default App;
