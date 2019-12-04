import React from 'react';
import userPhoto from './../../avatar.png';
import style from './users.module.css';
import { NavLink } from 'react-router-dom';

let User = ({user,followingInProgress,unfollow,follow, ...props }) => {
    return (
        <div>
            <span>
                <NavLink to={'/profile/' + user.id}>
                    <div>
                        <img src={user.photos.large != null 
                            ? user.photos.large : userPhoto} 
                            className={style.usersPhoto} alt='avatar' />
                    </div>
                </NavLink>
                <div>
                    {user.followed
                        //some-если кто нибудь из этого массива равен id
                        //some() вернет true
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                unfollow(user.id);
                            }}>Unfollow</button>

                        : <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                follow(user.id);
                            }}>follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>
    )
}
export default User;