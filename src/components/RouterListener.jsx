import React from 'react';
import { withRouter } from 'react-router-dom';

const RouterListener = ({history, children, onChange}) => {
    history.listen((location) => {
        if (onChange !== undefined) {
            onChange(this, location.pathname);
        }
    });

    return <div>{children}</div>;
};

export default withRouter(RouterListener);