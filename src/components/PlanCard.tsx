import { Typography } from "@mui/material"
import { useAccount } from "../context/useAccount"

interface Props {
    id:string
    planName:string
    price:{
        monthly:number,
        yearly:number
    }
    image:string
    duration?:string
}


function PlanCard({id,planName,price,image,duration='monthly'}:Props) {

    
    return (
            <li className="w-32 h-40 flex flex-col">
            <input type="radio" name="plans" id={id} className="peer hidden" onChange={e=> console.log(`${e.target.name}=${e.target.id}`)
            }/>
            <label htmlFor={id} className="peer-checked:bg-mid-gray peer-checked:border-Purplish-blue  transition-all duration-200 h-full w-full flex flex-col justify-between items-start border-2 border-light-gray p-4 rounded-lg">
            <img src={image} alt="plan logo" />
                <div>
                    <Typography variant="subtitle1" className="text-Marine-blue">{planName}</Typography>
                    <Typography variant="subtitle2" className="text-Cool-gray">{`${duration==="monthly"? price.monthly:price.yearly}$${duration === 'monthly' ? '/mo': '/yr'}`}</Typography>
                </div>
                </label>
            </li>
    )
}

export default PlanCard
// {className:string,planName:string,price:number,duration?:string,image:string,id:string}
// {className,planName?,price,duration?='monthly',image,id}