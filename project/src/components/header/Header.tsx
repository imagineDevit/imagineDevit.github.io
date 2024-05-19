import {Component} from "solid-js";

import logo from '../../assets/logo.png';
import github from '../../assets/github.png';
import styles from './Header.module.css';

export type HeaderProps = {
    user: string;
    url: string;

}

export const Header: Component<HeaderProps> = ({user, url}: HeaderProps) => {

    return (
        <div class={styles.HeaderContainer}>
            <div class={styles.Header}>
                <div class={styles.Logo}>
                    <img class={styles.Logo} width={40} src={logo} alt={'logo'}/>
                    <div class={styles.Separator}></div>
                    <p class={styles.Title}>Imagine & Dev' <span class={styles.Blue}>it</span></p>
                </div>

                <div class={styles.Github}>
                    <img src={github} width={25} alt={'github'}/>
                    <a href={url} class={styles.Link} target={'_blank'}>{user}</a>
                </div>
            </div>
        </div>
    )
}