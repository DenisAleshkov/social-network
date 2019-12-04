import React from 'react';
import style from './Paginator.module.css';



const Paginator = ({totalUsersCount, pageUsersSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageUsersSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return ( <div> {
            pages.map(p => {

                return <span className = { currentPage === p && style.selectedPage }
                onClick = {
                        (e) => {onPageChanged(p)}} > {p} 
                        </span>
            })
        } </div>
    )
};
export default Paginator;