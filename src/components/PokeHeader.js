
import { React} from 'react'
import {Nav, Navbar, Container, FormControl, Dropdown, Badge} from 'react-bootstrap';
import { MdCatchingPokemon } from 'react-icons/md'
import { Link } from "react-router-dom";
import { DeckState} from "../context/Context"
import { AiFillDelete} from  "react-icons/ai"
import "./style.css"


const PokeHeader = () => {
  const {
    state :{ deck },
    dispatch,
    pokeState : {
        searchQuery
    },
    pokeDispatch,
  } = DeckState();


  return (
    <Navbar className = "pokeHead" variant = "dark" style = {{height: 80}}>
        <Container>
            <Navbar.Brand className = "pokeHeaderIcon">
            <img
              src="/imgs/pokeball2.png" 
              width="75"
              height="75"
              alt = "img"
            />
                <Link to = "/"> My PokeDeck </Link>
            </Navbar.Brand>
            <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant="dark">
                    <MdCatchingPokemon size={38} color = "white" fontSize="25px"/>
                    <Badge pill  bg="dark" text="dark"> {deck.length} </Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style = {{
                        minWidth : 250
                    }}>
                        {deck.length > 0 ? (
                            <>
                            {
                                deck.map((item) => (
                                <div className = "deckItemDetail">
                                    <span classItem = "deckItem" key = {item.id}>
                                        <img
                                         src = {item.art}
                                         className = "deckItemImg"
                                         alt={item.name}
                                        />
                                        <AiFillDelete
                                            fontSize = "20px"
                                            style={{cursor: "pointer"}}
                                            onClick={() =>
                                            dispatch({
                                                type:"REMOVE_FROM_DECK",
                                                payload: item,
                                            })}/>
                                       <div className = "deckItemDetail">
                                            <span >{item.name} </span>
                                            <span >CP: {item.cp}      Gen: {item.gen}</span>
                                            <span >Weight: {item.weight}kg</span>
                                            <span >Height: {item.height}m</span>
                                            <span >Ability : {item.ability}</span>
                                            </div>
                                </span>
                            </div>   
                                ))
                            }
                            </>
                        )  : (
                            <span style= {{padding: 10}}> Deck is Empty</span>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
};

export default PokeHeader