import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Navbar from './components/Navbar/Navbar.js';
import Profile from './components/Profile/Profile.js';
import Dialogs from './components/Dialogs/Dialogs.js';
import { Route, BrowserRouter } from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="main-components">
                <Header />
                <div className="content">
                    <div className="navbar">
                        <Navbar />
                    </div>

                    <div className="right-content center">
                        <Route path='/dialogs' render={() =>
                            <Dialogs store={props.store}/>} />

                        <Route path='/profile' render={() =>
                            <Profile profilePage={props.state.profilePage} 
                            dispatch={props.dispatch}
                            />} />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );

}

export default App;
