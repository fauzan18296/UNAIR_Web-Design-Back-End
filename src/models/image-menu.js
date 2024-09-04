import  dbpool from "../config/database.js";

const getImageFromId = (id, callback) => {
 const dbQuery = 'SELECT image FROM images WHERE id = ?';
 return dbpool.execute(dbQuery,[id], (error, results) => {
       if (error) {
      return callback(error, null);
    }
    if (results.length > 0) {
      let i = 0
      callback(null, results[i++].image)
    }
  })
}
export { getImageFromId };