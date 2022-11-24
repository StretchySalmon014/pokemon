import "./App.css";
import PokeHeader from "./components/PokeHeader";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <PokeHeader/>
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
