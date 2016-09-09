'use strict';

import React from "react";
import  $ from 'jquery';
import 'bootstrap'

import "bootstrap/dist/css/bootstrap.css";
import './BLAffix.less';


import  {Breadcrumb, Button, Well, Collapse, DropdownButton, MenuItem, ButtonToolbar} from "react-bootstrap";

/**
 * 这是一个导航栏
 * 层次结构为
 *
 */

class BLAffix extends React.Component {
    static defaultProps = {
        operateContent: "#main-content"
    };  // 注意这里有分号
    static propTypes = {
        operateContent: React.PropTypes.string.isRequired
    };  // 注意这里有分号

    constructor(...args) {
        super(...args);

    }

    render() {
        BLAffix.operateContent = this.props.operateContent;
        return (
            <div>
                <div className="sidebar-menu">
                    <p href="#recharge" className="nav-header menu-first collapsed" data-toggle="collapse">
                        充值&nbsp;&nbsp;<i className="glyphicon glyphicon-shopping-cart glyphicon-adjust"></i>
                    </p>
                    <ul id="recharge" className="nav nav-list collapse menu-second">
                        <li><a href="#"><i className="icon-edit"></i>充值一</a></li>
                    </ul>
                    <p href="#order" className="nav-header menu-first collapsed" data-toggle="collapse">
                        <i className="glyphicon glyphicon-user"></i>订单查询
                    </p>
                    <ul id="order" className="nav nav-list collapse menu-second">
                        <li><a href="#"><i className="icon-edit"></i>订单一</a></li>
                        <li><a href="#"><i className="icon-edit"></i>订单二</a></li>
                        <li><a href="#"><i className="icon-edit"></i>订单三</a></li>
                        <li><a href="#"><i className="icon-edit"></i>订单四</a></li>
                    </ul>
                    <p href="#consume" className="nav-header menu-first collapsed" data-toggle="collapse">
                        <i></i>消费查询
                    </p>
                    <ul id="consume" className="nav nav-list collapse menu-second">
                        <li><a href="#"><i className="icon-edit"></i>查询消费总览</a></li>
                        <li><a style={{padding: 0}} href="#"><i className="icon-edit"></i>查询消费明细</a></li>
                    </ul>
                </div>
            </div>
        );
    }

    componentDidMount() {
        $(".menu-second").click(function (e) {
            $(BLAffix.operateContent).html($(e.target).text());
        });
    }
}
export {BLAffix};