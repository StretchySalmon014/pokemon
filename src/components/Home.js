import { DeckState } from "../context/Context";
import Card from "./Card";
import Filters from "./Filters";
import "./style.css"



const Home = () => {  

  const {
    pokeState: {
      byGrass,
      byWater,
      byFlying,
      byElectric,
      byFire,
      sort,
      byGen1,
      byGen2
  },
    state: {pokeItems},
    initialItems,
  } = DeckState();

    console.log(initialItems)

  const transformCards = () => {
    let sortedCards = pokeItems;

    if (sort){
      sortedCards = sortedCards.sort((a,b) => 
        sort==='lowToHigh' ? a.cp - b.cp : b.cp - a.cp
      );
    } else {
       sortedCards = initialItems
    }
   
    if (byGrass) {
      sortedCards = sortedCards.filter((card) =>
        card.type.includes("Grass")
      );
    }

    if (byFire) {
      sortedCards = sortedCards.filter((card) =>
        card.type.includes("Fire")
      );
    }

    if (byWater) {
      sortedCards = sortedCards.filter((card) =>
        card.type.includes("Water")
      );
    }

    if (byElectric) {
      sortedCards = sortedCards.filter((card) =>
        card.type.includes("Electric")
      );
    }

    if (byFlying) {
      sortedCards = sortedCards.filter((card) =>
        card.type.includes("Flying")
      );
    }

    if (byGen1 && !byGen2)  {
      sortedCards = sortedCards.filter((card) =>
        card.gen === 1
      );
    } else if (byGen2 && !byGen1) {
      sortedCards = sortedCards.filter((card) =>
        card.gen === 2);
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