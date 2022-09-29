import { Route, Routes } from 'react-router-dom' 
import Home from './components/Home/Home';
import './App.css'
import CreatePokemon from "./components/CreatePokemon/CreatePokemon";
import LandingPage from "./components/LandingPage/LandingPage";
import { PokeDetail } from './components/PokeDetail.jsx/PokeDetail';


function App() {
  return (
     <div>  
      
      <Routes>
       <Route exact path="/" element={<LandingPage/>}/>
       <Route exact path="/home" element={<Home/>}/>
       <Route exact path="/pokemon/:id" element={<PokeDetail/>}/>
       <Route exact path="/CreatePokemon" element={<CreatePokemon/>} />
        </Routes>    
      
     </div>
     
    
  );
}

export default App;
