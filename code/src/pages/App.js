import React, { Component } from "react";
import {
    BrowserRouter,
    Redirect,
    Switch,
    Route
}                 from "react-router-dom";
import * as Pages from "pages";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={ Pages.Home } />
                    <Redirect from="/" to="/home" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
