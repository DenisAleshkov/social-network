import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer.js';
import Navbar from './components/Navbar/Navbar.js';
import { Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer.js';
import UsersContainer from './components/Users/UsersContainer.js';
import ProfileContainer from './components/Profile/ProfileContainer.js';
import Login from './components/Login/Login.js';


const App = (props) => {
    return (

        <div className="main-components">
            <HeaderContainer />
            <div className="content">
                <div className="navbar">
                    <Navbar />
                </div>

                <div className="right-content center">
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer />} />

                    <Route path='/profile/:userId' render={() =>
                         <ProfileContainer />  } />

                    <Route path='/users' render={() =>
                        <UsersContainer />} />

                    <Route path='/login' render={() =>
                          <Login /> } />
                </div>
            </div>
        </div>

    );

}

export default App;
