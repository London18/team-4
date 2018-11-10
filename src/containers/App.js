import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import App from 'components/App';

function mapStateToProps(state) {
    return {
        settings: state.appGlobal.settings
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
