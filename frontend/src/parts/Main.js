import React from "react";
import Nav from "./Nav.js";
import Footer from "./Footer";
import Section from "./Section";
import { BrowserRouter as Router } from "react-router-dom";

function Main() {
    return (
        <React.Fragment>
            <Router>
                <Nav />
                <Section />
                <Footer />
            </Router>
        </React.Fragment>
    );
}

export default Main;
