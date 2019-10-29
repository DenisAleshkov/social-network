import { createStore, combineReducers } from 'redux';
import ProfileReducer from './profileReducer';
import MessageReducer from './messagesReducer';
import sidebarReducer from './sidebarReducer';

let reducers = combineReducers({
    ProfileReducer: ProfileReducer,
    MessageReducer: MessageReducer,
    sidebarReducer: sidebarReducer
});

let store = createStore(reducers);


export default store;