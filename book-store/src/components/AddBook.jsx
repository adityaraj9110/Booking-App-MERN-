import React from "react";
import axios from "axios";
import {useForm} from 'react-hook-form'
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,

} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const history = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    author: "",
    description: "",
    price: "",
    image: "",
    
  });

  const [checked,setChecked]=useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  

  // sending data to its base

  const sendRequest = async()=>{
    await axios.post("https://bookamania.herokuapp.com/books",{
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      available:Boolean(checked),
      image:String(inputs.image)

    }).then(res=>res.data);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(inputs.name && inputs.author && inputs.description && inputs.price && inputs.image){
      console.log(inputs,checked)
      sendRequest().then(()=>history('/books'))
    }
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection={"column"}
        justifyContent={"center"}
        maxWidth={700}
        // alignItems={"center"}
        alignContent={"center"}
        alignSelf={"center"}
        marginLeft="auto"
        marginRight={"auto"}
        marginTop={10}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          value={inputs.name}
          required={true}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
        <FormLabel>Author</FormLabel>
        <TextField
          value={inputs.author}
          required={true}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
        />
        <FormLabel>Description</FormLabel>
        <TextField
          value={inputs.description}
          required={true}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />
        <FormLabel>Price</FormLabel>
        <TextField
          value={inputs.price}
          required={true}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        />
        <FormLabel>Image Link</FormLabel>
        <TextField
          value={inputs.image}
          required={true}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
        <FormControlLabel
          value={inputs.available}
          
          control={<Checkbox checked={checked} onChange={()=>{
            setChecked(!checked)
          }} />}
          label="Available"
        />
        <Button variant="contained" type="submit">
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
