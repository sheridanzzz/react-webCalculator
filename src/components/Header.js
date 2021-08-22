import React, { memo } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import App from "./App";

// eslint-disable-next-line react/display-name
const Header = memo(() => (
    <Router>
        <main>
            <nav>
                <ul>
                    <li>
                        <a href="/calculator">Calculator</a>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/calculator" component={App} />
            </Switch>
        </main>
    </Router>
));

export default Header;