import React, {useState} from 'react';
import Nav from '../../4-Nav/Nav'
// ME VA A EJECUTAR LAS ACTIONS DE POST
export function Form(props) {

  const [input, setInput] = useState({
    title: '',
    description: '',
    releaseDate: '',
    rating: ''
  })

  const handleInputChange = function(e) {
    setInput({
      ...input, [e.target.name] : e.target.value
    })
  }
  const handleSubmit = function(e) { // Handle Submit - Interpretar como Resolver envío.
    e.preventDefault();
  }
  //   props.addTodo(input); --> va dentro de handleSubmit
  //       <form onSubmit={(e) => handleSubmit(e)}>  --> handleSubmit ejecuta Payload de Action addTodo 
  //                                                      en el state input.
  return (
    <div>

      <div>
        <Nav/>
      </div>

      <form onSubmit={(e) => handleSubmit(e)}> 

        <label htmlFor='title'>Title</label>
        <input type='text' name='title' value={input.title} onChange={handleInputChange}/>

        <label htmlFor='description'>Description</label>
        <textarea name='description' value={input.description} onChange={handleInputChange}/>

        <label htmlFor='releaseDate'>releaseDate</label>
        <input type='text' name='releaseDate' value={input.releaseDate} onChange={handleInputChange}/>

        <label htmlFor='rating'>rating</label>
        <input type='text' name='rating' value={input.rating} onChange={handleInputChange}/>

        <button type='submit' name='submit' value='Submit'>Add</button>

      </form>

    </div>
  )
};


export default Form;