/**
 * A middleware which works like `redux-promise` but also let us dispatch actions before and after the promise is
 * resolved.
 */
export function promiseMiddleware({ dispatch }) {
    return next => action => {
        if (isPromise(action.payload)) {
            if (action.beforePromise) {
                dispatch(action.beforePromise());
            }

            return action.payload.then(
                result => dispatch({ ...action, payload: result }),
                error => {
                    dispatch({ ...action, payload: error, error: true });
                }
            ).then(() => {
                if (action.afterPromise) {
                    return dispatch(action.afterPromise());
                }
            }).catch(() => {
                if (action.afterPromise) {
                    return dispatch(action.afterPromise());
                }
            });
        }

        return next(action);
    };
}

function isPromise(val) {
    return val && typeof val.then === 'function';
}