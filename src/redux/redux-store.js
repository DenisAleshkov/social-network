import { createStore, combineReducers, applyMiddleware } from 'redux';
import ProfileReducer from './profileReducer';
import MessageReducer from './messagesReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk'
import appReducer from './appReducer';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;