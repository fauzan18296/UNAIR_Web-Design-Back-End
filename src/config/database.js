import 'dotenv/config';
import mysql from 'mysql2';
const db = mysql.createPool(process.env.DB_URL)

export default db