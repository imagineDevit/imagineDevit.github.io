import Java from './assets/Java.png';
import Kotlin from './assets/Kotlin.png';
import Rust from './assets/Rust.png';
import Go from './assets/Golang.png';
import {JSXElement} from "solid-js";

export enum PLang {
    JAVA = 'Java',
    KOTLIN = 'Kotlin',
    RUST = 'Rust',
    GO = 'Golang',
}

export type Github = {
    url: string;
}

export type Site = {
    url: string;
}

export type Project = {
    name: string;
    lang: PLang;
    description: JSXElement;
    github: Github;
    site: Site | undefined;
}

export const logoOf = (lang: PLang): string => {
    switch (lang) {
        case PLang.JAVA:
            return Java;
        case PLang.KOTLIN:
            return Kotlin;
        case PLang.RUST:
            return Rust;
        case PLang.GO:
            return Go;
    }
}