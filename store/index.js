import Vue from "vue"


export const state = () => ({
    isMobile: false
})

export const getters = {
    _getter: state => items => state[items]
}

export const mutations = {
    commitAppState(state, { key, value }) {
        state[key] = value
    }
}