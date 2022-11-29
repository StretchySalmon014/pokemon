### Describe the goal of the application and value to a user 
The goal of this website is to make a pokemon deck. This website takes inspiration from Pokemon Go (due to the addition of CP). This application is meant to allow a user to create a deck (or cart) of pokemon. There is no limit to the size of the cart. This app would be most useful if there was a greater number of available pokemon--however, for this protoype I am just using 15 pokemon from Generation 1 and 2. ##This website is meant to be fun and perhaps allow users to discover pokemon they did not previously know.

### Link to your deployed web application running online 
https://pokemon-6wfpjdvcq-stretchysalmon014.vercel.app/

### Explain the organization of your Components, and the props and state related to them 

#### Major Compnents

- Home - Returns an object that ties together the majority of the app logic. Within the Home state we import state information describing the current deck and the status of potential filters. Additionally, the home component contains the logic that apple filters and sort options (sourced from useReducer hooks written in Context.js) to the current list of pokemon stored within the page's state. This list of pokemon, called pokeItems, is a responsive list of Card components that get updated; however, this provided a interesting edge case where this updating process (of using a transformCards function) did not allow for the reordering of cards after hitting the 'Clear Filters' button. To solve this edge case, I just added a pre-rended list of parsed JSON data for our pokemon cards to apply when the sort is undefined.

- PokeHeader - Created largely using react-bootstrap. This header holds a png for the app logo and some text for the app title. The most important part is the Dropdown component within this header. This Dropdown menu should update corresponding to the current state of the page. The menu icon should change from 0 to some non negative number that indicates how many pokemon have been added to our deck. There is no limit to the number of pokemon. The Dropdown menu will give the user the ability to view and scroll through the pokemon the user has selected.

- Cards - The Card component exports a PokeCard object. This object is a single object that parses our pokemon data (data.json) and in a Card component (imported from react-bootstrap). This card is algo given a Button component that is used to add a pokemon to our deck. In this case on a click the button should send an action of "ADD_TO_DECK" and a payload of this given card for the deckReducer in Reducer.js to switch on and add the given payload to our cart.

- Filters - Takes in the current deck within our state and the filter variables within our state (that tell us which filters are currently applied). This component is essentially one div that contains the various Check boxes that correspond to each filters. Each button contains either an OnClick or OnChange function that sends a payload and an action to be used within the Reducers.js class. In this case, a filterType and/or payload will be sent to the pokeReducer in Reducers.js to switch a specific filter boolean. In this filter, we also have an aggregator that measures a deck's total CP (at the bottom of the div above the 'reset filters' button).


### State

There are two useReducer hooks used to record the state of this webpage 
- state : holds a list of pokeItems (which is a list of parsed JSON data) that will be used to render card components on screen. Further this state holds the deck of cards that will be manipulated throughout the page's lifespan. This deck is initialized as empty and changes as cards are removed and added to the deck. 
- pokeState: holds booleans that indicate whether filters are activate, a separate reducer is made to switch on changes to this filter variables upon a user checking a given filter..this also allows us to determine when to reset filters Both hooks are combined to allow the page to keep track of the state of our peckDeck and the filters that are activated

### Note the usability principles considered for layout and hierarchy

I wanted to keep the UI relatively simple and went along the example provided. Initially I thought I could have a separate Deck Page (which is why I include BrowserRouter); however, after re-reading the handout I realized I would have to include a deck view on the home page. Therefore, I decided to use the drop down menu to serve as the deck (or cart equivalent) view for the user. In this case, I want the cart to be the first thing that the user sees when entering the page. From there, the layout is relatively straighforward, and I believe, distinct. 

The contrast on this page is not too drastic. The components on the webpage that are static (or do not change considerably throughout use) are a uniform blue color. While the cards themselves are a nuetral color to not distract from the filters available. Initially, I thought coloring a card according to a pokemon's type would be a good idea; however, this idea would most likely introduce an issue of constrast and have mutliple colors clashing on the screen. 

The use of color was also taken into account when choosing how the button changes before and after a given card is choosen.

Beyond the layout of the filter and header, the layout of the cards has also changed. Initially I thought to have two cards per row; however, after some time this seemed to have a lot of empty space. To resolve this I changed the margin between cards and allowed atleast 3 cards to be on one row.
