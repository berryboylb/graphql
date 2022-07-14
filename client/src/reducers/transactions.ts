import { GET_ALL_DATA, FILTER_DATA, ERROR } from "../types";

const initialState: { data: any[]; filter: any[]; error: {} } = {
  data: [],
    filter: [],
  error: {}
};

export default function transaction(state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_DATA:
      return {
        ...state,
        data: payload,
      };
    case FILTER_DATA:
      return {
        ...state,
        data: payload,
      };
    case ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
