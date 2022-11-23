
import React from 'react'
import {Nav, Navbar, Container, FormControl, Dropdown, Badge} from 'react-bootstrap';
import { MdCatchingPokemon } from 'react-icons/md'
import { Link } from "react-router-dom";


const PokeHeader = () => {
  return (
    <Navbar bg = "dark" variant = "dark" style = {{height: 80}}>
        <Container>
            <Navbar.Brand>
            <img
              src="/imgs/pokeball2.png" 
              width="60"
              height="60"
              alt = "img"
            />{' '}
                <Link to = "/"> My PokeDeck </Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                    <FormControl style ={{ width: 500}} 
                            placeholder='Search for Pokemon'
                            className = "ml-auto"
                        />
            </Navbar.Text>
            <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant="success">
                    <MdCatchingPokemon size={38} color = "white" fontSize="25px"/>
                    <Badge pill  bg="light" text="dark"> {0} </Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style = {{minWidth : 370}}>
                        <span style= {{padding: 20}}> Deck is Empty</span>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
};

export default PokeHeader