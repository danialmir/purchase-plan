import { Switch } from "@mui/material"
import PlanList from "./PlanList"
import { Dispatch, SetStateAction, useRef, useState } from "react";
import NavigateButtonGroup from "./NavigateButtonGroup";

declare module '@mui/material/Switch'{ 
    interface SwichPropsColorOverrides {
MarineBlue:true;
} }

function SelectPlan() {
const [plan,setPlan]:[string,Dispatch<SetStateAction<string>>] =useState("monthly") ;

    return (
        <div className="pt-11 flex flex-col justify-between h-full pb-4">
            <div>
                <h1 className="h1">Select your plan</h1>
                <p className="subtitle">You have the option of monthly or yearly billing</p>
            </div>
            <div className="flex-grow">
                <PlanList />
                <div className="mt-6 w-full bg-light-gray h-10 rounded flex justify-center items-center">
                    <span>
                        <label htmlFor="duration" className={`text-${plan==='monthly'?'Marine-blue':'Cool-gray'} font-bold text-sm capitalize `}>monthly</label>
                        <Switch id="duration" color="MarineBlue"className="mx-4 peer" value={plan} onChange={(e)=>{
                        if(e.target.value === 'monthly') setPlan('yearly')
                        else setPlan('monthly')   
                        }}/>
                    <label htmlFor="duration" className={`text-${plan==='yearly'?'Marine-blue':'Cool-gray'} font-bold text-sm capitalize `}>yearly</label>
                    </span>
                </div>
            </div>
            <NavigateButtonGroup to='../stage3-add-ones'/>
            </div>
    )
}

export default SelectPlan
