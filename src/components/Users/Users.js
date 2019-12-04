import React from 'react';
import Paginator from './../common/Paginator/Paginator.js';
import User from './User.js';
let Users = ({currentPage,onPageChanged, totalUsersCount,pageUsersSize, users, ...props }) => {

    return <div>
       <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
       totalUsersCount={totalUsersCount} pageUsersSize={pageUsersSize}  />
        {
            users.map(u => <User user={u} followingInProgress={props.followingInProgress}
             key={u.id} follow={props.follow} unfollow={props.unfollow} />)
        }
    </div>
}
export default Users;