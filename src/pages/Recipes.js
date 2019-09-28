import React, { Component } from "react";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { tempList } from "../data/tempList";

export class Recipes extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        recipes: tempList,
        search: ""
    };

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <>
                <Search
                    search={this.state.search}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <RecipeList recipes={this.state.recipes} />
            </>
        );
    }
}

export default Recipes;
