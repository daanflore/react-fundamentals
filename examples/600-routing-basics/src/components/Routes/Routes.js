import React, {Component} from 'react';
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import {Redirect, Route, Switch} from "react-router-dom";

class Routes extends Component {
    render() {
        return (
            <>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                {/*<Switch>*/}
                {/*	<Route path="/about">*/}
                {/*		<About/>*/}
                {/*	</Route>*/}
                {/*	<Route path="/contact">*/}
                {/*		<Contact/>*/}
                {/*	</Route>*/}
                {/*	<Route path="/">*/}
                {/*		<Home/>*/}
                {/*	</Route>*/}
                {/*</Switch>*/}

                {/*Another approach- using direct Routes, without Switch*/}
                {/*Note the 'exact' attribute on Home, otherwise it would render twice*/}
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Redirect to="/"/>
            </>
        );
    }
}

export default Routes;
