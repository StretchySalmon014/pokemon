import { DeckState } from "../context/Context";
import SingleCard from "./SingleCard";



const Home = () => {  

  const {
    state: {pokeItems},
  } = DeckState();

  console.log(pokeItems)

  return(
  <div className='home'>
    <div className='itemContainer'>
      {pokeItems.map((poke) =>{
        return <SingleCard pokemon = {poke} key = {poke}> </SingleCard> 
      })}
    </div>
  </div>);
  
};

export default Home;