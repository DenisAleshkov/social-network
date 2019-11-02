import { createStore, combineReducers } from 'redux';
import ProfileReducer from './profileReducer';
import MessageReducer from './messagesReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);


export default store;