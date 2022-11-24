import {Card, Button} from "react-bootstrap"
import Rating from "./Rating"
import {DeckState} from "../context/Context"
import "./style.css"

const PokeCard = ({pokemon}) => {
    const {
        state: {deck},
        dispatch} = DeckState();
    return (
        <div className = "pokemonCards">
            <Card className = "cardBorder">
                <Card.Img 
                variant = "top"
                src={pokemon.art}
                height = "270px" 
                style = {{objectFit: "cover"}}
                alt ={pokemon.name}/>
                <Card.Body>
                    <Card.Title>{pokemon.name}</Card.Title>
                            <Card.Subtitle className="pokeSubtitle">
                            <span>{pokemon.type}</span>
                            </Card.Subtitle>
                            <Card.Subtitle className="pokeSubtitle">
                            <span>Height: {pokemon.height}m     Weight: {pokemon.weight}kg</span>
                            </Card.Subtitle>
                            <Card.Subtitle className="pokeSubtitle">
                            <span>Ability: {pokemon.ability}</span>
                            </Card.Subtitle>
                            <Card.Subtitle className="pokeSubtitle">
                            <span>CP: {pokemon.cp}</span>
                            </Card.Subtitle>
                        <Rating rating={pokemon.rating}/>
                </Card.Body>
                {
                    deck.some(p => p.id === pokemon.id) ? (
                        <Button
                        onClick={() =>{
                            dispatch({
                                type: "REMOVE_FROM_DECK",
                                payload: pokemon,
                            })
                        }}
                        variant="danger" 
                        className="cardButton">Remove</Button>
                    ) : (
                        <Button
                        onClick={() =>{
                            dispatch({
                                type: "ADD_TO_DECK",
                                payload: pokemon,
                            })
                        }}
                        variant="info" 
                        className="cardButton">Add to Deck
                        </Button>
                )}
            </Card>
        </div>
    )
};

export default PokeCard;