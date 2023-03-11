import express from 'express';
import { getNotes, addNote, editNote, deleteNote } from '../controllers/db-controller';
const router = express.Router();

router.get('/', getNotes, (req, res) => res.status(200).send(res.locals.data));
router.post('/', addNote, (req, res) => res.status(200).send(res.locals.data));
router.put('/', editNote, (req, res) => res.status(200).send(res.locals.data));
router.delete('/', deleteNote, (req, res) => res.status(200).send(res.locals.data));

export { router as apiRouter };