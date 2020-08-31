import React from "react";
import "../Components css/Sidebar.css";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import ChatIcon from "@material-ui/icons/Chat";
import PeopleIcon from "@material-ui/icons/People";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import SideBarRow from "./SideBarRow";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { UseStateValue } from "../StateProvider";
function SideBar() {
  const [{ user }, dispatch] = UseStateValue();
  return (
    <div className="sidebar">
      <SideBarRow src={user?.photoURL} title={user.displayName} />
      <SideBarRow
        Icon={LocalHospitalIcon}
        title="Covid-19 Information Center"
      />
      <SideBarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SideBarRow Icon={PeopleIcon} title="Friends" />
      <SideBarRow Icon={ChatIcon} title="Messenger" />
      <SideBarRow Icon={StorefrontIcon} title="Marketplace" />

      <SideBarRow Icon={VideoLibraryIcon} title="Videos" />
      <SideBarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
    </div>
  );
}

export default SideBar;
