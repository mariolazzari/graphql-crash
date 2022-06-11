const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
require("dotenv").config();

const { PORT, NODE_ENV } = process.env;

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: NODE_ENV === "development",
  })
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
