import NavigateButtonGroup from "./NavigateButtonGroup"
import PurchaseSummery from "./PurchaseSummery"

function Summery() {
    return (
        <div className="pt-11 pb-7 h-full  w-full flex flex-col justify-between">           
            <span className="w-full h-2/3 flex flex-col gap-4">
                <span>
                    <h1 className="h1">Finishing up</h1>
                    <p className="subtitle">Double check everything before confirming</p>
                </span>
                <PurchaseSummery />
            </span>
            <NavigateButtonGroup to="../thank-you" primeryButtonText="confirm" />
        </div>
    )
}

export default Summery
