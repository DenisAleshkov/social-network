import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Navbar from './components/Navbar/Navbar.js';
import Profile from './components/Profile/Profile.js';
import { Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer.js';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
    return (

        <div className="main-components">
            <Header />
            <div className="content">
                <div className="navbar">
                    <Navbar />
                </div>

                <div className="right-content center">
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer />} />

                    <Route path='/profile' render={() =>
                        <Profile />} />

                    <Route path='/users' render={() =>
                        <UsersContainer />} />
                </div>
            </div>
        </div>

    );

}

export default App;
