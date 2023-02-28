import React, { useEffect, useState } from "react";
import { NavBar, SideBar, Loder } from "components";
import { Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.style.scss";
import { UseStateDashboardContext } from "context/contextDaschboard";
import withAuthentification from "components/Protected/withAuthentification";
import { DashboardSettingPath } from "utils/router/path.utils";
import { findAutorization } from "state/AutorizationSlice";
import { findBranche, findPoste } from "state/SettingSlice";
import { store } from "state/store";
import { withAutorizationInVisible } from "../../components/Protected/withAutorization";

const ButtonSeeting = withAutorizationInVisible(() => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(DashboardSettingPath);
  };
  return <button onClick={onClick} className="btn-setting"></button>;
}, "admin");

const Dashboard = (props) => {
  const { open, mode } = UseStateDashboardContext();
  const [fetch, setFetche] = useState(false);
  useEffect(() => {
    setFetche(false);
    const fetchedata = async () =>
      await Promise.all([
        store.dispatch(findBranche()),
        store.dispatch(findPoste()),
        store.dispatch(findAutorization()),
      ]);

    fetchedata().then(() => {
      setFetche(true);
    });
  }, []);

  return fetch ? (
    <div className={`dashboard ${mode} ${open && "side-bar-open"} `}>
      <NavBar />
      <Outlet />
      <ButtonSeeting />

      <SideBar />
    </div>
  ) : (
    <Loder />
  );
};

export default withAuthentification(Dashboard);
