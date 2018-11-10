import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import ClippedDrawer from 'components/ClippedDrawer';
import {toggleDrawer} from "../redux/actions/AppGlobal";

function mapStateToProps(state) {
    return {
        isDrawerModalOpen: state.appGlobal.isDrawerModalOpen,
        settings: state.appGlobal.settings
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleDrawer: function () {
            dispatch(toggleDrawer())
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClippedDrawer))