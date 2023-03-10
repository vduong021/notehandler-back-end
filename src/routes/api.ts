import express, { Request, Response } from 'express';

const router = express.Router();

const middleware = (req: Request, res: Response, next: any) => {
  try {
    res.send('Success!');
  }
  catch (err) {
    next(err);
  }
};

router.get('/', middleware);

router.post('/', middleware);

router.put('/', middleware);

router.delete('/', middleware);

export { router as apiRouter };
