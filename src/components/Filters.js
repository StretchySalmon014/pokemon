import { Form, Button } from "react-bootstrap";
import Rating from "./Rating";
import { DeckState } from "../context/Context";
import "./style.css";

const Filters = () => {

    const{pokeState: {
        byFire,
        byRating,
        sort,
        searchQuery,
    }, pokeDispatch} = DeckState();

    console.log(byFire,
        byRating,
        sort,
        searchQuery);


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
                onChange={() =>
                pokeDispatch({
                type: "SORT_BY_CP",
                payload: "lowToHigh"
                })
            }
                checked = {sort === "lowToHigh" ? true : false}
            />
            </span>
            <span>
                <Form.Check
                inline
                label = "Gen 1"
                name = "group3"
                type= "radio"
                id = {'inline-2'}
                />
            </span>
            <span>
                <Form.Check
                inline
                label = "Gen 2"
                name = "group3"
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
                name = "group2"
                type= "radio"
                id = {'inline-2'}
                onChange={() =>
                    pokeDispatch({
                    type: "FILTER_BY_FIRE",
                    })
                }
                checked={byFire}
                />
            </span>
            <span>
                <Form.Check
                inline
                label = "Grass"
                name = "group2"
                type= "radio"
                id = {'inline-3'}
                />
            </span>

            <span>
                <Form.Check
                inline
                label = "Electric"
                name = "group2"
                type= "radio"
                id = {'inline-4'}
                />
            </span>

            <span>
                <Form.Check
                inline
                label = "Normal"
                name = "group2"
                type= "radio"
                id = {'inline-5'}
                />
            </span>

            <span>
                <label style= {{paddingRight : 20}}>Rating</label>
                <Rating 
                rating = {byRating} 
                onClick = {(i) => 
                    pokeDispatch({
                        type: "FILTER_BY_RATING",
                        payload: i + 1,
                    })
                }
                style = {{cursor: "pointer"}} />
            </span>
            <div className = "filterButton">
            <Button 
            variant="light"
            onClick = {(i) => 
                pokeDispatch({
                    type: "CLEAR_FILTERS",
                    })
            }>Clear Filters</Button>
            </div>
        </div>
    )
}

export default Filters;