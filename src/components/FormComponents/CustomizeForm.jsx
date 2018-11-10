import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio'
import Slider from '@material-ui/lab/Slider'
import NoStyleLink from "components/NoStyleLink";

export default class CustomizeForm extends React.Component {
    state = {
        selectedColor: 'blue',
        selectedFontSize: 18
    };

    handleColorChange = event => {
        this.setState({
            selectedColor: event.target.value
        }, () => this.saveSettings() );
    };

    handleFontSizeChange = (event, value) => {
        this.setState({
            selectedFontSize: value
        }, () => this.saveSettings());
    };

    saveSettings(){
        //Redirect to form
        //Save it on db?
        this.props.changeSettings({
            selectedColor: this.state.selectedColor,
            selectedFontSize: this.state.selectedFontSize});
    };

    render() { 
        let style = {
            textAlign: 'center'
        };

        return (
            <div>
                <Grid container spacing={16} direction="column">
                    <Grid item xs={12}>
                        <h1 style={style}>Customize</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <h2 style={{textAlign: 'left'}}>Button Color:</h2>
                    </Grid>
                    <Grid container direction="row" justify="center">
                        <div>
                            <Radio 
                                checked={this.state.selectedColor === 'blue'}
                                onChange={this.handleColorChange}
                                value="blue"
                                style={{color:"blue"}}/>
                            <Button 
                                variant="contained" 
                                size="large"
                                style={{
                                    color: 'white',
                                    backgroundColor: 'blue'
                                }}>
                                    Blue
                            </Button>
                        </div>
                        <div>
                            <Radio 
                                checked={this.state.selectedColor === 'green'}
                                onChange={this.handleColorChange}
                                value = 'green'
                                style={{color: 'green'}}/>
                            <Button 
                                variant="contained" 
                                size="large"
                                style={{
                                    color: 'white',
                                    backgroundColor: 'green'
                                }}>
                                    Green
                            </Button>
                        </div>
                        <div>
                            <Radio 
                                checked={this.state.selectedColor === 'red'}
                                onChange={this.handleColorChange} 
                                value = 'red'
                                style = {{color:'red'}}/>
                            <Button 
                                size="large"
                                variant="contained" 
                                style={{
                                    color: 'white',
                                    backgroundColor: 'red'
                                }}>
                                    Red
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <h2 style={{textAlign: 'left'}}>Text size:</h2>
                    </Grid>

                    <Grid container justify="center">
                        <Grid item xs={8}>
                            <Slider
                                value={this.state.selectedFontSize}
                                min={18}
                                max={48}
                                step={1}
                                onChange={this.handleFontSizeChange}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <p style={{fontSize: this.state.selectedFontSize, textAlign: "center"}}>Aa</p>
                        </Grid>
                    </Grid>

                    <Grid container justify="center">
                        <Grid item>
                            <NoStyleLink to="/menu">
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={() => this.saveSettings}>
                                    Submit
                                </Button>
                            </NoStyleLink>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}