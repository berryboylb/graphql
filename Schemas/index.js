const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
} = graphql;
const Types = require("./TypeDefs/Types");
const { AnonType, TransactionType } = Types
const userData = require("../MOCK_DATA.json");

 const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllTransactions: {
      //returns all transactions and group them by date.
      //args are not needed but will be needed for other enpoints
      type: new GraphQLList(TransactionType),
      args: {},
      resolve(parent, args) {
        //if i was using a database this is where i'd make the query
        return userData;
        //return test;
      },
    },
    getTransactionsBytypesorStatus: {
      type: new GraphQLList(AnonType),
      args: {
        status: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        const data = userData.map(({ transactions }) =>
          transactions.find(({ status }) => status === args.status)
        );
        return data;
      },
    },
  },
});
 const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addTransaction: {
      type: TransactionType,
      args: {
        name: { type: GraphQLString },
        status: { type: GraphQLString },
        type: { type: GraphQLString },
        date: { type: GraphQLString },
      },
      resolve(parent, args) {
        // userData.push({
        //   id: userData.length + 1,
        //   Name: args.name,
        //   Status: args.status,
        //   Type: args.type,
        //   Date: args.date,
        // });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
