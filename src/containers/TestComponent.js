import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import TestComponent from 'components/TestComponent';
import {
    changePrimaryColor
} from 'redux/actions/AppGlobal';

function mapStateToProps(state) {
    return {
        primaryColor: state.appGlobal.primaryColor
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changePrimaryColor: (color) => {
            dispatch(changePrimaryColor(color));
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TestComponent));