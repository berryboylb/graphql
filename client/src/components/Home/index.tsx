import React from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_ALL_TRANSACTIONS } from "../../GraphQL/Queries";
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
      <div className="my-container">
        <div className="header">
          <h1>List of Transactions for buycoins africa</h1>
          <Filter />
        </div>
        <Select />
        {transactions.length > 0 ? (
          <>
            {transactions.map((item: any, index: number) => (
              <div key={index}>
                <h3>Date: {item.date}</h3>
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <th>S/N</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Full Name</th>
                        <th>Card Type</th>
                      </tr>
                      {item.transactions.map((item: any) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.status}</td>
                          <td>{item.date}</td>
                          <td>{item.name}</td>
                          <td>{item.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
    </div>
  );
};

export default Index;
