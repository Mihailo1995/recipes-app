import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Recipe extends Component {
    render() {
        const {
            recipe: { publisher, title, source_url, recipe_id, image_url }
        } = this.props;

        return (
            <div className="col-10 my-3 mx-auto col-md-6 col-lg-4">
                <div className="card" style={{ height: "100%" }}>
                    <img
                        src={image_url}
                        alt="recipe"
                        className="img-card-top"
                        style={{ height: "14rem" }}
                    />
                    <div className="card-body">
                        <h6>{title}</h6>
                        <h6 className="text-warning text-slanted">
                            Provided by {publisher}
                        </h6>
                    </div>
                    <div className="card-footer">
                        <Link
                            to={`/recipes/${recipe_id}`}
                            className="btn btn-primary"
                        >
                            Details
                        </Link>
                        <a
                            href={source_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success mx-2"
                        >
                            Recipe URL
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Recipe;
