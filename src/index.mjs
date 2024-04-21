import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

const users = [
  {
    id: 1,
    username: "alif",
    Age: 23,
  },
  {
    id: 2,
    username: "kaif",
    Age: 27,
  },
  {
    id: 3,
    username: "anta",
    Age: 31,
  },
  {
    id: 4,
    username: "abdul",
    Age: 27,
  },
  {
    id: 5,
    username: "verstapen",
    Age: 31,
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Hellow");
});

// app.get("/users", (req, res) => {
//   res.status(200).send(users);
// });

// handle Params
app.get("/users/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId)) return res.status(400).send("Invalid ID");

  const foundUser = users.find((user) => user.id === parsedId);
  if (!foundUser) return res.status(404).send("Not found");
  else return res.status(200).send(foundUser);
});

// handle Query
app.get("/users", (req, res) => {
  const {
    query: { filter, value },
  } = req;

  // when filter and value are undefined
  if (filter && value) {
    return res.send(users.filter((userObj) => userObj[filter].includes(value)));
  }

  return res.send(users);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
