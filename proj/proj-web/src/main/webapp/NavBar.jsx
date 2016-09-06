import React from "react";

/**
 * 这是一个导航栏
 * 层次结构为
 *
 */
class NavBar extends React.Component {
    render() {
        let {url,...other}=this.props;
        return (
            <ol>
                <li><a href={url}>{other.name}</a> </li>
            </ol>
        );
    }
}
export default NavBar;