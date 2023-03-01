import React from "react";
import {
  AiOutlineHeatMap,
  AiOutlineHome,
  AiOutlineStock,
  AiOutlineUser,
  AiTwotoneAppstore
} from "react-icons/ai";
import { FiActivity } from "react-icons/fi";
import { MdRestaurantMenu } from "react-icons/md";
import { BtnLink, BtnMode, BtnList } from "components";
import {
  DashboardTeamPAth,
  DashboardPAth,
  DashboardStockPath,
  DashboardPreparation,
} from "utils/router/path.utils";

import "./SideBar.style.scss";
const links = [
  {
    name: "Menu",
    icon: <FiActivity />,
  },
  {
    name: "Menu",
    icon: <FiActivity />,
  },
];
const linksp = [
  {
    name: "Cafe",
    icon: <MdRestaurantMenu />,
  },
  {
    name: "Fast Food",
    icon: <FiActivity />,
  },
];
function SideBar() {
  return (
    <div className="dashboard-side-bar">
      <div className="dashboard-side-bar-point" />
      <div className="dashboard-side-bar-links">
        <BtnLink to={DashboardPAth} name="Dashbord" icon={<AiOutlineHome />} />
        <BtnLink to={DashboardTeamPAth} name="Team" icon={<AiOutlineUser />} />
        <BtnLink
          to={DashboardPreparation}
          name="Preparation"
          icon={<AiTwotoneAppstore/>}
        />
        <BtnLink
          to={DashboardStockPath}
          name="Stock"
          icon={<AiOutlineStock />}
        />
        <BtnList icon={<AiOutlineUser />} name="Restaurant" links={links} />
        <BtnLink to="/" name="Employer" icon={<AiOutlineUser />} />
        <BtnList icon={<AiOutlineHeatMap />} name="Plan" links={linksp} />
      </div>
      <BtnMode />
    </div>
  );
}

export default SideBar;
