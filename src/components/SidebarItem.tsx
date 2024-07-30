import { ListItem, ListItemIcon, Typography } from "@mui/material"
import ListIcon from "./ListIcon"

interface Props {
    stepNumber:number;
    stepTitle:string;
}

function SidebarItem({stepNumber,stepTitle}:Props) {
    return (
             <ListItem>
                    <ListItemIcon><ListIcon number={stepNumber} isActive={false}/></ListItemIcon>
                    <div className="uppercase font-Ubuntu">
                        <Typography variant="caption" component='span' sx={{color:'hsl(229, 24%, 87%)',lineHeight:'1rem' }}>step {stepNumber}</Typography>
                        <Typography variant="subtitle2" component='p' sx={{color:'white',fontWeight:'600' ,lineHeight:'1rem'}}>{stepTitle}</Typography>
                    </div>
                </ListItem>
    )
}

export default SidebarItem
