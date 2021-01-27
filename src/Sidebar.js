import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from './StateProvider';

function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow 
                        src={user.photoURL}
                        Title="Saurabh kanswal"            
            />
            <SidebarRow Icon={LocalHospitalIcon}
                        Title='Covid19 Information Center'
            />
            <SidebarRow Title='Pages' 
                        Icon={EmojiFlagsIcon}
            />
            <SidebarRow Title='friend'
                        Icon={PeopleIcon}
            />
            <SidebarRow Title='Messenger'
                        Icon={ChatIcon}
            />
            <SidebarRow Title='Market Place'
                        Icon={StorefrontIcon}
            />
            <SidebarRow Title='Videos'
                        Icon={VideoLibraryIcon}
            />
            <SidebarRow Title='Market Place'
                        Icon={ExpandMoreIcon}
            />
        </div>
    )
}

export default Sidebar;
