import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'


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
				<span>12312312</span>
			</div>
		)
	}
}



// ReactDOM.render(
// 	<div className="ui container">
// 		<Nav></Nav>
// 		<Body></Body>
// 		<CardWarp data = {data}></CardWarp>
// 	</div>,
// 	document.getElementById('root')
// );

ReactDOM.render(
	<Router>
        <div>
            <p>
                <Link to="/">首页</Link>
            </p>
            <p>
                <Link to="/index">主页</Link>
            </p>
            <Route exact path="/" component={Nav}/>
            <Route path="/index" component={Body}/>
        </div>
    </Router>,
	document.getElementById('root')
);



if (module.hot) {
	module.hot.accept();
}