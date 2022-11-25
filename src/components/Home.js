import { DeckState } from "../context/Context";
import Card from "./Card";
import Filters from "./Filters";
import "./style.css"



const Home = () => {  

  const {
    pokeState: {
      byFire,
      byRating,
      sort,
      searchQuery,
  },
    state: {pokeItems},
  } = DeckState();

  const transformCards = () => {
    let sortedCards = pokeItems;

    if(sort) {
      sortedCards = sortedCards.sort((a,b) => 
        sort==='lowToHigh' ? a.cp - b.cp : b.cp - a.cp
      );
    }

    if (byRating) {
      sortedCards = sortedCards.filter(
        (card) => card.rating >= byRating
      );
    }

    if (searchQuery) {
      sortedCards = sortedCards.filter((card) =>
        card.name.toLowerCase().includes(searchQuery)
      );
    }

    if (byFire) {
      sortedCards = sortedCards.filter((card) =>
        card.type.includes("Fire")
      );
    }
    return sortedCards
  };

  return(
  <div className='home'>
    <Filters/>
    <div className='itemContainer'>
      {transformCards().map((poke) =>{
        return <Card pokemon = {poke} key = {poke.id}> </Card> 
      })}
    </div>
  </div>);
  
};

export default Home;