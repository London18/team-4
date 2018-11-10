import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import PositiveButton from 'components/FormComponents/PositiveButton'

function mapStateToProps(state) {
    return {
        positiveColor: state.appGlobal.positiveColor
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PositiveButton));