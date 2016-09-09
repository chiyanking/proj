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
    render() {
        return (
            <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
                <Tab eventKey={1} title="电子签名">电子签名详细信息</Tab>
                <Tab eventKey={2} title="时间戳">时间戳详细信息</Tab>
                <Tab eventKey={3} title="实名认证" disabled>实名认证详细信息</Tab>
            </Tabs>
        );
    }

    constructor(...args) {
        super(...args);
        this.state = {key: 1};
    }

    handleSelect = (e)=> {
        alert('selected' + key);
        this.setState({key});
    }
}
export {BLTab};