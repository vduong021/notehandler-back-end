import { Request, Response } from 'express';
import { NoteModel } from '../db';

interface Note { id: number ; date: string; note: string };

const dbController = {
  getNotes: async (req: Request, res: Response, next: any) => {
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
  },

  addNote: async (req: Request, res: Response, next: any) => {
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
  },

  editNote: async (req: Request, res: Response, next: any) => {
    const { _id, date, note } = req.body;
    try {
      const query = await NoteModel.findByIdAndUpdate(_id, { date, note });
      res.locals.data = query;
      return next();
    }
    catch (err) {
      const error = {message: 'Error in editNote controller.', error: err}
      next(error);
    }
  },

  deleteNote: async (req: Request, res: Response, next: any) => {
    const id = req.body._id;
    try {
      const query = await NoteModel.findByIdAndRemove(id);
      res.locals.data = query;
      return next();
    }
    catch (err) {
      const error = {message: 'Error in deleteNote controller.', error: err}
      next(error);
    }
  },
}

export const { getNotes, addNote, editNote, deleteNote } = dbController;

