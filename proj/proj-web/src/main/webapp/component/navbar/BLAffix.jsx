'use strict';

import React from "react";
import  $ from 'jquery';
import 'bootstrap'

import "bootstrap/dist/css/bootstrap.css";
import './BLAffix.less';

/**
 * 这是一个导航栏
 *
 * 数据结构 :
 *  [["一级菜单一", arr],["一级菜单一", arr],...]
 *  arr:[{name: "企业名称信息", url: "url"},{name: "设立信息", url: "#"}]
 *
 *
 例子：


 let arr = [{name: "企业名称信息", url: "#"}, {name: "设立信息", url: "#"},
 {name: "负责人信息", url: "#"}, {name: "全体合伙人名录及出资情况", url: "#"},
 {name: "委托书信息确认", url: "#"}, {name: "人员认证信息", url: "#"}, {name: "准备材料", url: "#"}];

 let data = [["一级菜单一", arr], ["一级菜单二", arr]];

 <BLAffix data={data} />

 *
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
        const prefix = "BLAffix_";
        let i = 3416574631;
        let p_ul = new Array();
        for (let [key, value] of this.props.data) {
            let keyId = prefix + i;
            let targetKeyId = "#" + keyId;
            i++;
            p_ul.push(
                <ul id={keyId} key={keyId} className="nav nav-list collapse menu-second">
                    {
                        value.map((value)=> {
                            return ( <li key={value.url}><a href={value.url}>{value.name}</a></li>)
                        })
                    }
                </ul>
            );

        }

        return (
            <div>
                <div className="sidebar-menu">
                    {p_ul}
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