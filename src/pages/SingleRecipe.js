import React, { Component } from "react";
import { Link } from "react-router-dom";
import { tempDetails } from "../data/tempDetails";

export class SingleRecipe extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props); // ► { history, location, match, staticContext }
        const id = this.props.match.params.id;

        this.state = {
            recipe: tempDetails,
            id: id,
            loading: false
        };
    }

    render() {
        const {
            image_url,
            ingredients,
            publisher,
            publisher_url,
            source_url,
            title
        } = this.state.recipe;

        // if (loading: true)
        if (this.state.loading) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-10 my-3 mx-auto col-md-6">
                            <h2 className="text-center text-orange">
                                Loading Recipe...
                            </h2>
                        </div>
                    </div>
                </div>
            );
        }

        // if (loading: false)
        return (
            <div className="container my-5">
                <div className="row">
                    {/* button and image column */}
                    <div className="col-10 my-3 mx-auto col-md-6">
                        <Link to="/recipes" className="btn btn-warning mb-5">
                            Back to Recipes List
                        </Link>
                        <img
                            src={image_url}
                            alt="recipe"
                            className="d-block w-100"
                            style={{ maxHeight: "30rem" }}
                        />
                    </div>
                    {/* info column */}
                    <div className="col-10 my-3 mx-auto col-md-6">
                        <h6 className="text-uppercase">{title}</h6>
                        <h6 className="text-warning text-slanted">
                            Prvided by {publisher}
                        </h6>
                        <a
                            href={publisher_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary mt-2"
                        >
                            Publisher Webpage
                        </a>
                        <a
                            href={source_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success mt-2 mx-2"
                        >
                            Recipe URL
                        </a>
                        <ul className="list-group mt-4">
                            <h2 className="mt-3 mb-4">Ingredients:</h2>
                            {ingredients.map((item, i) => (
                                <li key={i} className="list-group-item">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleRecipe;
