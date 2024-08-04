import { createContext } from "react";

 enum PlanDurations {
    monthly='monthly',
    yearly ='yearly'
}



enum actionList {
    updateName = "info/name/update",
    updateEmail = "info/email/update",
    updatePhoneNumber = "info/phoneNumber/update",
    changeDuration='plan/changeDuration',
    _fetchPlans = 'plan/fechPlans',
    _plansLoaded='plan/plansLoaded' 
}

interface subscription{
    avaliblePlans:object[];
    isPlansLoaded:boolean;
    selectedPlan:object;
    addones: object[];
    duration:PlanDurations;
    expences:number[];
}

const BASE_URL = 'http://localhost:3000';

interface info {
    name:string,
    email:string,
    phoneNumber:string,
}
interface Plan { 
    id:string;
    name:string;
    price:{
        monthly:number;
        yearly:number;
    };
    image:string;
    discount:{duration:string,massage:string,price:120}
}

interface Action {
  type: actionList;
  payload: unknown;
}

const accountcontext = createContext<{account:Account,dispatchAccount:(action:Action)=>void}|undefined>(undefined);

export default interface Account {
    info:info,
    subscription:subscription
    
}
export { accountcontext, actionList, PlanDurations, BASE_URL };
export type { subscription };
export type { info};
export type{ Plan};
export type {Action}
