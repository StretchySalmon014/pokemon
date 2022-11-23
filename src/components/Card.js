import {Card, Button} from "react-bootstrap"
import Rating from "./Rating"
import "./style.css"

const PokeCard = ({pokemon}) => {
    return (
        <div className = "pokemonCards">
            <Card>
                <Card.Img 
                variant = "top"
                src={pokemon.art}
                height = "280px" 
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
                <span>
                        <Button variant="danger" className="removeButton">Remove</Button>{' '}
                        <Button variant="success" className="addButton">Add to Deck</Button>{' '}
                </span>
            </Card>
        </div>
    )
};

export default PokeCard;