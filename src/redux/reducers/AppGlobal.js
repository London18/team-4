import AllActions from "../actions/AllActions";
import red from '@material-ui/core/colors/red';


export const appGlobalInitialState = {
    // Insert state variables here
    primaryColor: red
};

export function appGlobal(state = appGlobalInitialState, action) {
    switch (action.type) {
        /* case AllActions.ACTION_NAMESPACE.ACTION: {
            return Object.assign({}, {
                ...state,
                variable: action.value
            });
        }*/

        case AllActions.AppGlobal.CHANGE_PRIMARY_COLOR: {
            return Object.assign({}, {
                ...state,
                primaryColor: action.color
            });
        }

        default: {
            return state;
        }
    }
}
