import React from 'react'
import './sidebarRow.css'
import {Avatar} from '@material-ui/core'

function SidebarRow({src, Icon, Title}) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <h4>{Title}</h4>
        </div>
    )
}

export default SidebarRow
