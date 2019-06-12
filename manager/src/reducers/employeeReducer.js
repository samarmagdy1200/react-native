import { FETCH_EMPLOYEES_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
    employees: []
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_EMPLOYEES_SUCCESS:
            return { employees: action.payload };
        default:
            return state;
    }
};