'use strict';

import React from "react";
import  $ from 'jquery';
import 'bootstrap'

import "bootstrap/dist/css/bootstrap.css";
import './BLTab.less';


import  {Tabs, Tab} from "react-bootstrap";

/**
 * 这是一个tab标签栏
 *
 */
class BLTab extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = {
            key: 1,
            value: "nothing here!"
        }
        BLTab._this = this;
    }

    render() {
        return (
            <Tabs activeKey={this.state.key} onSelect={e=>this.handleSelect(e)} id="controlled-tab-example">
                <Tab eventKey={1} title="电子签名">电子签名详细信息</Tab>
                <Tab eventKey={2} title="时间戳">时间戳详细信息</Tab>
                <Tab eventKey={3} title="实名认证">
                    <div><input type="text" value={this.state.value} onChange={e=>this.handleChange(e)}/></div>
                </Tab>
            </Tabs>
        );
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSelect(key) {
        console.log("运行时绑定的对象${this}");
        console.log(this === BLTab._this);
        console.log(this);
        this.setState({key});
    }


    componentDidMount() {
        var p1 = new Promise(function (resolve, reject) {
            setTimeout(() => reject(new Error('fail')), 3000)
        })

        var p2 = new Promise(function (resolve, reject) {
            setTimeout(() => resolve(p1), 1000)
        })
        p2.then(result => console.log(result)).catch(error => console.log(error))
    }
}
export {BLTab}