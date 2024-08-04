import { SetStateAction, useState } from "react";
import AddOption from "./AddOption"


function AddOptionList() {
    const [addedOptions,setAddedOptions]:[string[],React.Dispatch<SetStateAction<string[]>>] =useState<string[]>([]);
    type optionEvents = (id:string,action?:string)=>boolean|undefined;
    const optionEvents: optionEvents = function (id,action='status'){
        if(id&&action === 'status') return addedOptions.includes(id)
        if(id && action === 'add') {setAddedOptions(addedOptions=> [...addedOptions , id]);
            return true
        }
        if(id && action === 'delete') {setAddedOptions(addedOptions=> [...addedOptions.filter(value=> value !== id)]);
                return false
        }
    };


    return (
        <ul className="w-full flex-grow  flex flex-col justify-center gap-3">
            <AddOption optionEvents={optionEvents} title="Online service" subtitle="Access to multiplayer games" id="online-service" price={1} />
            <AddOption optionEvents={optionEvents} title="Larger storage" subtitle="Extra 1TB of cloud save" id="larger-storage" price={2} />
            <AddOption optionEvents={optionEvents} title="Customizable Profile" subtitle="Custom theme on your profile" id="costomizable-profile" price={2} />
        </ul>
    )
}

export default AddOptionList
