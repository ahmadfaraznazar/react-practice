import React from "react";
import { Component } from "react";
import Header from "./Header";

export default class App extends Component {
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header />
                </div>
                {/*
                <Inventory />
                <Order />

                */}
            </div>
        );
    }

}