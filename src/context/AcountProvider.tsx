import { ReactNode ,useEffect, useReducer } from "react";
import Account, { actionList, BASE_URL, PlanDurations ,accountcontext, Action} from "../module";
import { info as Info, subscription as Subscription } from "../module";



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


const accountReducer: (account:Account,action:Action) => Account = function (
  account: Account,
  action:Action
) {
  const { info, subscription } = account;
  const { type, payload } = action;

  switch (type) {
    case actionList.updateName:
      return { subscription, info: { ...info, name: payload } }as Account;
    case actionList.updateEmail:
      return { subscription, info: { ...info, email: payload } } as Account;
    case actionList.updatePhoneNumber:
      return { subscription, info: { ...info, phoneNumber: payload } } as Account;
    case actionList._fetchPlans:
      return {info , subscription} as Account
    case actionList._plansLoaded:
      return {info,subscription:{...subscription, isPlansLoaded:true , avaliblePlans:payload}} as Account
    case actionList.changeDuration:
      return subscription.duration === PlanDurations.monthly ? {info,subscription:{...subscription, duration: PlanDurations.yearly}} as Account :{info,subscription:{...subscription, duration: PlanDurations.monthly}} as Account 
    default:
      console.error("unknown action");
      return account
  }
};

function ContextProvider({ children }: { children: ReactNode }) {
  const [account, dispatchAccount] = useReducer<(account:Account,action:Action)=>Account>(accountReducer,{
    info,
    subscription,
  });
  useEffect(function(){
    dispatchAccount({type:actionList._fetchPlans,payload:''})
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

export default ContextProvider;
