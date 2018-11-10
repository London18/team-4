import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import CustomMuiThemeProvider from 'components/CustomMuiThemeProvider';

function mapStateToProps(state) {
    return {
        primaryColor: {
            main: state.appGlobal.primaryColor
        }
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomMuiThemeProvider));