import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer.js';
import Navbar from './components/Navbar/Navbar.js';
import { Route, withRouter } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer.js';
import Login from './components/Login/Login.js';
import { initializeApp } from './redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/preloader';
import { WithSupsense } from './components/hoc/WithSuspense';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer.js'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer.js'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className="main-components">
                <HeaderContainer />
                <div className="content">
                    <div className="navbar">
                        <Navbar />
                    </div>

                    <div className="right-content center">
                        <Route path='/dialogs' render={WithSupsense(DialogsContainer)} />

                        <Route path='/profile/:userId?' render={WithSupsense(ProfileContainer)} />

                        <Route path='/users' render={() =>
                            <UsersContainer />} />

                        <Route path='/login' render={() =>
                            <Login />} />
                    </div>
                </div>
            </div>

        );
    }
}
const MapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default compose(
    withRouter,
    connect(MapStateToProps, { initializeApp }))(App);

