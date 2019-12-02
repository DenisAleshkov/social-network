import React from 'react';
import { connect } from 'react-redux';
import Users from './Users.js';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers } from '../../redux/usersReducer.js';
import Preloader from '../common/preloader.js';
import { compose } from 'redux';
import { WithAuthRedirect } from '../hoc/WithAuthRedirect.js';
import {
    getUsers, getPageSize, getUsersTotalCount,
    getCurrentPage, getIsFetching, getFollowingInProgress
} from './../../redux/usersSelector.js';

//контейнерная компонента

class UsersContainer extends React.Component {

    // componentDidUpdate() вызывается сразу после обновления. 
    // Не вызывается при первом рендере.
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageUsersSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageUsersSize);
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
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageUsersSize: state.usersPage.pageUsersSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress:state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageUsersSize: getPageSize(state),
        totalUsersCount: getUsersTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
//compose видим как оборачивается компонента
export default compose(
    //в hoc передаем целевую компоненту
    //внутри hoc создается классовя(функц-ая) и возвращается
    WithAuthRedirect,
    // законектить презентационную компоненту к store
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers
    })
)(UsersContainer);
