import connectionDB from "../../models/database.js";

export default new (class BookController {
  page = async (req, res) => {
    let books_limit = 9;
    let offset = (req.params.page - 1) * books_limit;
    let queries =
      "SELECT * FROM allbook LIMIT " +
      String(books_limit) +
      " OFFSET " +
      String(offset);
    console.log(req.params.page);
    let [rows, fields] = await connectionDB.execute(queries);
    res.send(rows);
  };

  detail = async (req, res) => {
    let queries =
      "SELECT * FROM allbook WHERE allbook.id = " + String(req.params.id);
    let [row, fields] = await connectionDB.execute(queries);
    res.send(row);
  };

  index = async (req, res) => {
    let [rows, fields] = await connectionDB.execute("SELECT * FROM tbl_book");
    res.send(rows);
  };
})();
