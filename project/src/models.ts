import Java from './assets/Java.png';
import Kotlin from './assets/Kotlin.png';
import Rust from './assets/Rust.png';
import Go from './assets/Golang.png';
import {JSXElement} from "solid-js";

export const MAX_VISIBLE_DESCRIPTION = 90;
export const TOP_OFFSET_MAX =  300;
export const TOP_OFFSET_MIN = 130;

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

export type Version = {
    badgeSrc: string;
    url: string;
}

export type Project = {
    name: string;
    lang: PLang;
    description: JSXElement;
    github: Github;
    site: Site | undefined;
    keywords: string[] | undefined;
    version: Version;
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

export const match = (term: string, project: Project): boolean => {
    return project.name.includes(term)
        || ( project.keywords !== undefined && project.keywords.some(k => k.toLowerCase().includes(term.toLowerCase())))
}