import React, { Component } from "react";
import icons                from "./icons/";
import "./styles.scss";

class Icon extends Component {
    render() {
        const { name, size, style } = this.props;

        return (
            <img src={ icons[name] } className="dash-icon" style={{ width: size, height: size, ...style }} alt={ name }/>
        )
    }
}

export default Icon;
