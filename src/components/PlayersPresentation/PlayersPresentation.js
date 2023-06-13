import React, { useState } from "react";
import "./PlayersPresentation.css";
import { useNavigate } from "react-router-dom";

function PlayersPresentation({ PlayerList }) {
  const navigation = useNavigate();
  const [player, setPLayer] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handlePopup = (player) => {
    setIsOpen(true);
    setPLayer(player);
  };

  return (
    <div className="container">
      {PlayerList.map((player, index) => (
        <div key={index} className="column">
          <div className="card">
            <img src={player.img} alt="the player"></img>
            <h3>{player.name}</h3>
            <p className="title">{player.club}</p>
            <p>
              <button
                onClick={
                  // () => handlePopup(player)
                  () => navigation("detail/" + player.id)
                }
              >
                Detail
              </button>
            </p>
          </div>
        </div>
      ))}

      {isOpen ? (
        <div className="overlay">
          <div className="popup">
            <img src={player.img} />
            <h2>{player.name}</h2>
            <a className="close" href="#" onClick={() => setIsOpen(false)}>
              X
            </a>
            <div className="content">{player.info}</div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default PlayersPresentation;
