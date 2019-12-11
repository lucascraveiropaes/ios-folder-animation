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
                    <Route path="/login" component={ Pages.Login } />
                    <Redirect from="/" to="/login" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
