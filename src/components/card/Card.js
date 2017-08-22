import React, { Component } from 'react';


export default class Card extends Component {
    render() {
        let {name, begin, imgSrc} = this.props;
        return (
            <div className="ui card">
                <div className="image">
                    <img src={imgSrc} />
                </div>
                <div className="content">
                    <a className="header">{name}</a>
                    <div className="meta">
                        <span className="date">{begin}年加入</span>
                    </div>
                    <div className="description">{name} is an art director living in New York. </div>
                </div>
                <div className="extra content">
                    <a><i className="user icon"></i> 22 Friends </a>
                </div>
            </div>
        )
    }
}