import { SET_SHOW, SET_HTML, SET_TEXT } from './actionTypes';
import { fromJS } from 'immutable'
const defaultState = fromJS({
    show: false,
    html: "",//编辑器md转html
    text: ``

    

})
export default (state = defaultState, action) => {

    switch (action.type) {
        case SET_SHOW:
            return state.set("show", action.show);
        case SET_HTML:
            return state.set("html", action.html);
        case SET_TEXT:
            return state.set("text", action.text);

        default: return state;
    }

}
