import React from "react";
import "./PlayersPresentation.css";

function PlayersPresentation({ PlayerList }) {
  console.log(PlayerList);

  return (
    <div className="container">
      {PlayerList.map((player, index) => (
        <div key={index} className="column">
          <div className="card">
            <img src={player.img} alt="the player"></img>
            <h3>{player.name}</h3>
            <p className="title">{player.club}</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlayersPresentation;
