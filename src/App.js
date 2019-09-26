import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import Default from "./pages/Default";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <main>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/recipes" exact component={Recipes} />
                        <Route path="/recipes/:id" component={SingleRecipe} />
                        <Route component={Default} />
                    </Switch>
                </main>
            </BrowserRouter>
        );
    }
}

export default App;
