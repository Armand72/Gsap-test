import React, { Component } from "react";
import "./assets/styles/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Routes from "./routing/Route";
import { AnimatePresence } from "framer-motion";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
              <Route
        render={({ location }) => (
         <AnimatePresence initial={false} exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route component={Routes} />
        </Switch>
        </AnimatePresence>
         )}
         />
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);
