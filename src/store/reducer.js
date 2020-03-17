import { combineReducers } from 'redux-immutable'
import { registerReducer } from '../components/register/store'
import { loginReducer } from '../components/login/store'
import { dbReducer } from '../components/dashboard/store'

export default combineReducers({
    register: registerReducer,
    login: loginReducer,
    dashboard: dbReducer,

})