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
         if (data) {
             if (
               item === "failed" ||
               item === "pending" ||
               item === "successful"
             ) {
                 setTransactions(data.getTransactionsBytypesorStatus);
             }
         }
     }, [data, item]);
  return (
    <div>
      <div className="my-container">
        <button onClick={() => naviagate("/")}>Back</button>
        <h1>List of {item} transactions</h1>
        <div>
          {transactions.length > 0 ? (
            <div className="overflow">
              <table>
                <tbody>
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
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              <h4 className="error">
                Invalid search params use sucessful, failed or pending to see
                list of tarnsactions
              </h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
