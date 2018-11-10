import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import UserSurvey from 'components/UserSurvey';
import {resetFormQuestion} from "redux/actions/AppGlobal";

function mapStateToProps(state) {
    return {
        questionIdx: state.appGlobal.questionIdx
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setFormFetched: function() {
            dispatch(resetFormQuestion());
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserSurvey))
