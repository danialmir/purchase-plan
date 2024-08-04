import { ReducerAction, useContext } from "react";
import { accountcontext } from "./AcountProvider";

export const useAccount = function () {
  const accountProperties = useContext(accountcontext);
  return accountProperties;
};
