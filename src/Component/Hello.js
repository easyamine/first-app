import React, { Component } from 'react';
import "./index.css"
import Image1 from "./images/css.svg"
import Image2 from "./images/html5.svg"
import Image3 from "./images/react.svg"
class Hello extends Component {

    render() {
        return ( <
            div >
            <
            img src = { Image3 }
            /> <
            img src = { Image2 } >
            <
            img src = { Image1 } >
            <
            /div>
        );
    }
}

export default Hello;