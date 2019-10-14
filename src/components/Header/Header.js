import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <header>
            <div className={style.Header__logo}>

                <a href="#" className={style.Header__link}>
                    <img className={style.logo__image} src="https://avatanplus.com/files/resources/mid/5675a959987dc151bb9d8619.png" alt="Логотип" />
                    Unlimited communication
                </a>

            </div>
        </header>
    );
}
export default Header;