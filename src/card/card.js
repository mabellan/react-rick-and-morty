import {Card} from "react-bootstrap";
import React from 'react';
import './card.css';

export const RickAndMortyCard = (value) => {
    const borderClass = getClass(value.value);
    return <Card className={borderClass}>
        <Card.Img variant="top" src={value.value.image}/>
        <Card.Body>
            <Card.Title>{value.value.name}</Card.Title>
            <Card.Subtitle>Species: {value.value.species}</Card.Subtitle>
            <Card.Text>Status: {value.value.status}</Card.Text>
        </Card.Body>
        <Card.Footer>
            <Card.Text>Created at: {value.value.created}</Card.Text>
        </Card.Footer>

    </Card>
};

let getClass = (value)  => {
    let borderClass = '';
    if (value.status === 'Alive') {
        borderClass = 'green-border card';
    } else if (value.status === 'Dead'){
        borderClass = 'red-border card ';
    } else {
        borderClass = 'gray-border card';
    }

    return borderClass;
};
