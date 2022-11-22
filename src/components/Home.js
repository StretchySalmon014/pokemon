import { DeckState } from "../context/Context";

const Home = () => {  

  const {
    state: {pokeItems},
  } = DeckState();

  console.log(pokeItems)

  return(
  <div className='home'>
    <div className='itemContainer'>
      Home
    </div>
  </div>);
  
};

export default Home;