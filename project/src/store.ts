import {createStore} from "solid-js/store";
import {PLang} from "./models";

export type Anchor = {
    lang: PLang,
    position: number
}

export type State = {
    showDescription: boolean,
    anchors: Anchor[],
    activeLang: PLang | undefined,
    onMenuItemSelecting: boolean,
    searchTerm: string | undefined,
}

export const [store, setStore] = createStore<State>({
    showDescription: true,
    anchors: [],
    activeLang: undefined,
    onMenuItemSelecting: false,
    searchTerm: undefined
})
export const [searchTerm, setSearchTerm] = [
    () => store.searchTerm,
    (value: string) => {
        if (value === '') {
            setStore('searchTerm', undefined)
            setActiveLang(undefined, false, false)
        }
        else setStore('searchTerm', value)
    }
]

export const [showDescription, setShowDescription] = [
    () => store.showDescription,
    (value: boolean) => setStore('showDescription', value)]

export const [anchors, addAnchor, setAnchors] = [
    () => store.anchors,
    (value: Anchor) => {
        if (store.anchors.find(a => a.lang === value.lang) === undefined) {
            setStore('anchors', [...store.anchors, value])
        }
    },
    () => {
        setStore('anchors', [])
        Object.values(PLang).forEach((lang, index) => {
            const element = document.getElementById(lang)
            if (element) {
                addAnchor({lang, position: (element.offsetTop)})
            }
        });
    }
]

export const [activeLang, setActiveLang] = [
    () => store.activeLang,
    (value: PLang | undefined, byClick: boolean, hideDescription : boolean) => {

    if (store.onMenuItemSelecting) return

        if (byClick) {
            if ( hideDescription && showDescription()) setShowDescription(false)
            setStore('onMenuItemSelecting', true)
            setTimeout(() => setStore('onMenuItemSelecting', false), 1000)
        }

        setStore('activeLang', value)
    }
]

export const onScrollY = (y: number) =>{
    const lang = store.anchors.filter(a => a.position >=y)
        .sort((a, b) => a.position - b.position)[0].lang

    setActiveLang(lang, false, false)
}

    export const hasAnchor = (lang: PLang) => anchors().find(a => a.lang === lang) !== undefined

export const registerAnchors = () => {
    setAnchors()
}