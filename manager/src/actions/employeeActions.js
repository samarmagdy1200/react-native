import firebase from '@firebase/app';
import '@firebase/database';
import '@firebase/auth';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

import {
  EMPLOYEE_CREATE_SUCCESS,
  FETCH_EMPLOYEES_SUCCESS
} from '../actions/types';

export const employeeCreate = (name, phone, shift) => dispatch => {
  const currentUser = firebase.auth().currentUser;

  // create employee
  firebase
    .database()
    .ref(`/users/${currentUser.uid}/employees`)
    .push({
      name,
      phone,
      shift
    })
    .then(() => {
      dispatch({
        type: EMPLOYEE_CREATE_SUCCESS
      });

      Actions.pop();
    });
};

export const employeeEdit = (id, name, phone, shift) => dispatch => {
  const { uid } = firebase.auth().currentUser;

  firebase
    .database()
    .ref(`/users/${uid}/employees/${id}`)
    .set({ name, phone, shift, car: 'BMW' })
    .then(() => {
      Actions.pop();
    });
};

export const employeeDelete = id => dispatch => {
  const { uid } = firebase.auth().currentUser;

  firebase
    .database()
    .ref(`/users/${uid}/employees/${id}`)
    .remove()
    .then(() => {
      Actions.pop();
    });
};

export const fetchEmployees = () => dispatch => {
  const { uid } = firebase.auth().currentUser;

  firebase
    .database()
    .ref(`/users/${uid}/employees`)
    .on('value', snapshot => {
      const employeesObj = snapshot.val();

      const employeesArr = _.map(employeesObj, (value, key) => {
        return { ...value, id: key };
      });

      dispatch({
        type: FETCH_EMPLOYEES_SUCCESS,
        payload: employeesArr
      });
    });
};
