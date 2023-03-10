import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import withAutorizationNotification from "components/Protected/withAutorization";
import "./Setting.style.scss";
function Setting() {
  let activeClassName = "underline";
  return (
    <div className="content-dashboard content-dashboard-setting">
      <div className="content-dashboard-setting-link">
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
          to=""
          end
        >
          Préférénces du compte
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
          to="Parametre"
          end
        >
          Parametre
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
          to="f"
          end
        >
          Historique d'activité
        </NavLink>
      </div>
      <div className="content-dashboard-setting-content">
        <Outlet />
      </div>
    </div>
  );
}

export default withAutorizationNotification(Setting,"admin");
