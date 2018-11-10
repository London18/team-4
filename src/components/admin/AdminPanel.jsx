import {dataStore} from 'data/dataStore';

class AdminPanel extends React.Component {
    mockData(question, userId) {
        let times = Math.random()
    }

    render() {
        return (
            <div>
                <UserSearch />
                <Results data=/>
            </div>
        );
    }
}