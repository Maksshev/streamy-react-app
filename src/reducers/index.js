import {combineReducers} from 'redux'
import authReducer from "./authReducer"
import {reducer as formReducer} from 'redux-form'
import streamReducer from './streamReducer'
import modalReducer from './modalReducer'

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer,
    modal: modalReducer
})
