import firebase from "@firebase/app";
import "@firebase/auth";
import { Actions } from "react-native-router-flux";

import { 
        EMAIL_CHANGED, 
        PASSWORD_CHANGED, 
        LOGIN_USER,
        LOGIN_USER_SUCCESS, 
        LOGIN_USER_FAIL 
} from "./types";

// Action Creator
export const emailChanged = email => ({
        type: EMAIL_CHANGED,
        payload: email
});

export const passwordChanged = password => ({
        type: PASSWORD_CHANGED,
        payload: password
});

export const loginUser = (email, password) => dispatch => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
                .then(user => onLoginUserSuccess(dispatch, user))
                .catch(() => {
                        firebase.auth().createUserWithEmailAndPassword(email, password)
                                .then(user => onLoginUserSuccess(dispatch, user))
                                .catch(() => onLoginUserFail(dispatch));
                });
};

const onLoginUserSuccess = (dispatch, user) => {
        Actions.main();

        dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: user
        });
};

const onLoginUserFail = dispatch => {
        dispatch({
                type: LOGIN_USER_FAIL
        });
};