import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

function NavigateButtonGroup({to, primeryButtonText='next Step'}:{to:string,primeryButtonText?:string}) {
const navigate =useNavigate();

    return (
<div className="flex justify-between">
                <Button variant="text" color="Gray" onClick={()=>navigate(-1)}>go Back</Button>
                <Button variant="contained" color="MarineBlue" size="medium" type="submit" onClick={()=>navigate(to)}>{primeryButtonText}</Button>
            </div>
    )
}

export default NavigateButtonGroup

