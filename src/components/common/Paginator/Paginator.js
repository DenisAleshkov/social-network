import React, { useState } from 'react';
import style from './Paginator.module.css';
import cn from 'classnames';


const Paginator = ({ totalItemsCount, pageUsersSize, currentPage, onPageChanged, portionSize = 10 }) => {
   
    let pagesCount = Math.ceil(totalItemsCount / pageUsersSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    //pagesCount-кол-во страниц portionSize-размер порции
    //portionCount-кол-во порций
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    //определяем левую границу(1,6,11)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    //определяем правую границу(5,10)
    let rightPortionPageNumber = portionNumber * portionSize;
    //////////////////////////////////
    return (<div className={style.paginator}>
        {portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
        }

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={cn({
                    [style.selectedPage]: currentPage === p
                }, style.pageNumber)}
                    ket={p}
                    onClick={
                        (e) => { onPageChanged(p) }}>{p}</span>
            })}
        {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
        }
    </div>
    )
};
export default Paginator;