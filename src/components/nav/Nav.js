import React, {Component} from 'react';

export default class Nav extends Component {
    render() {
        return (
            <div className="ui menu">
                <div className="header item">nodes</div>
                <div className="item">home</div>
                <div className="item">list</div>
            </div>
        )
    }
}