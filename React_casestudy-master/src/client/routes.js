import React from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import sharedRoutes from "../shared/routes";

export default (
    <Router>
        <div>
        {sharedRoutes.map(route => (
            <Route {...route} />
        ))}
        </div>
    </Router>
);
