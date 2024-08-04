export enum PlanDurations {
    monthly='monthly',
    yearly ='yearly'
}

export interface subscription{
    avaliblePlans:object[];
    isPlansLoaded:boolean;
    selectedPlan:object;
    addones: object[];
    duration:PlanDurations;
    expences:number[];
}

export const BASE_URL = 'http://localhost:3000';

export interface info {
    name:string,
    email:string,
    phoneNumber:string,
};


export default interface Account {
    info:info,
    subscription:subscription

}
