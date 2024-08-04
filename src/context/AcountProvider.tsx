import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import Account, { BASE_URL, PlanDurations } from "../module";
import { info as Info, subscription as Subscription } from "../module";
import { json } from "react-router-dom";
import { duration } from "@mui/material";

const accountcontext = createContext({});



const info: Info = {
  name: "",
  email: "",
  phoneNumber: "",
};
const subscription: Subscription = {
  avaliblePlans:[],
  isPlansLoaded:false
  ,selectedPlan: {},
  addones: [],
  duration: PlanDurations.monthly,
  expences: [0],
};

enum actionList {
  updateName = "info/name/update",
  updateEmail = "info/email/update",
  updatePhoneNumber = "info/phoneNumber/update",
  changeDuration='plan/changeDuration',
  _fetchPlans = 'plan/fechPlans',
  _plansLoaded='plan/plansLoaded' 
}

const accountReducer = function (
  { info, subscription }: Account,
  { type, payload }: { type: actionList; payload: unknown },
) {
  switch (type) {
    case actionList.updateName:
      return { subscription, info: { ...info, name: payload } };
    case actionList.updateEmail:
      return { subscription, info: { ...info, email: payload } };
    case actionList.updatePhoneNumber:
      return { subscription, info: { ...info, phoneNumber: payload } };
    case actionList._fetchPlans:
      return {info , subscription}
    case actionList._plansLoaded:
      return {info,subscription:{...subscription, isPlansLoaded:true , avaliblePlans:payload}}
    case actionList.changeDuration:
      return subscription.duration === PlanDurations.monthly ? {info,subscription:{...subscription, duration: PlanDurations.yearly}} :{info,subscription:{...subscription, duration: PlanDurations.monthly}} 
    default:
      console.error("unknown action");
  }
};

function ContextProvider({ children }: { children: ReactNode }) {
  const [account, dispatchAccount] = useReducer(accountReducer, {
    info,
    subscription,
  });

  useEffect(function(){
    dispatchAccount({type:actionList._fetchPlans})
    async function fetchPlans(baseUrl:string) {
      const request = await fetch(`${baseUrl}/plans`);
      const data = await request.json();
      dispatchAccount({type:actionList._plansLoaded ,payload:data})
    }
    fetchPlans(BASE_URL)
  },[])

  return (
    <accountcontext.Provider value={{ dispatchAccount, account }}>
      {children}
    </accountcontext.Provider>
  );
}
export { accountcontext, actionList};
export default ContextProvider;
