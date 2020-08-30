import React from "react";
import { Avatar } from "@material-ui/core";
import "../Components css/SideBarRow.css";
function SideBarRow({ title, src, Icon }) {
  return (
    <div className="SideBarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}

      <h4>{title}</h4>
    </div>
  );
}

export default SideBarRow;
