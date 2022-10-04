import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import validate from '../CreatePokemon/Validate.js';

import { GetPokemons, GetType, PostPokemon } from '../../actions/actions';
import css from '../CreatePokemon/CreatePokemon.module.css'
import { useEffect } from 'react';



 const CreatePokemon = () => {
  const history = useNavigate();
  const types = useSelector(state => state.types)
  const pokemons = useSelector(state => state.allPokemons)
  const dispatch = useDispatch();
  const [error, setError] = useState({});  
  const [form,setForm]= useState({
    name:'',
    image:'',
    attack:'',
    defense:'',
    hp:'',
    speed:'',
    height:'',
    weight:'',
    type:[]
  })
console.log(error)
  useEffect(()=>{
  dispatch(GetType())
  dispatch(GetPokemons())
  },[dispatch])
  console.log(form)

  
  const handleSubmit = (e) => {    
    dispatch(PostPokemon(form)); 
    alert('Your pokémon has been created');
    history('/home')   
  }

  const equal = (value) => {
    const equal = pokemons.find(p => p.name === value);
    if(equal){
      alert('pokemon alredy exist, Change the name')
      setForm({
        ...form,
         name : ''
      })
  };  
  }
  
  const HandleTypeChange = (e) => {
    const newType = e.target.value;    
    if(form.type.length < 2) setForm({...form,type:[...form.type,newType]});
    else setError({...error, type: 'only select two types'}) 
    if(form.type.includes(newType)){
      setForm({...form,type:form.type.filter(t => t !== newType)}); 
      setError({...error, type: ''})
    }         
  }
  
  
  const handleInputChange = (e) => {    
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    equal(form.name)

    setError(
      validate({
        ...form,
        [e.target.name]: e.target.value
      })
    )
    
  } 

  const GoHome = () => {
    history('/home') 
  }
  
  return (
    <div>


    <form onSubmit={handleSubmit}> 
    <div className={css.totalcontainer} >
      
      <div className={css.container}>
      <h1>Create Your Pokemon</h1>
        
        <div >
          <label htmlFor="name">Name:</label>
            <input onChange={handleInputChange} type="text" name='name' id='name' value={form.name} />
            <p>{error.name}</p>
          </div>     
          <div >
          <label htmlFor="">Image:</label>
        <input onChange={handleInputChange} type="text" name='image' value={form.image}/>
        <p>{error.image}</p>
          </div>
<div >
      <label htmlFor="hp">Hp:</label>
        <input onChange={handleInputChange} type="number" name='hp' id='hp'  value={form.hp}/>
        <p>{error.hp}</p>
</div>
  <div className={css.input}> 
          <label htmlFor="attack">Attack:</label>
            <input onChange={handleInputChange} type="number" name='attack' id='attack'  value={form.attack}/>
            <p>{error.attack}</p>
  </div>
    <div className={css.input}>
          <label htmlFor="defense">Defense:</label>
        <input onChange={handleInputChange} type="number" name='defense' id='defense'  value={form.defense}/>
        <p>{error.defense}</p>
    </div>
<div className={css.input}>
      <label htmlFor="speed">Speed:</label>
        <input onChange={handleInputChange} type="number" name='speed' id='speed'  value={form.speed}/>
        <p>{error.speed}</p>
</div>
<div className={css.input}>
          <label htmlFor="height">Height:</label>
            <input onChange={handleInputChange} type="number" name='height' id='height' value={form.height}/>
            <p>{error.height}</p>
</div>
<div className={css.input}>
          <label  htmlFor="weight">Weight:</label>
        <input onChange={handleInputChange} type="number" name='weight' id='weight'  value={form.weight}/>
        <p>{error.weight}</p>
</div>
        </div>

      <div className={css.typeButtons}>
        <div className={css.typeButtons1}>
      <h1>Choose types</h1>
        </div>
       
      {types?.map((t,i)=>(
        <div key={i}>          
          <input  type="button" name={t.name} id={t.id}  value={t.name} onClick={HandleTypeChange} />          
        </div>
      )
      )
      } 
      <p>{error.type}</p>
     {form.type.length === 0 ?(<p>choose one or two types</p>): false}
      
        {form.type?.map((el,i) => (<input type='button' className={css.typeSelect} onClick={HandleTypeChange} value={el}/>))}
      
      </div>      
      


      {Object.keys(error).length === 0 && form.type.length ? <input className={css.button} type="submit" value="Create your Pokemon"  /> : false }   
      <input className={css.button} onClick={GoHome} value="Go Home" />
    </div>
    </form>
    </div>
  )
}
export default CreatePokemon