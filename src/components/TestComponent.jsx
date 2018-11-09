import React from "react";
import Button from "@material-ui/core/es/Button/Button";
import green from '@material-ui/core/colors/green';

export default class TestComponent extends React.Component {
    render() {
        return (
            <Button onClick={() => this.props.changePrimaryColor(green)}>
                Change to green
            </Button>
        );
    }
}