import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { FILTER_TRANSACTIONS } from "../../GraphQL/Queries";
import "./styles.css";
const Index = () => {
  const { item } = useParams();
  const naviagate: any = useNavigate();
  const { error, loading, data } = useQuery(FILTER_TRANSACTIONS, {
    variables: { status: item },
  });
    const [transactions, setTransactions] = React.useState<Array<any>>([]);
     React.useEffect(() => {
       if (data) setTransactions(data.getTransactionsBytypesorStatus);
     }, [data]);
  return (
    <div>
      <div className="my-container">
        <button onClick={() => naviagate("/")}>Back</button>

        <h1>List of {item} transactions</h1>
        <div>
          {transactions.length > 0 ? (
            <div>
              <table>
                <tr>
                  <th>S/N</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Full Name</th>
                  <th>Card Type</th>
                </tr>
                {transactions.map((item: any) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.status}</td>
                    <td>{item.date}</td>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                  </tr>
                ))}
              </table>
            </div>
          ) : (
            <div>
              <h2>An Error Ocurred</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
