import React, { Component } from "react";
import { CardButton }       from "components";

class Login extends Component {
    render() {
        const arr = [1, 2, 3, 4];

        return (
            <div className="container login">
                { arr.map((i, k) => (
                    <CardButton key={ k } text={`Opção ${i}`} icon="icon">
                        <span>Conteúdo da opção { i }</span>
                    </CardButton>
                )) }
            </div>
        );
    }
}

export default Login;
