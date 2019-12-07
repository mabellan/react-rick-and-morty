import React, { Component } from 'react';
import NavbarComponent from "../navbar/NavbarComponent";
import axios from "axios";
import './episode.css'
import {RickAndMortyCard} from "../card/card";

class Episode extends Component {

    episodeId;

    state = {
        characters: [],
        episode: {
            characters : []
        },

    };

    componentDidMount() {
        this.episodeId = this.props.match.params.id;
        axios.get("https://rickandmortyapi.com/api/episode/" + this.episodeId).then(result => {
                this.setState({episode: result.data});
                let characters = [];

                result.data.characters.map(character => {
                    axios.get(character).then(result => {
                        characters.push(result.data);
                        this.setState({characters: characters});
                    });
                })
        });
    }

    render() {
        return (
            <div>
                <NavbarComponent />

                <h1 className='_align-items-center'>{this.state.episode.name} - {this.state.episode.episode}</h1>
                <h4 className='_align-items-center'>Emited: {this.state.episode.air_date}</h4>
                <div className='_align-items-center'># characters: {this.state.episode.characters.length}</div>
                <div className="body-component">
                {this.state.characters.map((value, index) => {
                    return <RickAndMortyCard value={value} key={index} />
                })}
                </div>
            </div>
        );
    }
}

export default Episode;
