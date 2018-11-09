import AllActions from "../actions/AllActions";

const appGlobalInitialState = {
    // Insert state variables here
};

export function appGlobal(state = appGlobalInitialState, action) {
    switch (action.type) {
        /* case AllActions.ACTION_NAMESPACE.ACTION: {
            return Object.assign({}, {
                ...state,
                variable: action.value
            });
        }*/

        default: {
            return state;
        }
    }
}
