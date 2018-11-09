import React from 'react';
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/es/Radio/Radio";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import RadioGroup from "@material-ui/core/es/RadioGroup/RadioGroup";

class Question extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.question}</h1>
                <div>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup
                            aria-label="gender"
                            name="gender2"
                            className={classes.group}
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel
                                value="female"
                                control={<Radio color="primary" />}
                                label="Not at all confident"
                            />
                            <FormControlLabel
                                value="male"
                                control={<Radio color="primary" />}
                                label="a little"
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
        );
    }
}