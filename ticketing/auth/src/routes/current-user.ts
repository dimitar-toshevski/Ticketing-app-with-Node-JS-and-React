import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
  if (!req.session?.jwt) {
    return res.send({ currentUser: null });
  }

  const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!);
});

export { router as currentUserRouter };
