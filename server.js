const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json({ extended: false }));
const PORT = process.env.PORT || 5000;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas")
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () =>
  console.log(`Server is listening on port ${process.env.NODE_ENV} ${PORT}`)
);
