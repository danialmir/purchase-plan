import { Button, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom";

function PersonalInfoForm() {
    const navigate =useNavigate();

    return (
        <div className="w-full h-full flex flex-col py-7">
        <h1 className="h1">personal info</h1>
        <p className="subtitle">Please provide your name, email address, and phone number</p>
        <form className="mt-8 flex flex-col gap-9 items-end" onSubmit={(e)=>
            {e.preventDefault();
            navigate('/stage2-selectPlan')
        }}>
            <TextField required placeholder="e.g. danialmir" label="Name" className="w-full"  />
            <TextField required placeholder="e.g. example@example.com" label="Email" className="w-full "  />
            <TextField required placeholder="e.g. +1 234 567 890" label="Phone number" className="w-full"  />
            <Button variant="contained" size="medium" color="MarineBlue" type="submit">next step</Button>
        </form>
        </div>
    )
}

export default PersonalInfoForm
