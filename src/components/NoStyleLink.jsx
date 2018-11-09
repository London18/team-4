import React from 'react';
import { Link } from 'react-router-dom';

class NoStyleLink extends React.Component {
    render() {
        return (
            <Link {...this.props} style={{textDecoration: 'none', color: 'initial', ...this.props.style}}>
                {this.props.children}
            </Link>
        );
    }
}

export default NoStyleLink;