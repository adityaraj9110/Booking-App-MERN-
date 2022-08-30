import { Button } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Book.css'

const Book = (props) => {
  const {author,available,description,image,name,price,_id}= props.book
  const history = useNavigate()
  const handleDelete = async()=>{
    await axios.delete(`https://bookamania.herokuapp.com/books/${_id}`)
    .then(res=>res.data)
    .then(()=>history("/"))
    .then(()=>history('/books'))
  }
  return (
    <div className='card'>
      <img src={image}/>
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>Rs {price}</h2>

      <Button LinkComponent={Link} to={`/books/${_id}`} >Update</Button>
      <Button onClick={handleDelete}>Delete</Button>

    </div>
  )
}

export default Book;
