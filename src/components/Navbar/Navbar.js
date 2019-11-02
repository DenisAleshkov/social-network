import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <ul className={style.items}>
                <li className={style.item}>
                    <NavLink className={style.links} to="/profile" activeClassName={style.active}>Profile</NavLink>
                </li>
                <li className={style.item}>
                    <NavLink className={style.links} to="/dialogs" activeClassName={style.active}>Messages</NavLink>
                </li>
                <li className={style.item}>
                    <a className={style.links} href="#">News</a>
                </li>
                <li className={style.item}>
                    <a className={style.links} href="#">Music</a>
                </li>
                <li className={style.item}>
                    <a className={style.links} href="#">Find Users</a>
                </li>
                <li className={style.item}>
                    <a className={style.links} href="#">Settings</a>
                </li>
            </ul>
        </div>
    );
}
export default Navbar;