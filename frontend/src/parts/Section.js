import React from "react";
import Home from "../components/Home";
import Login from "../components/Login";
import {
    Switch,
    Route
  } from "react-router-dom";

function Section() {
    return (
        <div>
            <Switch>
                <Route component={Home} exact path="/" />
                <Route component={Login} exact path="/login"/>
            </Switch>
        </div>
    );
}

export default Section;
