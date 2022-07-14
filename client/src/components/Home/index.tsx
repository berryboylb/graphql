import React from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_ALL_TRANSACTIONS } from "../../GraphQL/Queries";
import { getAllData } from "../../actions/transaction";
import transaction from "../../reducers/transactions";
import Select from "./select";
import Filter from "./filter";
import "./styles.css"

type Props = {};
const Index: React.FC<Props> = () => {
  const { error, loading, data } = useQuery(GET_ALL_TRANSACTIONS);
  const [transactions, setTransactions] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    if (data) setTransactions(data.getAllTransactions);
  }, [data]);
  return (
    <div className="contain">
      <div className="header">
        <h1>List of Transactions for buycoins africa</h1>
        <Filter />
      </div>
      <Select />
      {transactions.length > 0 ? (
        <>
          {transactions.map((item: any) => (
            <div>
              <h3>Date: {item.date}</h3>
              <div>
                {item.transactions.map((item: any) => (
                  <div>
                    <h4>{item.id}</h4>
                    <h4>{item.status}</h4>
                    <h4>{item.date}</h4>
                    <h4>{item.name}</h4>
                    <h4>{item.type}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <div>
          <h2>An Error Ocurred</h2>
        </div>
      )}
    </div>
  );
};

export default Index;
