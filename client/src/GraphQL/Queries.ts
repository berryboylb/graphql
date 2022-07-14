import { gql } from "@apollo/client"

export const GET_ALL_TRANSACTIONS = gql`
  query {
    getAllTransactions {
      date
      transactions {
        id
        name
        status
        type
        date
      }
    }
  }
`;

export const FILTER_TRANSACTIONS = gql`
  query {
    getTransactionsBytypesorStatus(status: "failed") {
      id
      name
      status
      type
      date
    }
  }
`;