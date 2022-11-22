import { DeckState } from "../context/Context";
import SingleCard from "./SingleCard";
import Filters from "./Filters";
import "./style.css"



const Home = () => {  

  const {
    state: {pokeItems},
  } = DeckState();

  console.log(pokeItems)

  return(
  <div className='home'>
    <Filters/>
    <div className='itemContainer'>
      {pokeItems.map((poke) =>{
        return <SingleCard pokemon = {poke} key = {poke}> </SingleCard> 
      })}
    </div>
  </div>);
  
};

export default Home;