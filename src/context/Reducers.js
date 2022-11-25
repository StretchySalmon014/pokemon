
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


export const pokeReducer = (state, action) => {
    switch (action.type) {
        case 'SORT_BY_CP' :
            return { ...state, sort: action.payload}
        case 'FILTER_BY_FIRE':
            return { ...state, byFire: !state.byFire}
        case 'FILTER_BY_RATING':
            return { ...state, byRating: action.payload}
        case 'FILTER_BY_SEARCH':
            return { ...state, searchQuery: action.payload}
        case 'CLEAR_FILTERS':
            return {
                byFire: false,
                byRating: 0,
                searchQuery: "",
              }
        default:
            return state
    }
}