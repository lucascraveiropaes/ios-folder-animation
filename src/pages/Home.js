import React, { Component } from "react";
import { ModuleCard }       from "components";
import data                 from "../data.js";

class Login extends Component {
    render() {
        const modules = data.filter(el => el.nivel === "MODULO");

        return (
            <div className="container login">
                { modules.map((i, k) => (
                    <ModuleCard key={`${k}_${i.id}`} item={ i }/>
                )) }
            </div>
        );
    }
}

export default Login;
