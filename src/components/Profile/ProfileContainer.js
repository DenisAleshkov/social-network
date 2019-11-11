import React from 'react';
import { setUserProfile } from './../../redux/profileReducer.js';
import * as axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

//компонента созданная вручную, рисует <Profile />
//оборачивает презентационную компоненту чтобы сделать запрос на сервер
class ProfileContainer extends React.Component{

    //компонента вмонтирована
    //компоненту отрисуем с тем что есть
    componentDidMount() {
        let userId=this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
        .then(response => {
            this.props.setUserProfile(response.data.items);
        });
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
//с помощью wuthRouter возвращает новую компоненту
//чтобы получить данные из URL
let withUrlDataContainerComponent=withRouter(ProfileContainer);
//connect получает данные от store
export default connect(mapStateToProps, {
    setUserProfile
})(withUrlDataContainerComponent);