import React, { Component } from "react";
import "./styles.scss";

class Button extends Component {
    toggleFolder = () => this.folder.classList.toggle("open")

    render() {
        const { text, icon, children } = this.props;

        return (
            <div className="button-container">
                <button onClick={ this.toggleFolder }>
                    <span>{ text }</span>
                </button>

                <div ref={ ref => this.folder = ref } className="folder">
                    <div className="overlay" onClick={ this.toggleFolder }></div>
                    <div className="container">
                        { children }
                    </div>
                </div>
            </div>
        )
    }
}

export default Button;
