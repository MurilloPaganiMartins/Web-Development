import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route  path="/login">
                <Login />
            </Route>
            <Route  path="/signup">
                <Signup />
            </Route>
        </Switch>
    );
}

export default Routes