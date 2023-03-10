import express, { Request, Response } from 'express';
import { getNotes, addNote } from '../controllers/db-controller'
const router = express.Router();

const middleware = (req: Request, res: Response, next: any) => {
  try {
    res.send('Success!');
  }
  catch (err) {
    next(err);
  }
};

router.get('/', getNotes, (req, res) => res.status(200).send(res.locals.data));

router.post('/', addNote, (req, res) => res.status(200).send(res.locals.data));

router.put('/', middleware);

router.delete('/', middleware);

export { router as apiRouter };
