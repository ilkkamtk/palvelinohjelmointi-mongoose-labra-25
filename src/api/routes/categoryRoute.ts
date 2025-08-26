import express from 'express';
import {postCategory} from '../controllers/categoryController';

const router = express.Router();

router.route('/').post(postCategory).get();

router.route('/:id').get().put().delete();

export default router;
