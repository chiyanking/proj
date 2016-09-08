import React from "react";

class MainContent extends React.Component {
    render() {
        return (
            <div id="zhang">
                 <Link {...this.props} site="www.tsign.cn"/>
            </div>
        );
    }
}
var Name = React.createClass({
    render: function () {
        let {name} = this.props;
        return <h1>{name}</h1>;
    }
});
var Link = React.createClass({
    render: function () {
        return <a className="btn btn-default" href={this.props.site}>{this.props.site}</a>;
    }
});
export default MainContent;