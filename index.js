const express = require("express");
const cors = require("cors");
const config = require("config");
const mongoose = require("mongoose");

const PORT = process.env.PORT || config.get("port");
const app = express();

app.use(cors());

app.use(express.json({ extended: true }));

app.use("/api/auth", require("./routes/auth.routes"));

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT} `)
    );
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}

start();
