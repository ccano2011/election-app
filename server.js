const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Schema = require("./models/schema");
const userSchema = require("./models/users");
// const postsRoutes = require('./routes/posts');

const db = require("./db/connection");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

// app.use('/api', postsRoutes);

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

app.get("/", (req, res) =>
  res.send(
    "Elections Back-end Root; Test CRUD in postman with localhost:3000/ballotreq or localhost:3000/users"
  )
);

app.get("/ballotreq", async (req, res) => {
  try {
    const info = await Schema.find();
    res.json(info);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/users", async (req, res) => {
  try {
    const info = await user.find();
    res.json(info);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/ballotreq/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const info = await Schema.findById(id);
    if (!info) throw Error("Request not found!");
    res.json(info);
  } catch (e) {
    console.log(e);
    res.send("Catch error: request not found!");
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const info = await user.findById(id);
    if (!info) throw Error("Request not found!");
    res.json(info);
  } catch (e) {
    console.log(e);
    res.send("Catch error: request not found!");
  }
});

app.post("/ballotreq", async (req, res) => {
  try {
    const info = await new Schema(req.body);
    await info.save();
    res.status(201).json(info);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

app.post("/users", async (req, res) => {
  try {
    const info = await new user(req.body);
    await info.save();
    res.status(201).json(info);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

app.put("/ballotreq/:id", async (req, res) => {
  const { id } = req.params;
  await Schema.findByIdAndUpdate(id, req.body, { new: true }, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (!info) {
      return res.status(404).json({ message: "Info not found!" });
    }
    res.status(200).json(info);
  });
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  await user.findByIdAndUpdate(id, req.body, { new: true }, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (!info) {
      return res.status(404).json({ message: "Info not found!" });
    }
    res.status(200).json(info);
  });
});

app.delete("/ballotreq/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Schema.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Request deleted, democracy subverted");
    }
    throw new Error("Request not found, sorry Putin");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/user", async (req, res) => {
  try {
    const info = await userSchema.find();
    res.json(info);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const info = await userSchema.findById(id);
    if (!info) throw Error("Request not found!");
    res.json(info);
  } catch (e) {
    console.log(e);
    res.send("Catch error: request not found!");
  }
});

app.post("/user", async (req, res) => {
  try {
    const info = await new userSchema(req.body);
    await info.save();
    res.status(201).json(info);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

app.put("/user/:id", async (req, res) => {
  const { id } = req.params;
  await userSchema.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (error, info) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      if (!info) {
        return res.status(404).json({ message: "Info not found!" });
      }
      res.status(200).json(info);
    }
  );
});

app.delete("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await userSchema.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Request deleted, democracy subverted");
    }
    throw new Error("Request not found, sorry Putin");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
