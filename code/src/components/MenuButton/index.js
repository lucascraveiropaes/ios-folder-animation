import React, { Component } from "react";
import { Icon }             from "components";
import "./styles.scss";

class MenuButton extends Component {
    render() {
        const { menu, onClick } = this.props;
        const arr = menu.path.split("/");

        return (
            <div className="menu-button-container">
                <button className="menu-button" onClick={() => onClick(menu)}>
                    <Icon name={ arr[arr.length - 1] } size={ 70 }/>
                </button>
                <span>{ menu.name }</span>
            </div>
        )
    }
}

export default MenuButton;
