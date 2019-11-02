import React from 'react';
import style from './users.module.css';

const Users = (props) => {
    if(props.users.length===0){
    props.setUsers([{
        id: 1,
        photoUrl: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg',
        followed: false,
        fullName: 'Prokop',
        status: 'I am stupid boy',
        location: {
            city: 'brest',
            location: 'Belarus'
        }
    },
    {
        id: 2,
        photoUrl: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg',
        followed: true,
        fullName: 'Robik',
        status: 'I am negar',
        location: {
            city: 'angola',
            location: 'Africa'
        }
    },
    {
        id: 3,
        photoUrl: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg',
        followed: false,
        fullName: 'Demik',
        status: 'I am gay',
        location: {
            city: 'mogilev',
            location: 'Belarus'
        }
    },
    {
        id: 4,
        photoUrl: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg',
        followed: true,
        fullName: 'Bodya',
        status: 'I am fat',
        location: {
            city: 'mogilev',
            location: 'Belarus'
        }
    }])
}
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={style.usersPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>u.location.country</div>
                        <div>{u.location.city}</div>

                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users;