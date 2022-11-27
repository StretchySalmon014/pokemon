import {useState, useEffect} from 'react'
import { Form, Button } from "react-bootstrap";
import { DeckState } from "../context/Context";
import "./style.css";

const Filters = () => {

    const{
    state :{ deck },
    pokeState: {
        byWater,
        byFire,
        byGrass,
        byElectric,
        byFlying,
        byGen1,
        byGen2,
        sort,
    }, pokeDispatch} = DeckState();

    console.log(byFire,
        byGen1,
        byGen2,
        sort)

    const [totalCP, setTotalCP] = useState();

    useEffect(() => {
        setTotalCP(deck.reduce((acc, curr) => acc + curr.cp, 0));
    }, [deck])


    return (
        <div className="filters">
            <span className = "title"> Sort By CP</span>
            <span>
                <Form.Check
                inline
                label = "Ascending"
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
                label = "Descending"
                name = "group1"
                type= "radio"
                id = {'inline-1'}
                onChange={() =>
                    pokeDispatch({
                    type: "SORT_BY_CP",
                    payload: "highToLow"
                    })
                }
                checked = {sort === "highToLow" ? true : false}
            />
            </span>
            <span className = "title"> Filter By Generation</span>
            <span>
                <Form.Check
                inline
                label = "Gen 1"
                name = "group3"
                type= "radio"
                id = {'inline-2'}
                onChange={() =>
                    pokeDispatch({
                    type: "FILTER_BY_GEN1",
                    })
                }
                checked={byGen1 === true ? true : false}
                />
            </span>
            <span>
                <Form.Check
                inline
                label = "Gen 2"
                name = "group4"
                type= "radio"
                id = {'inline-3'}
                onChange={() =>
                    pokeDispatch({
                    type: "FILTER_BY_GEN2",
                    })
                }
                checked={byGen2 === true ? true : false}
                />
            </span>
            <span className = "title"> Filter By Type</span>
            <span>
                <Form.Check
                inline
                label = "Water"
                name = "group2"
                type= "radio"
                id = {'inline-1'}
                onChange={() =>
                    pokeDispatch({
                    type: "FILTER_BY_WATER",
                    })
                }
                checked={byWater}
                />
            </span>
            <span>
                <Form.Check
                inline
                label = "Fire"
                name = "group5"
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
                name = "group6"
                type= "radio"
                id = {'inline-3'}
                onChange={() =>
                    pokeDispatch({
                    type: "FILTER_BY_GRASS",
                    })
                }
                checked={byGrass}
                />
            </span>

            <span>
                <Form.Check
                inline
                label = "Electric"
                name = "group7"
                type= "radio"
                id = {'inline-4'}
                onChange={() =>
                    pokeDispatch({
                    type: "FILTER_BY_ELECTRIC",
                    })
                }
                checked={byElectric}
                />
            </span>

            <span>
                <Form.Check
                inline
                label = "Flying"
                name = "group8"
                type= "radio"
                id = {'inline-5'}
                onChange={() =>
                    pokeDispatch({
                    type: "FILTER_BY_FLYING",
                    })
                }
                checked={byFlying}
                />
            </span>
            <span>Total Deck CP: {totalCP}</span>
            <div className = "filterButton">
            <Button 
            variant="light"
            onClick = {() => 
                pokeDispatch({
                    type: "CLEAR_FILTERS",
                    })
            }
            >Clear Filters</Button>
            </div>
        </div>
    )
}

export default Filters;