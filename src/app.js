import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Nav from 'component/nav/Nav';
import CardWarp from './components/cardWarp/CardWarp.js';

require('../semantic/dist/semantic.min.css')


// 数据也可由顶层直接传入

const data = [
    {
        name: 'zxy',
        begin: '2013',
        imgSrc: require('./common/img/cardBg.jpg')
    },
    {
        name: 'zf',
        begin: '2011',
        imgSrc: require('./common/img/cardBg.jpg')
    },
    {
        name: 'bx',
        begin: '2012',
        imgSrc: require('./common/img/cardBg.jpg')
    }
]


class Body extends Component {
	render() {
		return (
			<div>
				
			</div>
		)
	}
}



ReactDOM.render(
	<div className="ui container">
		<Nav></Nav>
		<Body></Body>
		<CardWarp data = {data}></CardWarp>
	</div>,
	document.getElementById('root')
);


if (module.hot) {
	module.hot.accept();
}