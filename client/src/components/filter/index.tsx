import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { FILTER_TRANSACTIONS } from "../../GraphQL/Queries";
import "./styles.css"
const Index = () => {
    const { item } = useParams();
    const naviagate: any = useNavigate();
    const { error, loading, data } = useQuery(FILTER_TRANSACTIONS);
    return (
      <div>
        <div className="my-container">
                <button onClick={() => naviagate('/')}>Back</button>
                {JSON.stringify(data, null, 2)}
        </div>
      </div>
    );
};

export default Index;
