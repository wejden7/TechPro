import React from "react";
import withAutorization from "components/Protected/withAutorization";

import { AddNewTeam, UpdateTeam } from "../";


import { useSelector } from "react-redux";

import { selectAllTeam, getTeamStatus } from "state/TeamSlice";
import { getPostesById, getBrancheById } from "state/SettingSlice";

import PuffLoader from "react-spinners/PuffLoader";


import "./TeamList.style.scss";

const Item = ({ team }) => {
  const post = useSelector((state) => getPostesById(state, team.post));
  const branche = useSelector((state) => getBrancheById(state, team.branche));
  return (
    <div className="item">
      <div className="avatar">
        {team.name[0]}
        <span className="status active" />
      </div>
      <div className="username">{team.name}</div>
      <div className="branche">{branche?.label}</div>
      <div className="work-post">{post?.label}</div>
      <div className="time-work">
        {team.timeWork.start}h a {team.timeWork.end}h
      </div>

      <UpdateTeam dataTeam={team} />
    </div>
  );
};
const TeamList = () => {
  const teams = useSelector(selectAllTeam);
  const status = useSelector(getTeamStatus);
  var content = (
    <div className="center">
      <PuffLoader color="#618685" size={100} />
    </div>
  );
  if (status === "succeeded")
    content = teams.map((item, index) => (
      <Item key={index} team={item} />
    ));
  if (status === "failed") content = "Error";
  return (
    <div className="container list">
      <div className="container-header">
       <span className="titel">Team List</span> 
        <AddNewTeam />
      </div>
      <div className="container-body">{content}</div>
    </div>
  );
};

export default TeamList;
