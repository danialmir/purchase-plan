import { Box } from "@mui/material"
import AddOptionList from "./AddOptionList"
import NavigateButtonGroup from "./NavigateButtonGroup"

function AddOnes() {
    return (
        <div className="w-full h-full flex flex-col pt-11 pb-7 justify-between">
            <Box>
                <h1 className="h1">Pick add-ones</h1>
                <p className="subtitle">Add-ones help enhance your gaming experiance</p>
            </Box>
            <AddOptionList />
            <NavigateButtonGroup to="../stage4-summery"/>
        </div>
    )
}

export default AddOnes
