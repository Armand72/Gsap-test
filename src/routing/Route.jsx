import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "../components/Homepage";
import Branding from "../pages/branding";
import HomepageTransition from "../pages/HomepageTransition";
import HomepageTransitionDone from "../pages/HomepageTransitionDone";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/branding" component={Branding}></Route>
        <Route exact path="/transition" component={HomepageTransition}></Route>
        <Route exact path="/transitionDone" component={HomepageTransitionDone}></Route>
        {/* <PrivateRoute
          exact
          path="/dashboard/:idUser/chat/chatRoom/:idChild"
          component={ChatRoom}
        ></PrivateRoute> */}
      </Switch>
    </>
  );
};

export default Routes;
