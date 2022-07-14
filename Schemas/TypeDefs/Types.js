const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

const AnonType = new GraphQLObjectType({
  name: "Anon",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    status: { type: GraphQLString },
    type: { type: GraphQLString },
    date: { type: GraphQLString },
  }),
});

const TransactionType = new GraphQLObjectType({
  name: "Transaction",
  fields: () => ({
    date: { type: GraphQLString },
    transactions: {
      type: new GraphQLList(AnonType),
    },
  }),
});

module.exports = {
  AnonType,
  TransactionType,
};
