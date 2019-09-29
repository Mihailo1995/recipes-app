import React, { Component } from "react";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { tempList } from "../data/tempList";

export class Recipes extends Component {
    // constructor(props) {
    //     super(props);
    //     // if we don't use async await arrow function, we must bind "this" inside of constructor (or maybe not, and we can use normal function)
    //     this.getRecipes = this.getRecipes.bind(this);
    // }

    state = {
        recipes: tempList,
        search: "",
        url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
        base_url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
        query: "&q=",
        error: ""
    };

    getRecipes = async () => {
        try {
            const response = await fetch(this.state.url);
            const data = await response.json();
            console.log(data);
            // if there is no searched recipe
            if (data.recipes.length === 0) {
                this.setState({
                    error: "Recipe Not Found"
                });
            } else {
                this.setState({
                    recipes: data.recipes,
                    error: ""
                });
            }
        } catch (err) {
            console.error(err);
        }
    };

    componentDidMount() {
        this.getRecipes();
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { base_url, query, search } = this.state;
        this.setState(
            {
                url: `${base_url}${query}${search}`,
                search: ""
            },
            // we need to make this callback to update fetch(this.state.url) inside of getRecipes function
            () => this.getRecipes()
        );
    };

    render() {
        return (
            <>
                <Search
                    search={this.state.search}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                {this.state.error ? (
                    <section>
                        <div className="row">
                            <div className="col">
                                <h2 className="text-orange text-center mt-5">
                                    {this.state.error}
                                </h2>
                            </div>
                        </div>
                    </section>
                ) : (
                    <RecipeList recipes={this.state.recipes} />
                )}
            </>
        );
    }
}

export default Recipes;
