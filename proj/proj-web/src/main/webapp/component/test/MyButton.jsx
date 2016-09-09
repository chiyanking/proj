'use strict';


import React from "react";
import {Button}  from 'react-bootstrap';


class Mybutton extends React.Component {
    render() {
        return (<div></div>);
    }

    onClickHand = function () {
        console.log(this.props);
        console.log(this.state);
    }
}

export default Mybutton;