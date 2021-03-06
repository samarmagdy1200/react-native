import { EMPLOYEE_FORM_UPDATE, EMPLOYEE_CREATE_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
    name: "",
    phone: "",
    shift: ""
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EMPLOYEE_FORM_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};