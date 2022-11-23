import { createContext, useContext, useReducer} from 'react'
import PokeData from './data.json'
import {deckReducer} from './Reducers'

const Deck = createContext();

const Context = ({children}) => {

  const pokeItems = PokeData.map((item) => ({
    id: item.id,
    name: item.name,
    type: item.type,
    height: item.height,
    weight: item.weight,
    ability: item.ability,
    art: item.art,
    rating: item.rating,
    cp: item.cp
  }));

  const [state, dispatch] = useReducer(deckReducer, {
    pokeItems: pokeItems,
    deck: []
  })

  console.log(pokeItems)

  return (
    <Deck.Provider value = {{state, dispatch}}> {children} </Deck.Provider>
  )
};

export default Context;

export const DeckState = () => {
  return useContext(Deck)
}