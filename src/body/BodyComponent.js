import React, { Component } from 'react';
import axios from "axios";
import './BodyComponent.css';
import {RickAndMortyCard} from "../card/card";
import {Paginator} from "../paginator/paginator";


class BodyComponent extends Component {

    state = {
        characters : [],
        info: {}
    };

    componentDidMount() {
        axios.get("https://rickandmortyapi.com/api/character/").then(result => {
                this.setState({characters: result.data.results});
                this.setState({info: result.data.info})
            }
        );
    }

    onClickPage(page) {
        axios.get("https://rickandmortyapi.com/api/character/?page=" + page).then(result => {
                this.setState({characters: result.data.results});
                this.setState({info: result.data.info})
                window.scrollTo(0,0);
            }
        );
    }

    render() {

        return (
            <div>

                <div className="body-component">
                    {this.state.characters.map((value, index) => {
                        return <RickAndMortyCard value={value} key={index} />
                    })}
                </div>
                <div className="horizontal-align">
                    <Paginator value={this.state.info} onClick={this.onClickPage.bind(this)} />
                </div>

            </div>

        )
    }
}

export default BodyComponent;
