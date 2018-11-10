import React from 'react';
import { Bar } from 'react-chartjs-2';
import { dataStore } from 'data/dataStore';

export class TimePerQuestionProgressChart extends React.Component {
    state = {
        datasetLabel: undefined,
        labels: undefined,
        data: undefined
    };

    componentDidMount() {
        let questionId = this.props.questionId;
        let userId = 1;

        dataStore.getUserAnswers(userId, questionId, (data) => {
            data.sort( (a, b) => a.date - b.date );

            this.setState({
                datasetLabel: 'Time spent on question',
                labels: data.map( (answer) => answer.date.toLocaleDateString() ),
                data: data.map( (answer) => answer.responseTime )
            })
        })
    }

    render() {
        return (
            this.state.data === undefined
                ? <div/>
                : <Bar
                    data={{
                        labels: this.state.labels,
                        datasets: [{
                            label: this.state.datasetLabel,
                            data: this.state.data
                        }]
                    }}
                    width={1}
                    height={500}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
        );
    }
}
//
// ProgressSnackBar.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
//
// export default withStyles(styles2)(ProgressSnackBar);