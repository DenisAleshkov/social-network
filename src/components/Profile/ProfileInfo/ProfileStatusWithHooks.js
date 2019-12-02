import React, { useState } from 'react';


const ProfileStatusWithHooks=(props)=>{

//useState возвращает массив из двух элементов
//editMode=false
//SetEditMode функция которое это значение устанавливает
let [editMode, SetEditMode] = useState(false);
let [status, setStatus] = useState(props.status);

const activateMode=()=>{
    SetEditMode(true);
}

const deactivateEditMode=()=>{
    SetEditMode(false);
    props.updateStatus(status);
}

const OnStatusChange=(e)=>{
    setStatus(e.currentTarget.value)
}

return(
    <div>
    {!editMode&&
        <div>
            <span onDoubleClick={activateMode}>
                {props.status || 'no status'}
            </span>
        </div>
    }
    {editMode&&
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
