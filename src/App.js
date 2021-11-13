import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Movies from "./components/Movies";
import NavBar from "./components/navBar";
import Customers from "./components/Customers";
import Rentals from "./components/rentals";
import NotFound from "./components/NotFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
