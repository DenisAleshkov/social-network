import React from 'react';
import { getUserProfile, getStatus, updateStatus } from './../../redux/profileReducer.js';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { compose } from 'redux';



//компонента созданная вручную, рисует <Profile />
//оборачивает презентационную компоненту чтобы сделать запрос на сервер
class ProfileContainer extends React.Component {
    //компонента вмонтирована
    //компоненту отрисуем с тем что есть
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId=this.props.autorizedUserId;
            if(!userId){
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            //презентационная компонента
            <Profile {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                udpateStatus={this.props.updateStatus} />
        );
    }
}

let mapStateToProps = (state) => {
    // console.log('mapStateToProps');
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}
//compose видим как оборачивается компонента
export default compose(
    //connect получает данные от store
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus
    }),
    //с помощью withRouter возвращает новую компоненту
    //чтобы получить данные из URL
    withRouter,
    //в hoc передаем целевую компоненту
    //внутри hoc создается классовя(функц-ая) и возвращается
)(ProfileContainer);


