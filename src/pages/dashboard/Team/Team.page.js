import React from "react";
import withAutorizationNotification from "components/Protected/withAutorization";

import { TeamComponent } from "components";
import "./Team.style.scss";
import { fetchTeam } from "state/TeamSlice";
import { useDispatch } from "react-redux";

function Team() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchTeam());
  }, []);
  return (
    <div className="content-dashboard content-dashboard-Team">
      <TeamComponent.TeamList />
      <TeamComponent.TeamPresence />
    </div>
  );
}

export default withAutorizationNotification(Team,"Rh","admin");
