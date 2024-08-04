import { useAccount } from "../context/useAccount";
import { Plan } from "../module";
import PlanCard from "./PlanCard"


function PlanList() {
    const {account}=useAccount();
    const {avaliblePlans}:{avaliblePlans:Plan[]} =account.subscription;
    
    


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
