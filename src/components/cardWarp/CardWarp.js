import React, {Component} from 'react';
import Card from '../card/Card.js';

// 可以通过props从父级向子集传递数据
// this.props是一个对象 存放了所有传入的props集合
// const data = [
//     {
//         name: 'zxy',
//         begin: '2013',
//         imgSrc: require('../../common/img/cardBg.jpg')
//     },
//     {
//         name: 'zf',
//         begin: '2011',
//         imgSrc: require('../../common/img/cardBg.jpg')
//     },
//     {
//         name: 'bx',
//         begin: '2012',
//         imgSrc: require('../../common/img/cardBg.jpg')
//     }
// ]





export default class CardWarp extends Component {
    render() {
        let {data} = this.props;
        let cards = data.map((elt, i) => {
            return <Card {...elt} key = {i}></Card>
        });

        return (
            <div className="ui cards">
               {cards}
            </div>
        )
    }
}