import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import CustomizeForm from 'components/CustomizeForm';
import { changeSettings } from 'redux/actions/AppGlobal';

function mapStateToProps(state) {
    return {
        selectedColor: state.appGlobal.settings.selectedColor,
        selectedFontSize: state.appGlobal.settings.selectedFontSize
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeSettings: (settings) => {
            dispatch(changeSettings(settings));
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomizeForm));