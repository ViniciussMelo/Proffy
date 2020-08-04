import {BrowserRouter, Route, Switch} from "react-router-dom";
import Landing from "./pages/Landing";
import React from "react";
import TeatcherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Landing/>
                </Route>
                <Route exact path="/study">
                    <TeatcherList/>
                </Route>
                <Route exact path="/give-classes">
                    <TeacherForm/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
