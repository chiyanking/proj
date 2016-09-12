import React from "react";
// import Navbar from "react-bootstrap/lib/NavbarHeader"
import  {Breadcrumb, Button, Well, Collapse, DropdownButton, MenuItem, ButtonToolbar} from "react-bootstrap";
/**
 * 这是一个导航栏
 * 层次结构为自己看
 *
 */
class MyNavBar extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = {};
    }

    render() {
        const name_urls = this.props.data;
        let array = new Array();
        for (let item of  name_urls) {
            array.push(<Breadcrumb.Item href={item.url}>{item.name}</Breadcrumb.Item>)
        }
        return (
            <div>
                <Breadcrumb>
                    {array}
                </Breadcrumb>
            </div>
        );
    }


    componentDidMount() {
    }
}
export {MyNavBar};