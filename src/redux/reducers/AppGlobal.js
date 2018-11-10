import AllActions from "../actions/AllActions";

export const appGlobalInitialState = {
    // Insert state variables here
    primaryColor: '#ff0000',
    positiveColor: '#00ff00',
    negativeColor: '#ff0000',
    settings: {
        selectedColor: 'blue',
        selectedFontSize: 18
    }
};

export function appGlobal(state = appGlobalInitialState, action) {
    switch (action.type) {
        /* case AllActions.ACTION_NAMESPACE.ACTION: {
            return Object.assign({}, {
                ...state,
                variable: action.value
            });
        }*/

        case AllActions.AppGlobal.CHANGE_PALETTE_COLOR: {
            return Object.assign({}, {
                ...state,
                [action.palette]: action.color  
            })
        }

        case AllActions.AppGlobal.CHANGE_SETTINGS: {
            return Object.assign({}, {
                ...state,
                settings: action.settings
            })
        }

        default: {
            return state;
        }
    }
}
