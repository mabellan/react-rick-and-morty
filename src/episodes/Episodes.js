import React, { Component } from 'react';
import NavbarComponent from "../navbar/NavbarComponent";
import axios from "axios";
import './episodes.css';
import {Paginator} from "../paginator/paginator"
import Table from "react-bootstrap/Table";
import {Link} from "react-router-dom";

class Episodes extends Component {

    state = {
        episodes : [],
        info: {}
    };

    componentDidMount() {
        this.getEpisodes(0);
    }

    onClickPage(page) {
        this.getEpisodes(page)
    }

    handleChange(event) {
        this.getEpisodes(0, event.target.value);
    }

    getEpisodes(page, name='') {
        axios.get("https://rickandmortyapi.com/api/episode/?page=" + page+'&name='+name).then(result => {
                this.setState({episodes: result.data.results});
                this.setState({info: result.data.info});
                window.scrollTo(0,0);
            }
        );
    }



    render() {

        return (
            <div>
                <NavbarComponent>

                </NavbarComponent>
                <div className='input-episodes' onChange={this.handleChange.bind(this)}>
                    <input />

                </div>
                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Episode</th>
                        <th># Characters</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.episodes.map((value, key) => {
                        return <tr key={key}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>
                                <Link to={`/episode/${value.id}`}>{value.episode}</Link>
                            </td>
                            <td>{value.characters.length}</td>
                        </tr>
                    })}

                    </tbody>
                </Table>
                <div className="horizontal-align">
                    <Paginator value={this.state.info} onClick={this.onClickPage.bind(this)} />
                </div>
            </div>


        );

    }

}



export default Episodes;
