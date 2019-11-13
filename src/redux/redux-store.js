import { createStore, combineReducers, applyMiddleware } from 'redux';
import ProfileReducer from './profileReducer';
import MessageReducer from './messagesReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;