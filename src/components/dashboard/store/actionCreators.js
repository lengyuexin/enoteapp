import { SET_SHOW, SET_HTML, SET_TEXT } from './actionTypes';



export const setShow = (show) => ({
    type: SET_SHOW,
    show
})
export const setHtml = (html) => ({
    type: SET_HTML,
    html
})
export const setText = (text) => ({
    type: SET_TEXT,
    text
})

