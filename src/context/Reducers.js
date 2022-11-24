
export const deckReducer = (state, action) => {
    switch (action.type){
        case "ADD_TO_DECK":
            return {...state, deck: [...state.deck, {...action.payload, qty: 1}]};
        case "REMOVE_FROM_DECK":
            return {...state, deck: state.deck.filter(c => c.id !== action.payload.id)}
        default:
            return state
    }
}
