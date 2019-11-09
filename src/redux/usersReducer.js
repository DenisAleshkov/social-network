const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGLE_IS_FETCHING = 'TOGLE_IS_FETCHING';

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageUsersSize: 5,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {
        switch (action.type) {
            case FOLLOW:
                //формируем новый объект
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userID) {
                            return {
                                ...u,
                                followed: true
                            } //возвращаем копию users
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
                                return {
                                    ...u,
                                    followed: false
                                } //возвращаем копию users
                            }
                            return u; //возвращаем тот же самый объект
                        }),
                    }
                }
            case SET_USERS:
                {
                    return {
                        ...state,
                        users: action.users
                    }
                }
            case SET_CURRENT_PAGE:
                {
                    return {
                        ...state,
                        currentPage: action.currentPage
                    }
                }
            case SET_USERS_TOTAL_COUNT:
                {
                    return {
                        ...state,
                        totalUsersCount: action.count
                    }
                }
            case TOGLE_IS_FETCHING:
                {
                    return {
                        ...state,
                        isFetching: action.isFetching
                    }
                }
            default:
                return state;

        }
    }
    //follow
export const followAC = (userID) => ({
        type: FOLLOW,
        userID
    })
    //unfollow
export const unfollowAC = (userID) => ({
    type: UNFOLLOW,
    userID
})
export const setUsersAC = (users) => ({
        type: SET_USERS,
        users
    })
    //изменить текущую страницу
export const setCurrentPageAC = (currentPage) => ({
        type: SET_CURRENT_PAGE,
        currentPage
    })
    //установить общее кол-во пользователей
export const setUsersTotalCountAC = (totalUsersCount) => ({
    type: SET_USERS_TOTAL_COUNT,
    count: totalUsersCount
})
export const setIsFetchingAC = (isFetching) => ({
    type: TOGLE_IS_FETCHING,
    isFetching
})
export default usersReducer;