import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import CustomMuiThemeProvider from 'components/CustomMuiThemeProvider';
import {updateTheme} from "../redux/actions/AppGlobal";

function mapStateToProps(state) {
    return {
        settings: state.appGlobal.settings
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateTheme: function(theme) {
            dispatch(updateTheme(theme));
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomMuiThemeProvider));