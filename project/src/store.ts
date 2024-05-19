import {createStore} from "solid-js/store";

export type State = {
    showDescription: boolean
}

export const [store, setStore] = createStore<State>({
    showDescription: true
})

export const [showDescription, setShowDescription] = [
    () => store.showDescription,
    (value: boolean) => setStore('showDescription', value)]