import { useAccount } from "../context/useAccount";
import PlanCard from "./PlanCard"


function PlanList() {
    const {account,dispatchAccount} =useAccount();
    const {avaliblePlans}:{avaliblePlans:object[]} =account.subscription;
    console.log(avaliblePlans);
    
    
    


    return (
        <ul className="flex mt-7 w-full justify-between gap-5">
            {
avaliblePlans.map((plan)=>
            <PlanCard id={plan.id} planName={plan.name} image={plan.image} price={plan.price}/>
            )}
        </ul>
    )
}

export default PlanList
