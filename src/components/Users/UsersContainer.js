import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users.js';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC, setIsFetchingAC } from '../../redux/usersReducer.js';
import Preloader from '../common/preloader.js';
//контейнерная компонента

class UsersContainer extends React.Component {

    // componentDidUpdate() вызывается сразу после обновления. 
    // Не вызывается при первом рендере.
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageUsersSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
        });

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageUsersSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });
    }
    //срабатывает сразу
    render() {
        return <>
            {this.props.isFetching 
            ? <Preloader/>
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
let mapStateToDispatch = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}
export default connect(mapStateToProps, mapStateToDispatch)(UsersContainer);