import express from 'express';
import { readImage } from '../controller/image-menu.js';
const route = express.Router();

route.get('/:id', readImage)

export default route