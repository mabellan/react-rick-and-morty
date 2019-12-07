import React from "react";
import {Pagination} from "react-bootstrap";
import './paginator.css';

export const Paginator = (value) => {
    let items = [];


    for (let number = 1; number <= value.value.pages; number++) {
        items.push(
            <Pagination key={number} >
                <Pagination.Item  onClick={() => value.onClick(number)} >
                    {number}
                </Pagination.Item>
            </Pagination>

        );
    }
    return items;
};


