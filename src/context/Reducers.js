
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
        case 'FILTER_BY_WATER':
            return { ...state, byWater: !state.byWater}
        case 'FILTER_BY_ELECTRIC':
            return { ...state, byElectric: !state.byElectric}
        case 'FILTER_BY_GRASS':
            return { ...state, byGrass: !state.byGrass}
        case 'FILTER_BY_FLYING':
            return { ...state, byFlying: !state.byFlying}
        case 'FILTER_BY_GEN1':
            return { ...state, byGen1: !state.byGen1}
        case 'FILTER_BY_GEN2':
            return { ...state, byGen2: !state.byGen2}
        case 'CLEAR_FILTERS':
            return {
                byWater: false,
                byFire: false,
                byGrass: false,
                byElectric: false,
                byFlying: false,
                byGen1: false,
                byGen2: false,
              }
        default:
            return state
    }
}