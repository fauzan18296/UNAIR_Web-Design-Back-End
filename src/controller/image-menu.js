import { getImageFromId } from "../models/image-menu.js";
import { fileURLToPath } from 'url';
import {dirname} from "path";
import { join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const readImage = (req, res) => {
  const imageId = req.params.id
  try{
  getImageFromId(imageId, (error,image) => {
         if (error) {
      return res.status(404).json({ message: error.message });
    }
      const fullImagePath = join(__dirname, '../../public/images', image);
        res.sendFile(fullImagePath);
    })
  }catch(error) {
      console.error(error)
    }
}
