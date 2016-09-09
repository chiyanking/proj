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
// const menu_hear = {
//     "height": "45",
//     "line-height": 45,
//     "background-color": "#e9e9e9",
//     "border-top": "1px solid #efefef",
//     "border-bottom": "1px solid #e1e1e1",
//     "padding": "0",
//     "font-size": "14",
//     "font-weight": "normal",
//     "text-align": "center"
// };

class BLAffix extends React.Component {

    render() {
        return (
            <div>
                <div className="sidebar-menu">
                    <p href="#recharge" className="nav-header menu-first collapsed" data-toggle="collapse">
                        <i class="glyphicon glyphicon-user"></i>充值
                    </p>
                    <ul id="recharge" className="nav nav-list collapse menu-second">
                        <li><a href="#"><i class="icon-edit"></i>充值一</a></li>
                    </ul>
                    <p href="#order" className="nav-header menu-first collapsed" data-toggle="collapse">
                        <i class="glyphicon glyphicon-user"></i>订单查询
                    </p>
                    <ul id="order" className="nav nav-list collapse menu-second">
                        <li><a href="#"><i class="icon-edit"></i>订单一</a></li>
                        <li><a href="#"><i class="icon-edit"></i>订单二</a></li>
                        <li><a href="#"><i class="icon-edit"></i>订单三</a></li>
                        <li><a href="#"><i class="icon-edit"></i>订单四</a></li>
                    </ul>
                    <p href="#consume" className="nav-header menu-first collapsed" data-toggle="collapse">
                        <i></i>消费查询
                    </p>
                    <ul id="consume" className="nav nav-list collapse menu-second">
                        <li><a href="#"><i class="icon-edit"></i>查询消费总览</a></li>
                        <li><a style={{padding: 0}} href="#"><i class="icon-edit"></i>查询消费明细</a></li>
                    </ul>
                </div>
            </div>
        );
    }

    componentDidMount() {
        $(".menu-second").click(function (e) {
            $("#main-content").html($(e.target).text());
        });
    }
}
export {BLAffix};