import { Form, Button } from "react-bootstrap";
import {useState} from 'react';
import Rating from "./Rating"
import "./style.css";

const Filters = () => {
    const [rate, setRate] = useState(3);

    return (
        <div className="filters">
            <span className = "title"> Filter Pokemon</span>
            <span>
                <Form.Check
                inline
                label = "Ascending"
                name = "group1"
                type= "radio"
                id = {'inline-1'}
                />
            </span>
            <span>
                <Form.Check
                inline
                label = "Descending"
                name = "group1"
                type= "radio"
                id = {'inline-2'}
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