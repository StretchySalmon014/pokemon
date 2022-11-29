
#Describe the goal of the application and value to a user
  ##The goal of this website is to make a pokemon deck. This website takes inspiration from Pokemon Go (due to the addition of CP). This application is meant to allow a user to create a deck (or cart) of pokemon. There is no limit to the size of the cart. This app would be most useful if there was a greater number of available pokemon--however, for this protoype I am just using 15 pokemon from Generation 1 and 2.
  ##This website is meant to be fun and perhaps allow users to discover pokemon they did not previously know.
  
#Link to your deployed web application running online
  https://pokemon-6wfpjdvcq-stretchysalmon014.vercel.app/
  
#Explain the organization of your Components, and the props and state related to them
   The major components within this project include:
    - Home...is passed the entire state
    - PokeHeader
    - Cards
    - Filters
  There are two useReducer hooks used to record the state of this webpage
    - state : holds a list ok pokeItems that will be used to render card components on screen. Further this state holds the deck of cards that will be manipulated throughout the page's lifespane
    - pokeState: holds booleans that indicate whether filters are activate, a separate reducer is made to switch on changes to this filter variables upon a user checking a given filter..this also allows us to determine when to reset filters
    Both hooks are combined to allow the page to keep track of the state of our peckDeck and the filters that are activated

#Note the usability principles considered for layout and hierarchy
