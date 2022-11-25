import { DeckState } from "../context/Context";
import Card from "./Card";
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
        return <Card pokemon = {poke} key = {poke.id}> </Card> 
      })}
    </div>
  </div>);
  
};

export default Home;