import { Form, Button } from "react-bootstrap";
import {useState} from 'react';
import Rating from "./Rating"
import "./style.css";

const Filters = () => {
    const [rate, setRate] = useState(3);

    return (
        <div className="filters">
            <span className = "title"> Sort By</span>
            <span>
                <Form.Check
                inline
                label = "CP"
                name = "group1"
                type= "radio"
                id = {'inline-1'}
                />
            </span>
            <span>
                <Form.Check
                inline
                label = "Gen 1"
                name = "group1"
                type= "radio"
                id = {'inline-2'}
                />
            </span>
            <span>
                <Form.Check
                inline
                label = "Gen 2"
                name = "group1"
                type= "radio"
                id = {'inline-3'}
                />
            </span>
            <span className = "title"> Types </span>
            <span>
                <Form.Check
                inline
                label = "Water"
                name = "group2"
                type= "radio"
                id = {'inline-1'}
                />
            </span>
            <span>
                <Form.Check
                inline
                label = "Fire"
                name = "group1"
                type= "radio"
                id = {'inline-2'}
                />
            </span>
            <span>
                <Form.Check
                inline
                label = "Grass"
                name = "group1"
                type= "radio"
                id = {'inline-3'}
                />
            </span>

            <span>
                <Form.Check
                inline
                label = "Electric"
                name = "group1"
                type= "radio"
                id = {'inline-4'}
                />
            </span>

            <span>
                <Form.Check
                inline
                label = "Normal"
                name = "group1"
                type= "radio"
                id = {'inline-5'}
                />
            </span>

            <span>
                <label style= {{paddingRight : 20}}>Rating</label>
                <Rating 
                rating = {rate} 
                onClick = {(i) => setRate(i + 1)}
                style = {{cursor: "pointer"}} />
            </span>
            <div className = "filterButton">
            <Button variant="light">Clear Filters</Button>
            </div>
        </div>
    )
}

export default Filters;