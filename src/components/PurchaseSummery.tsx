import { Link } from "react-router-dom"


function PurchaseSummery() {
    return (
        <div className="w-full flex-grow flex flex-col gap-2">
            <div  className="bg-light-gray rounded flex-grow grid grid-cols-1 grid-rows-5 p-4">
                <span className="row-span-2 flex justify-between border-b-Cool-gray border-b-2">
                    <span className="flex flex-col">
<h4 className="text-base text-Marine-blue font-bold tracking-wide">Plan(duration)</h4>
<Link to='i dont know' className="text-sm capitalize text-Cool-gray hover:text-Purplish-blue hover:underline">change</Link>
                        </span>
                        <span className="flex justify-center items-center">
<h5 className="text-base text-Marine-blue font-bold tracking-wide">&price/mo/yr</h5>
                        </span>
                </span>
                <span className="flex justify-between p-2">
                    <p className="text-sm text-Cool-gray ">add-one</p>
                    <span><h5 className="text-sm text-Marine-blue">&price/mo/yr</h5>

                    </span>
                    
                </span>
            </div>
            <div className="flex justify-between px-6">
                <h2 className="font-bold tracking-wide text-base text-Marine-blue ">total</h2>
                <span className="text-Purplish-blue text-lg">9$</span>
            </div>
        </div>
    )
}

export default PurchaseSummery
