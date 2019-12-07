import React, { Component } from 'react';
import NavbarComponent from "../navbar/NavbarComponent";
import axios from "axios";
import Table from "react-bootstrap/Table";
import {Paginator} from "../paginator/paginator";

class Location extends Component {

    state = {
        locations: [],
        info: {}
    };

    componentDidMount() {
        this.getLocations(0);
    }

    onClickPage(page) {
        this.getLocations(page);
    }

    getLocations(page) {
        axios.get("https://rickandmortyapi.com/api/location/?page=" + page).then(result => {
            this.setState({locations: result.data.results});
            this.setState({info: result.data.info})
            window.scrollTo(0,0);
        });
    }
    render() {
        return (
            <div>
                <NavbarComponent>

                </NavbarComponent>
                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Dimension</th>
                        <th>Type</th>
                        <th># Habitants</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.locations.map((value, index) => {
                        return <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.type}</td>
                            <td>{value.dimension}</td>
                            <td>{value.residents.length}</td>
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

export default Location;
