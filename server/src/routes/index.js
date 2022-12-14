import bookRouter from "./books.js";

export default function route(app) {
  app.use("/books", bookRouter);

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
}
