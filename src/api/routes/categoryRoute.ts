import express from 'express';
import {
  getCategories,
  getCategory,
  postCategory,
  putCategory,
} from '../controllers/categoryController';

const router = express.Router();

router.route('/').post(postCategory).get(getCategories);

router.route('/:id').get(getCategory).put(putCategory).delete();

export default router;
