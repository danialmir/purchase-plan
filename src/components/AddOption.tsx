

interface Props{
    id:string;
    title:string;
    price:number;
    subtitle:string;
    optionEvents: (id:string , action?:string)=>boolean|void
    duration?:string
}

function AddOption({id,title,subtitle,price,optionEvents,duration='monthly'}:Props) {
    return (
        <li className={`h-16 rounded overflow-hidden flex border-Cool-gray border-2 px-6 py-1 gap-6 `}>
            <input type="checkbox" name="add-one" id={id} checked={optionEvents(id)} onChange={e=>e.target.checked?optionEvents(id,'add'): optionEvents(id , 'delete')
            }/>
            <label htmlFor={id} className="flex-grow flex justify-center flex-col">
                <h3 className="text-sm font-bold tracking-wide text-Marine-blue">{title}</h3>
                <p className="text-xs text-Cool-gray">{subtitle}</p>
            </label>
            <span className="text-Purplish-blue font-thin flex items-center">
                {`+$${price}/${duration === 'monthly' ? 'mo':'yr'}`}
            </span>
            
        </li>
    )
}

export default AddOption
