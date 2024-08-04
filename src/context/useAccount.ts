import { useContext } from "react";
import Account, { accountcontext } from "../module";


export const useAccount = function () {
  const accountProperties = useContext(accountcontext);
  return accountProperties;
};
