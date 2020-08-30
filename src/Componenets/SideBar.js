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
function SideBar() {
  return (
    <div className="sidebar">
      <SideBarRow
        src="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s48-c-k-c0xffffffff-no-rj-mo"
        title="Clever Programmer"
      />
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
