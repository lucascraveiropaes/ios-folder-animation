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
                    <Route path="/ios-folder-animation" component={ Pages.Home } />
                    <Redirect from="/" to="/ios-folder-animation" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
