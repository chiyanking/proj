import React from "react";

/**
 * 这是一个导航栏
 * 层次结构为
 *
 */
class NavBar extends React.Component {
    render() {
        let arr = this.props.data;
        let lis = new Array();
        let i = 50138764;
        for (var item of arr) {
            lis.push(<li key={i}><a href={item.url}>{item.name}</a></li>);
            i++;
        }
        return (
            <ul className="bwizard-steps">
                {lis}
            </ul>
        );
    }
}
export {NavBar};