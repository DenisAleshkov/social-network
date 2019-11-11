import React from 'react';
import userPhoto from './../../avatar.png';
import style from './users.module.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import { followAPI, unfollowAPI } from '../../api/api';
let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageUsersSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && style.selectedPage}
                    onClick={(e) => { props.onPageChanged(p)}}>
                    {p}
                </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <NavLink to={'/profile/'+u.id}>
                    <div>
                        <img src={u.photos.large != null ? u.photos.large : userPhoto} className={style.usersPhoto} alt='avatar' />
                    </div>
                    </NavLink>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                               followAPI.follow(u.id).then(data => {
                                    if(data.resultCode==0){
                                    props.unfollow(u.id) 
                                    }
                                });

                                }}>Unfollow</button>
                            : <button onClick={() => {
                                unfollowAPI.unfollow(u.id).then(data => {
                                     if(data.resultCode==0){
                                     props.follow(u.id) 
                                     }
                                 });
                                 
                                 }}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users;