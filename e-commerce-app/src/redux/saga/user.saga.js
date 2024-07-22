import { put, takeLatest } from "redux-saga/effects";
import {
  addUserToAPI,
  deleteUserToAPI,
  getUserFromAPI,
  updateUserToAPI,
} from "../services/user.services";
import {
  addUserError,
  deleteUserError,
  getUserError,
  getUserStart,
  getUserSuccess,
  updateUserError,
} from "../actions/user.actions";
import {
  ADD_USER_START,
  DELETE_USER_START,
  GET_USER_START,
  UPDATE_USER_START,
} from "../constants/user.constants";

function* getUser() {
  try {
    let result = yield getUserFromAPI();
    yield put(getUserSuccess(result));
  } catch (error) {
    yield put(getUserError(error.message));
  }
}

function* addUser({ payload }) {
  try {
    yield addUserToAPI(payload);
    yield put(getUserStart());
  } catch (error) {
    yield put(addUserError(error.message));
  }
}

function* updateUser({ payload }) {
  try {
    yield updateUserToAPI(payload.user, payload.id);
    yield put(getUserStart());
  } catch (error) {
    yield put(updateUserError(error.message));
  }
}

function* deleteUser({ payload }) {
  try {
    yield deleteUserToAPI(payload);
    yield put(getUserStart());
  } catch (error) {
    yield put(deleteUserError(error.message));
  }
}

export default function* user() {
  yield takeLatest(GET_USER_START, getUser);
  yield takeLatest(ADD_USER_START, addUser);
  yield takeLatest(UPDATE_USER_START, updateUser);
  yield takeLatest(DELETE_USER_START, deleteUser);
}
