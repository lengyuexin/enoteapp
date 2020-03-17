import { SET_NAME, SET_PWD } from './actionTypes';
import { fromJS } from 'immutable'
const defaultState = fromJS({
    name: "",
    password: "",

})
export default (state = defaultState, action) => {

    switch (action.type) {
        case SET_NAME:
            return state.set("name", action.name);
        case SET_PWD:
            return state.set("password", action.password);
      

        default: return state;
    }

}
