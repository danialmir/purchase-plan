import PlanCard from "./PlanCard"


function PlanList() {
    return (
        <ul className="flex mt-7 w-full justify-between gap-5">
            <PlanCard id="arcade" planName="arcade" image="/assets/images/icon-arcade.svg" price={23}/>
            <PlanCard id="advanced" planName="advanced" image="/assets/images/icon-advanced.svg" price={23}/>
            <PlanCard id="pro" planName="pro" image="/assets/images/icon-pro.svg" price={23}/>
        </ul>
    )
}

export default PlanList
