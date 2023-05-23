import React from "react";
import "./Main.css";
import { PlayerList } from "../../shared/ListOfPlayers";
import PlayersPresentation from "../PlayersPresentation/PlayersPresentation";

export const Main = () => {
  return (
    <div>
      <PlayersPresentation PlayerList={PlayerList} />
    </div>
  );
};
