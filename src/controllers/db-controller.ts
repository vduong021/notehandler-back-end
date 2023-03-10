import { Request, Response } from 'express';
import { NoteModel } from '../db';

interface Note { id: number ; date: string; note: string };


const getNotes = async (req: Request, res: Response, next: any) => {
  try {
    const query = await NoteModel.find();
    res.locals.data = query;
    console.log(query);
    return next();
  }
  catch (err) {
    const error = {message: 'Error in getNotes controller.', error: err}
    next(error);
  }
};

const addNote = async (req: Request, res: Response, next: any) => {
  const {date, note} = req.body;
  try {
    const query = await NoteModel.create({date, note});
    res.locals.data = query;
    console.log(query);
    return next();
  }
  catch (err) {
    const error = {message: 'Error in addNote controller.', error: err}
    next(error);
  }
};

const editNote = (req: Request, res: Response, next: any) => {
  try {
    //findByIdAndUpdate()
    res.send('Success!');
  }
  catch (err) {
    const error = {message: 'Error in editNote controller.', error: err}
    next(error);
  }
};

const deleteNote = (req: Request, res: Response, next: any) => {
  try {
    //findByIdAndRemove()
    res.send('Success!');
  }
  catch (err) {
    const error = {message: 'Error in deleteNote controller.', error: err}
    next(error);
  }
};



export { getNotes, addNote };

