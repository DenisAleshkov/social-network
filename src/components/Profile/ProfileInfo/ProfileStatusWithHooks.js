import React, { useState, useEffect } from 'react';


const ProfileStatusWithHooks = (props) => {

    //useState возвращает массив из двух элементов
    //editMode=false стартовое значение
    //SetEditMode функция которое это значение устанавливает
    //если будем меня state с помощью функций компонента будет перерисовываться
    let [editMode, SetEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    //hook который запускает функцию после того как 
    //все отресуется и покажется на экране
    //если не будет зависимостей то будет 
    //выполняться после каждой отрисовки
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]
    )

    const activateMode = () => {
        SetEditMode(true);
    }

    const deactivateEditMode = () => {
        SetEditMode(false);
        props.updateStatus(status);
    }

    const OnStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateMode}>
                        {props.status || 'no status'}
                    </span>
                </div>
            }
            {editMode &&
                <div>

                    <input onChange={OnStatusChange}
                        onBlur={deactivateEditMode}
                        autoFocus={true}
                        value={status} />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
