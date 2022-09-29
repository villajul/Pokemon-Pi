import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';


import { PostPokemon } from '../../actions/actions';
import css from '../CreatePokemon/CreatePokemon.module.css'



 const CreatePokemon = () => {
  const types = useSelector(state => state.types)
  const dispatch = useDispatch();  
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
  const history = useNavigate();
  
  console.log(form)
  const handleSubmit = (e) => {       
    dispatch(PostPokemon(form)); 
    alert('Your pokémon has been created');
    history('/home')   
  }
  
  const HandleTypeChange = (e) => {
    const newType = e.target.value;    
    if(form.type.length < 2) setForm({...form,type:[...form.type,newType]});    
    if(form.type.includes(newType))setForm({...form,type:form.type.filter(t => t !== newType)})   
  }
  
  const handleInputChange = (e) => {    
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  } 
  
  return (
    <div className={css.totalcontainer} >
      <h1 className={css.title}>Create Your Pokemon</h1>
        <form className={css.containerInput} onSubmit={handleSubmit}> 
      <div className={css.container}>
        
        <div className={css.input}>
          <label htmlFor="name">Name:</label>
            <input onChange={handleInputChange} type="text" name='name' id='name' value={form.name} required/>
          </div>     
          <div className={css.input}>
          <label htmlFor="">Image:</label>
        <input onChange={handleInputChange} type="text" name='image' value={form.image}required/>
          </div>
<div className={css.input}>
      <label htmlFor="hp">Hp:</label>
        <input onChange={handleInputChange} type="number" name='hp' id='hp' min="1" max="100" value={form.hp}required/>
</div>
  <div className={css.input}> 
          <label htmlFor="attack">Attack:</label>
            <input onChange={handleInputChange} type="number" name='attack' id='attack' min="1" max="100" value={form.attack}required/>
  </div>
    <div className={css.input}>
          <label htmlFor="defense">Defense:</label>
        <input onChange={handleInputChange} type="number" name='defense' id='defense' min="1" max="100" value={form.defense}required/>
    </div>
<div className={css.input}>
      <label htmlFor="speed">Speed:</label>
        <input onChange={handleInputChange} type="number" name='speed' id='speed' min="1" max="100" value={form.speed}required/>
</div>
<div className={css.input}>
          <label htmlFor="height">Height:</label>
            <input onChange={handleInputChange} type="number" name='height' id='height' min="1" max="20" value={form.height}required/>
</div>
<div className={css.input}>
          <label  htmlFor="weight">Weight:</label>
        <input onChange={handleInputChange} type="number" name='weight' id='weight' min="1" max="2000" value={form.weight}required/>
</div>
        </div>

      <div className={css.typeButtons}>
      {types?.map((t,i)=>(
        <div key={i}>          
          <input  type="button" name={t.name} id={t.id}  value={t.name} onClick={HandleTypeChange} required/>          
        </div>
      )
      )
      }
      </div>
      {!form.type.length ? <input className={css.button} type="submit" value="Create Pokemon"  disabled/> : <input className={css.button} type="submit" value="create" /> }   
       
    </form>
    </div>
  )
}
export default CreatePokemon