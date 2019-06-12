// Action Creator
export const selectLibrary = id => {
    // Action
    return {
        type: "select_library",
        payload: id
    };
};