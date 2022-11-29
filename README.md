### Describe the goal of the application and value to a user 
The goal of this website is to make a pokemon deck. This website takes inspiration from Pokemon Go (due to the addition of CP). This application is meant to allow a user to create a deck (or cart) of pokemon. There is no limit to the size of the cart. This app would be most useful if there was a greater number of available pokemon--however, for this protoype I am just using 15 pokemon from Generation 1 and 2. ##This website is meant to be fun and perhaps allow users to discover pokemon they did not previously know.

### Link to your deployed web application running online 
https://pokemon-6wfpjdvcq-stretchysalmon014.vercel.app/

### Explain the organization of your Components, and the props and state related to them 

#### Major Compnents

- Home - Returns an object that ties together the majority of the app logic. Within the Home state we import state information describing the current deck and the status of potential filters. Additionally, the home component contains the logic that apple filters and sort options (sourced from useReducer hooks written in Context.js) to the current list of pokemon stored within the page's state. This list of pokemon, called pokeItems, is a responsive list of Card components that get updated; however, this provided a interesting edge case where this updating process (of using a transformCards function) did not allow for the reordering of cards after hitting the 'Clear Filters' button. To solve this edge case, I just added a pre-rended list of parsed JSON data for our pokemon cards to apply when the sort is undefined.

- PokeHeader - Created largely using react-bootstrap. This header holds a png for the app logo and some text for the app title. The most important part is the Dropdown component within this header. This Dropdown menu should update corresponding to the current state of the page. The menu icon should change from 0 to some non negative number that indicates how many pokemon have been added to our deck. There is no limit to the number of pokemon. The Dropdown menu will give the user the ability to view and scroll through the pokemon the user has selected.
- 
- Cards - The Card component exports a PokeCard object. This object is a single object that parses our pokemon data (data.json) and in a Card component (imported from react-bootstrap). This card is algo given a Button component that is used to add a pokemon to our deck. In this case on a click the button should send an action of "ADD_TO_DECK" and a payload of this given card for the deckReducer in Reducer.js to switch on and add the given payload to our cart.

- Filters - Takes in the current deck within our state and the filter variables within our state (that tell us which filters are currently applied).


### State

There are two useReducer hooks used to record the state of this webpage 
- state : holds a list ok pokeItems that will be used to render card components on screen. Further this state holds the deck of cards that will be manipulated throughout the page's lifespane 
- pokeState: holds booleans that indicate whether filters are activate, a separate reducer is made to switch on changes to this filter variables upon a user checking a given filter..this also allows us to determine when to reset filters Both hooks are combined to allow the page to keep track of the state of our peckDeck and the filters that are activated

### Note the usability principles considered for layout and hierarchy
