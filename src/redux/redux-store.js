import { createStore, combineReducers } from 'redux';
import ProfileReducer from './profileReducer';
import MessageReducer from './messagesReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';

let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});


let store = createStore(reducers);


export default store;