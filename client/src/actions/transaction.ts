import { GET_ALL_DATA, FILTER_DATA, ERROR } from "../types";
import axios from "axios";
import { Dispatch } from "redux";
import toast from "react-hot-toast";
import { useQuery, gql } from "@apollo/client";
import { GET_ALL_TRANSACTIONS } from "../GraphQL/Queries";

//get all data
export const getAllData =
  () =>
  async (dispatch: Dispatch) => {
      const { error, loading, data } = useQuery(GET_ALL_TRANSACTIONS);
      if (data) {
          dispatch({
              type: GET_ALL_DATA,
              payload: data,
          })
      } else if (error) {
          dispatch({
            type: ERROR,
            payload: error,
          });
      }
};
  
export const filterData = () => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get("/URLHERE");
    dispatch({
      type: FILTER_DATA,
      payload: res.data,
    });
  } catch (err: any) {
    if (err) toast.error(err.message);
    dispatch({
      type: ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};