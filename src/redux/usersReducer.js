import {
    usersAPI
} from "../api/api";
import { updateObjectInArray } from "./../utils/objects-helper.js";

const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGLE_IS_FETCHING = 'TOGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageUsersSize: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
        switch (action.type) {
            case FOLLOW:
                //формируем новый объект
                return {
                    ...state,
                    users: updateObjectInArray(state.users, action.userID, "id", { followed: true })
                }
            case UNFOLLOW:
                {
                    //формируем новый объект
                    return {
                        ...state,
                        users: updateObjectInArray(state.users, action.userID, "id", { followed: false })
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
            case TOGGLE_IS_FOLLOWING_PROGRESS:
                {
                    return {
                        ...state,
                        followingInProgress: action.isFetching ? [...state.followingInProgress, action.userID] : state.followingInProgress.filter(id => id != action.userID)
                    }
                }
            default:
                return state;

        }
    }
    //follow
export const FollowSucces = (userID) => ({
        type: FOLLOW,
        userID
    })
    //unfollow
export const unFollowSucces = (userID) => ({
    type: UNFOLLOW,
    userID
})
export const setUsers = (users) => ({
        type: SET_USERS,
        users
    })
    //изменить текущую страницу
export const setCurrentPage = (currentPage) => ({
        type: SET_CURRENT_PAGE,
        currentPage
    })
    //установить общее кол-во пользователей
export const setUsersTotalCount = (totalUsersCount) => ({
        type: SET_USERS_TOTAL_COUNT,
        count: totalUsersCount
    })
    //создание preloader
export const toggleIsFetching = (isFetching) => ({
    type: TOGLE_IS_FETCHING,
    isFetching
})
export const toggleFollowingProgress = (isFetching, userID) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userID
})

//thunk-функци, которые внутри делают бизнесс логику,
//связанную с синхронной операцией
//в thunk диспатчим вызов action-creator
//вызывается внутри бизнеса
export const requestUsers = (page, pageUsersSize) => {
    return async(dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageUsersSize)
        usersAPI.getUsers(page, pageUsersSize)

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));

    }
}

const FollowUnfollowFlow = async(dispatch, userID, apiMethod, actionCreator) => {

    dispatch(toggleFollowingProgress(true, userID));

    let data = await apiMethod(userID);

    if (data.resultCode == 0) {
        dispatch(actionCreator(userID));
    }
    dispatch(toggleFollowingProgress(false, userID));
}


export const unfollow = (userID) => {
    return async(dispatch) => {
        FollowUnfollowFlow(dispatch, userID,
            usersAPI.unfollow.bind(usersAPI), unFollowSucces);
    }
}

export const follow = (userID) => {
    return async(dispatch) => {
        FollowUnfollowFlow(dispatch, userID,
            usersAPI.follow.bind(usersAPI), FollowSucces);
    }
}
export default usersReducer;