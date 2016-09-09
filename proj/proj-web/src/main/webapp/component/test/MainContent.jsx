'use strict';

import React from "react";
// import Navbar from "react-bootstrap/lib/NavbarHeader"
class MainContent extends React.Component {
    render() {
        let showElement;
        if (this.state.show) {
            showElement = <h2 onClick={()=>this.clickHandle()} ref="name">{this.props.name}</h2>;
        }
        return (
            <div id="zhang">
                {showElement}
                <Link {...this.props} site={this.state.site}/>
            </div>
        );
    }

    clickHandle() {
        alert("ok");
    }

    // React.createClass  getInitialState in React.Component use constructor instead !
    constructor(...args) {
        super(...args);
        this.state = {
            name: "点我！",
            site: "nothing to anywhere!",
            show: true
        }
    }

    //   this  here deal or use  other framework  like  JQuery  bootstrap.min.js
    componentDidMount() {

    }
}
var Link = React.createClass({
    render: function () {
        return <a className="btn btn-default">{this.props.site}</a>;
    }
});
export default MainContent;