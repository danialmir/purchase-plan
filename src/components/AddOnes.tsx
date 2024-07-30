import { Box } from "@mui/material"
import AddOptionList from "./AddOptionList"

function AddOnes() {
    return (
        <div className="w-full h-full flex flex-col pt-11 pb-7">
            <Box>
                <h1 className="h1">Pick add-ones</h1>
                <p className="subtitle">Add-ones help enhance your gaming experiance</p>
            </Box>
            <AddOptionList />
        
            
        </div>
    )
}

export default AddOnes
