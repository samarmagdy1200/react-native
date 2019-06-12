import { EMPLOYEE_FORM_UPDATE } from "./types";

export const employeeFormUpdate = (prop, value) => ({
    type: EMPLOYEE_FORM_UPDATE,
    payload: { prop, value }
});


// export const nameChanged = name => ({
//     type: NAME_CHANGED,
//     payload: name
// });

// export const phoneChanged = phone => ({
//     type: PHONE_CHANGED,
//     payload: phone
// });

// export const shiftChanged = shift => ({
//     type: SHIFT_CHANGED,
//     payload: shift
// });