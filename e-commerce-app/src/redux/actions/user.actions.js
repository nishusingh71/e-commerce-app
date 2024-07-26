import {
  ADD_USER_EROR,
  ADD_USER_START,
  ADD_USER_SUCCESS,
  DELETE_USER_EROR,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  GET_USER_EROR,
  GET_USER_START,
  GET_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_ERROR,
  LOGOUT_USER_START,
  LOGOUT_USER_SUCCESS,
  PROFILE_EDIT_ERROR,
  PROFILE_EDIT_START,
  PROFILE_EDIT_SUCCESS,
  UPDATE_USER_EROR,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
} from "../constants/user.constants";

// get User
export const getUserStart = () => ({
  type: GET_USER_START,
});

export const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: user,
});

export const getUserError = (error) => ({
  type: GET_USER_EROR,
  payload: error,
});

// add User
export const addUserStart = (user) => ({
  type: ADD_USER_START,
  payload: user,
});

export const addUserSuccess = (user) => ({
  type: ADD_USER_SUCCESS,
  payload: user,
});

export const addUserError = (error) => ({
  type: ADD_USER_EROR,
  payload: error,
});

// update User
export const updateUserStart = (user, id) => ({
  type: UPDATE_USER_START,
  payload: {
    user,
    id,
  },
});

export const updateUserSuccess = (user, id) => ({
  type: UPDATE_USER_SUCCESS,
  payload: {
    user,
    id,
  },
});

export const updateUserError = (error) => ({
  type: UPDATE_USER_EROR,
  payload: error,
});

// delete User
export const deleteUserStart = (id) => ({
  type: DELETE_USER_START,
  payload: id,
});

export const deleteUserSuccess = (id) => ({
  type: DELETE_USER_SUCCESS,
  payload: id,
});

export const deleteUserError = (id) => ({
  type: DELETE_USER_EROR,
  payload: id,
});
// login user
export const loginUserStart = (user) => ({
  type: LOGIN_USER_START,
  payload: user,
});

export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

export const loginUserError = (error) => ({
  type: LOGIN_USER_ERROR,
  payload: error,
});

// logout user
export const logoutUserStart = () => ({
  type: LOGOUT_USER_START,
});

export const logoutUserSuccess = () => ({
  type: LOGOUT_USER_SUCCESS,
});

export const logoutUserError = (error) => ({
  type: LOGOUT_USER_ERROR,
  payload: error,
});

// profile edit
export const profileEditStart = (user, id) => ({
  type: PROFILE_EDIT_START,
  payload: {
    user,
    id,
  },
});

export const profileEditSuccess = (user, id) => ({
  type: PROFILE_EDIT_SUCCESS,
  payload: { user},
});

export const profileEditError = (error) => ({
  type: PROFILE_EDIT_ERROR,
  payload: error,
});
