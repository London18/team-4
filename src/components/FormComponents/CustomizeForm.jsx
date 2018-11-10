import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'

export default class CustomizeForm extends React.Component {
    state = {
        selectedColor: 'blue',
        selectedFontSize: '12px'
    };

    handleColorChange = event => {
        this.setState({
            selectedColor: event.target.value
        });
    };

    handleFontSizeChange = event => {
        this.setState({
            selectedFontSize: event.target.value
        });
    }

    render() { 
        var style = {
            textAlign: 'center'
        }

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
                    <Grid container direction="row" justify="center">
                        <div>
                            <FormControl component="fieldset">
                            <FormLabel component="legend">Text Size</FormLabel>
                            <RadioGroup
                                aria-label="fontSize"
                                name="fontSize"
                                value={this.state.selectedFontSize}
                                onChange={this.handleFontSizeChange}
                            >
                                <FormControlLabel value="12px" control={<Radio />} label="aA" style={{fontSize: '12px'}}/>
                                <FormControlLabel value="14px" control={<Radio />} label="aA" style={{fontSize: '14px'}}/>
                                <FormControlLabel value="18px" control={<Radio />} label="aA" style={{fontSize: '18px'}}/>
                            </RadioGroup>
                            </FormControl>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}