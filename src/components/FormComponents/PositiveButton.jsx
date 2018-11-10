import React from 'react'
import Button from '@material-ui/core/Button'

export default class PositiveButton extends React.Component {
    render() { 
        var style = {
            backgroundColor: this.props.positiveColor
        }
        console.log('style', style)
        return (
            <Button variant="contained" style={style}>{this.props.content}</Button>
        )
    }
}

