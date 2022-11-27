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
    cp: item.cp,
    gen: item.gen
  }));

  const initialItems = PokeData.map((item) => ({
    id: item.id,
    name: item.name,
    type: item.type,
    height: item.height,
    weight: item.weight,
    ability: item.ability,
    art: item.art,
    rating: item.rating,
    cp: item.cp,
    gen: item.gen
  }));

  const [state, dispatch] = useReducer(deckReducer, {
    pokeItems: pokeItems,
    deck: []
  });

  const [pokeState, pokeDispatch] = useReducer (pokeReducer, {
    byWater: false,
    byFire: false,
    byGrass: false,
    byElectric: false,
    byFlying: false,
    byGen1: false,
    byGen2: false,
  })

  return (
    <Deck.Provider value = {{state, dispatch, pokeState, pokeDispatch, initialItems }}> {children} </Deck.Provider>
  )
};

export default Context;

export const DeckState = () => {
  return useContext(Deck)
}