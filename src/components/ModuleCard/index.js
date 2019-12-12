import React, { Component } from "react";
import Carousel             from "nuka-carousel";
import { MenuButton, Icon } from "components";
import data                 from "data.js";
import "./styles.scss";

class ModuleCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            menu: 0,
        }
    }

    toggleFolder = () => {
        this.folder.classList.toggle("open");
        setTimeout(() => {
            this.setState({ index: 0 })
        }, 500)
    }

    onMenuClick = i => this.setState({ index: 1, menu: i.id });

    onSubmenuClick = i => console.log("Simbora");

    render() {
        const { index, menu } = this.state;
        const { item } = this.props;
        const menus = data.filter(el => el.parent_id === item.id);

        return (
            <div className="button-container">
                <button className="module-button" onClick={ this.toggleFolder }>
                    <Icon name={ item.path.replace("/", "") } size={ 60 }/>
                    <span>{ item.name }</span>
                </button>

                <div ref={ ref => this.folder = ref } className="folder">
                    <div className="overlay" onClick={ this.toggleFolder }></div>
                    <div className="container">
                        <Carousel slideIndex={ index } withoutControls={ true } swiping={ false } disableEdgeSwiping={ true } dragging={ false } pauseOnHover={ false }>
                            <div className="menu-list">
                                { menus.map((i, k) =>
                                    <MenuButton k={`menu_${k*i.id}_${i.id}`} menu={ i } onClick={ this.onMenuClick }/>
                                )}
                            </div>
                            <div className="menu-list">
                                {(menu) && (
                                    data.filter(el => el.parent_id === menu).map((i, k) =>
                                        <MenuButton k={`submenu_${k}_${i.id}`} menu={ i } onClick={ this.onSubmenuClick }/>
                                    )
                                )}
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModuleCard;
