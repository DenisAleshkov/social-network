import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users.js';
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, setIsFetching } from '../../redux/usersReducer.js';
import Preloader from '../common/preloader.js';
import { usersAPI } from '../../api/api.js';
//контейнерная компонента

class UsersContainer extends React.Component {

    // componentDidUpdate() вызывается сразу после обновления. 
    // Не вызывается при первом рендере.
    componentDidMount() {
        this.props.toggleIsFetching(true);
       usersAPI.getUsers(this.props.currentPage,this.props.pageUsersSize)
        .then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount);
        });

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber,this.props.pageUsersSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    }
    //срабатывает сразу
    render() {
        return <>
            {this.props.isFetching
                ? <Preloader />
                : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageUsersSize={this.props.pageUsersSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageUsersSize: state.usersPage.pageUsersSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow:follow,
    unfollow:unfollow,
    setUsers: setUsers,
    setCurrentPage: setCurrentPage,
    setUsersTotalCount: setUsersTotalCount,
    toggleIsFetching: setIsFetching
})(UsersContainer);