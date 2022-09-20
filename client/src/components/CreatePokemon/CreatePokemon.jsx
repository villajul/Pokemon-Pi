import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

 const CreatePokemon = () => {
  const dispatch = useDispatch();
  const [form,setForm]= useState({
    name:'',
    image:'',
    attack:'',
    defense:'',
    name:'',
    name:'',
    name:'',
    name:'',
    type:[],

  })
  console.log(form)
  const handleSubmit = (e) => {
    
    //dispatch()
    console.log(form);
    setForm({[e.target.name]: ''})
  }
  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
    //dispatch()

  } 
  return (
    <div>
    <form onChange={handleInputChange}>
      <label htmlFor="">name:</label>
      <input type="text" name='name' value={form.name}/>
      <label htmlFor="">image:</label>
      <input type="text" name='image' value={form.image}/>
      <label htmlFor="">hp:</label>
      <input type="text" name='hp' value={form.hp}/>
      <label htmlFor="">attack:</label>
      <input type="text" name='attack' value={form.attack}/>
      <label htmlFor="">defense:</label>
      <input type="text" name='defense' value={form.defense}/>
      <label htmlFor="">height:</label>
      <input type="text" name='height' value={form.height}/>
      <label htmlFor="">weight:</label>
      <input type="text" name='weight' value={form.weight}/>
      <label htmlFor="">speed:</label>
      <input type="text" name='speed' value={form.speed}/>
      <label htmlFor="">type:</label>
      <input type="text" name='type' value={form.type}/>
      <input type="submit" value="create" onSubmit={handleSubmit}/>

    </form>
    </div>
  )
}
export default CreatePokemon