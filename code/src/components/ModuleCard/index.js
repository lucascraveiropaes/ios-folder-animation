import React, { Component } from "react";
import Carousel             from "nuka-carousel";
import { MenuButton, Icon } from "components";
import data                 from "data.js";
import "./styles.scss";

const pageName= "iOS Folder Animation";

class ModuleCard extends Component {
    constructor(props) {
        super(props);

        this.menus = data.filter(el => el.parent_id === props.item.id);

        this.state = {
            index: 0,
            menu: -1,
        }
    }

    menus = []

    onEscPress = e => {
         // If user press esc
        if(e.keyCode === 27) {
            this.folder.classList.remove("open");
            setTimeout(this.resetState, 500);
            this.updateURL(true);
        }
    }

    resetState = () => this.setState({ index: 0, menu: -1 });

    getURLParams = () => {
        const url = window.location.href.split("?")[1];
        const params = {};

        if (url) {
            const paramsArr = url.split("&");

            for (let param of paramsArr) {
                const arr = param.split("=");
                params[arr[0]] = arr[1];
            }
        }

        return params;
    }

    componentDidMount = () => {
        document.addEventListener("keydown", this.onEscPress, false);

        const params = this.getURLParams();
        let folder = null;

        if (params.folder) {
            if (this.folder.id === params.folder) {
                this.folder.classList.toggle("open");
            }
        }
    }

    componentWillUnmount = () => document.removeEventListener("keydown", this.onEscPress, false);

    updateURL = (clear = false) => {
        if (!clear && this.folder.classList.contains("open") === false) {
            const menu = data.find(el => el.id === this.props.item.id);
            const path = menu.path.replace("/", "");

            window.history.pushState({
                id: path
            }, pageName, `${window.location.href}?folder=${path}`);
        } else {
            window.history.pushState(null, "", window.location.href.replace(`?folder=${this.folder.id}`, ""));
        }
    }

    toggleFolder = () => {
        if (this.menus.length === 0)
            return window.location.href = this.props.item.path;

        if (this.state.index !== 0)
            return this.setState({ index: 0 });

        this.updateURL();

        this.folder.classList.toggle("open");
        setTimeout(this.resetState, 500);
    }

    onMenuClick = i => this.setState({ index: 1, menu: i.id });

    onSubmenuClick = i => window.location.href = i.path;

    render() {
        const { index, menu } = this.state;
        const { item } = this.props;
        const path = item.path.replace("/", "");
        let menuItem = null;

        if (menu > -1)
            menuItem = data.find(el => el.id === menu);

        return (
            <div className="button-container">
                <button className="module-button" onClick={ this.toggleFolder }>
                    <Icon name={ path } size={ 60 }/>
                    <span>{ item.name }</span>
                </button>

                <div ref={ ref => this.folder = ref } className="folder" id={ path }>
                    <div className="overlay" onClick={ this.toggleFolder }></div>
                    <div className="container">
                        <Carousel speed={ 250 } slideIndex={ index } withoutControls={ true } swiping={ false } disableEdgeSwiping={ true } dragging={ false } pauseOnHover={ false }>
                            <div className="menu-list">
                                { this.menus.map((i, k) =>
                                    <MenuButton key={`menu_${k*i.id}_${i.id}`} menu={ i } onClick={ this.onMenuClick }/>
                                )}
                            </div>
                            <div>
                                {(menu > -1) && [
                                    <div className="header-container">
                                        <button onClick={ this.toggleFolder }>
                                            <Icon name="arrow-back" size={ 25 }/>
                                        </button>
                                        <h4>{ menuItem.name }</h4>
                                    </div>,
                                    <div className="menu-list" style={{ paddingTop: 0 }}>
                                        { data.filter(el => el.parent_id === menu).map((i, k) =>
                                            <MenuButton key={`submenu_${k}_${i.id}`} menu={ i } onClick={ this.onSubmenuClick }/>
                                        )}
                                    </div>
                                ]}
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModuleCard;
