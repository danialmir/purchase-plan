import { Navigate, Route, Routes } from "react-router"
import PersonalInfoForm from "./PersonalInfoForm"
import { BrowserRouter } from "react-router-dom"
import SelectPlan from "./SelectPlan"
import AddOnes from "./AddOnes"

function Step() {
    return (
        <div className="h-full flex-grow flex justify-center">
            <div className="w-4/5">
                <BrowserRouter>
                <Routes>
                   <Route path="/" element={<Navigate to='/stage2-selectPlan' />} />
                    <Route path="/stage1-personalInfo" element={<PersonalInfoForm/>}/>
                    <Route path="/stage2-selectPlan" element={<SelectPlan />}/>
                    <Route path="/stage3-add-ones" element={<AddOnes />}/>
                </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default Step
