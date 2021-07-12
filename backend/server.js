// nodemon - instead of restarting everytime it restarts whenever we edit files

const express = require("express");
//const notes = require("./data/notes");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes.js");
const noteRoutes = require("./routes/noteRoutes.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const path = require("path");
dotenv.config();
connectDB();
app.use(express.json());

const PORT = process.env.PORT || 5000;

/*app.get("/api/notes", (req, res) => {
  res.json(notes);
});*/

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);
// --deployment--
__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

// --deployment---
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`listening to port ${PORT}`));
