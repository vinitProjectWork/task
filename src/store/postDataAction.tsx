import { STORE_DATA } from "./actionTypes";
import { ITableData } from "../types";

const storeData = (_payload: ITableData) => {
  return {
    type: STORE_DATA,
    payload: _payload,
  };
};

export { storeData };
