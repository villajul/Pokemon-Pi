import { Route, Router, Switch } from 'react-router-dom' 
import Home from './components/Home/Home';
import './App.css'
import CreatePokemon from "./components/CreatePokemon/CreatePokemon";
import LandingPage from "./components/LandingPage/LandingPage";
import { PokeDetail } from './components/PokeDetail.jsx/PokeDetail';


function App() {
  return (
     <div>
      
       <Route exact path="/" component={LandingPage}/>
       <Route exact path="/home" component={Home}/>
       <Route exact path="/pokemon/:id" component={PokeDetail}/>
       <Route exact path="/CreatePokemon" component={CreatePokemon} />
     </div>
     
    
  );
}

export default App;
