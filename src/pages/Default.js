import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export class Default extends Component {
    render() {
        return (
            <Header title="Page Not Found" styleClass="default-hero">
                <h2 className="text-light text-uppercase">
                    You are in the wrong place
                </h2>
                <Link
                    to="/"
                    className="text-uppercase btn btn-secondary btn-large mt-3"
                >
                    Return Home
                </Link>
            </Header>
        );
    }
}

export default Default;
