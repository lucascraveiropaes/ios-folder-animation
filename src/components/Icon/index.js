import React, { Component } from "react";
import icons                from "./icons/";
import "./styles.scss";

const excelReports = ["txt-profile", "municipio-profile", "iddf", "base-aneis", "base-circuitos", "base-enlaces"];

class Icon extends Component {
    render() {
        let { name, size, style } = this.props;
        name = name.toLowerCase();

        if (!icons[name]) {
            if (name.search("listar") > -1) {
                name = "listar";
            } else if (name.search("carga") > -1 || name.search("massiva") > -1) {
                name = "carga";
            } else if (excelReports.includes(name)) {
                name = "relatorios-excel";
            }
        }

        return (
            <img src={ icons[name] } className="dash-icon" style={{ width: size, height: size, ...style }} alt={ name }/>
        )
    }
}

export default Icon;
