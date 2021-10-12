import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Routes
import Login from "pages/Login";
import Signup from "pages/Signup";
import Home from "pages/HomePage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
