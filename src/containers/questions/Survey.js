import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Survey from 'components/questions/Survey';
import {nextQuestion} from "redux/actions/AppGlobal";

function mapStateToProps(state) {
    return {
        questionIdx: state.appGlobal.questionIdx
    };
}

function mapDispatchToProps(dispatch) {
    return {
        nextQuestion: function() {
            dispatch(nextQuestion());
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Survey))
