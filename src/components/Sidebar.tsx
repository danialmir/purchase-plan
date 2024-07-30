import { List } from "@mui/material"
import SidebarItem from "./SidebarItem"

function Sidebar() {
    return (
        <nav className="bg-sideBar-desktop h-full min-w-[30%] rounded-2xl bg-cover">
            <List>
                <SidebarItem stepNumber={1} stepTitle='your info'/>
                <SidebarItem stepNumber={2} stepTitle='select plan'/>
                <SidebarItem stepNumber={3} stepTitle='add-ones'/>
                <SidebarItem stepNumber={4} stepTitle='summery'/>
            </List>
        </nav>
    )
}

export default Sidebar
