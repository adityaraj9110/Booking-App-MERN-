import mongoose from "mongoose";
import Book from '../Model/Book.js'

class bookController{

    static getAllBooks=async (req,res,next)=>{
        let books;
        try {
        books=await Book.find(); 
        } catch (error) {
        console.log(error)  
        }
        if(!books){
            return res.status(404).json({message:"No Products Found"})
        }

        return res.status(200).json({books})
    }

    static getbyid=async (req,res,next)=>{
        const id=req.params.id;
        let book;
        try {
           book = await Book.findById(id);


        } catch (error) {
            console.log(error)
        }

        if(!book){
            return res.status(500).json({message:"No Book found"})
        }
        return res.status(201).json({book})
    }

    static addbook = async (req,res,next)=>{
        let book;
        const {name,author,description,price,available,image}= req.body;
        try {
            book = new Book ({
                name,
                author,
                description,
                price,
                available,
                image
            });
            await book.save();

        } catch (error) {
            console.log(error)
        }

        if(!book){
            return res.status(500).json({message:"unable to add"})
        }
        return res.status(201).json({book})
    }

    static updatebyid = async (req,res,next)=>{
       const id = req.params.id;
       const {name,author,description,price,available,image}= req.body;
       let book;
       try {
        book=await Book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            available,
            image

        })
        book = await book.save();
       } catch (error) {
        console.log(error)
       }

       if(!book){
        return res.status(500).json({message:"unable to update by this id"})
        }
        return res.status(200).json({book})

    }

    static deletebook = async (req,res,next)=>{
        const id = req.params.id;
        let book;
        try {
           book = await Book.findByIdAndRemove(id); 
        } catch (error) {
            console.log(error)
        }
        if(!book){
        return res.status(500).json({message:"unable to Delete by this id"})
        }
        return res.status(200).json({message:"Product Succesfully deleted"})
    
    }

}

export default bookController;