interface Prop {number:number ,isActive:boolean}

function ListIcon({number ,isActive}:Prop) {
    return (
        <span className={`sidebar-icon ${isActive && 'sidebar-icon--active'}`}>
            {number}
        </span>
    )
}

export default ListIcon
