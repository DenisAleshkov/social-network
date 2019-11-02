const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            //формируем новый объект
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true } //возвращаем копию users
                    }
                    return u; //возвращаем тот же самый объект
                }),
            }
        case UNFOLLOW:
            {
                //формируем новый объект
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userID) {
                            return {...u, followed: false } //возвращаем копию users
                        }
                        return u; //возвращаем тот же самый объект
                    }),
                }
            }
        case SET_USERS:
            {
                return {
                    ...state,
                    users: [...state.users, ...action.users]
                }
            }

        default:
            return state;

    }
}
export const followAC = (userID) => ({ type: FOLLOW, userID })
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export default usersReducer;