import React from 'react';
import { getUserProfile } from './../../redux/profileReducer.js';
import * as axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { usersAPI } from '../../api/api.js';


//компонента созданная вручную, рисует <Profile />
//оборачивает презентационную компоненту чтобы сделать запрос на сервер
class ProfileContainer extends React.Component{

    //компонента вмонтирована
    //компоненту отрисуем с тем что есть
    componentDidMount() {
        debugger
        let userId=this.props.match.params.userId;
        if(!userId)
        {
            userId=2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            //презентационная компонента
            <Profile {...this.props}
                profile={this.props.profile} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}
//с помощью withRouter возвращает новую компоненту
//чтобы получить данные из URL
let withUrlDataContainerComponent=withRouter(ProfileContainer);
//connect получает данные от store
export default connect(mapStateToProps, {
    getUserProfile:getUserProfile
})(withUrlDataContainerComponent);