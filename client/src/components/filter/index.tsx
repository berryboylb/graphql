import React from "react";
import { useParams } from "react-router-dom";

const Index = () => {
  const { item } = useParams();
    return <div>{item}
    </div>;
};

export default Index;
