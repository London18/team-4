import React from 'react';
import Survey from "containers/questions/Survey";

export default class App extends React.Component {
    render() {
        return (
            <Survey
                questions={[
                    {
                        type: 'slider',
                        choices: ['no at all confident', 'a little', 'moderate', 'a lot', 'completely confident'],
                        question: 'Learning productively on the job'
                    },
                    {
                        type: 'slider',
                        choices: ['no at all confident', 'a little', 'moderate', 'a lot', 'completely confident'],
                        question: 'solving problems at work'
                    },
                    {
                        type: 'slider',
                        choices: ['no at all confident', 'a little', 'moderate', 'a lot', 'completely confident'],
                        question: 'accomplishing recent work well under time and schedule constraints'
                    },
                    {
                        type: 'slider',
                        choices: ['no at all confident', 'a little', 'moderate', 'a lot', 'completely confident'],
                        question: 'understanding what is expected of you in your current role'
                    }
                ]}
            />
        );
    }
}
