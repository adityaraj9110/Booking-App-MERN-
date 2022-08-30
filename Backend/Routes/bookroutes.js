import express  from "express";
const router = express.Router();
import bookController from "../controllers/bookController.js";
import Book from '../Model/Book.js'


router.get('/',bookController.getAllBooks)
router.post('/',bookController.addbook);
router.get("/:id",bookController.getbyid);
router.put('/:id',bookController.updatebyid)
router.delete('/:id',bookController.deletebook)

export default router;