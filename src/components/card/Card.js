import React, { Component } from 'react';
import PropTypes from 'prop-types';

// prop验证

let propTypes = {
    imgSrc: PropTypes.string,
    name: PropTypes.string,
    begin: PropTypes.string
}


export default class Card extends Component {
    constructor() {
        super();
        this.state = {
            isHeartON: false
        }

        this.heartClick = this.heartClick.bind(this);
    }

    heartClick() {
        let {isHeartON} = this.state;
        isHeartON = !isHeartON;
        this.setState({
            isHeartON
        })
    }
    render() {
        let { name, begin, imgSrc } = this.props;
        let { isHeartON } = this.state;
        let heartClass = isHeartON ? '' : 'empty';

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
                    <span className="right floated"> 
                        <i 
                            className={`${heartClass} heart icon`}
                            onClick = {this.heartClick}>
                        </i> 17 likes </span>
                    <a><i className="user icon"></i> 22 Friends </a>
                </div>
            </div>
        )
    }
}

Card.PropTypes = propTypes;