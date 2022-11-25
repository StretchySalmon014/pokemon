import { createContext, useContext, useReducer} from 'react'
import PokeData from './data.json'
import {deckReducer, pokeReducer} from './Reducers'

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
  });

  const [pokeState, pokeDispatch] = useReducer (pokeReducer, {
    byFire: false,
    byRating: 0,
    searchQuery: "",
  })

  return (
    <Deck.Provider value = {{state, dispatch, pokeState, pokeDispatch }}> {children} </Deck.Provider>
  )
};

export default Context;

export const DeckState = () => {
  return useContext(Deck)
}