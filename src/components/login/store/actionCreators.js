import { SET_NAME, SET_PWD,  } from './actionTypes';



export const setName = (name) => ({
    type: SET_NAME,
    name
})
export const setPWD = (password) => ({
    type: SET_PWD,
    password
})

