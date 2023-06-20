import React, { useState } from "react";
import "./PlayersPresentation.css";
import { useNavigate } from "react-router-dom";
import { Icon, CardTitle, Row, Col, Card, Container } from "react-materialize";
import { Link } from "react-router-dom";

function PlayersPresentation({ PlayerList }) {
  const navigation = useNavigate();
  const [player, setPLayer] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handlePopup = (player) => {
    setIsOpen(true);
    setPLayer(player);
  };

  return (
    <Container>
      <Row>
        {PlayerList.map((player, index) => (
          // <div key={index} className="column">
          //   <div className="card">
          //     <img src={player.img} alt="the player"></img>
          //     <h3>{player.name}</h3>
          //     <p className="title">{player.club}</p>
          //     <p>
          //       <button
          //         onClick={
          //           // () => handlePopup(player)
          //           () => navigation("detail/" + player.id)
          //         }
          //       >
          //         Detail
          //       </button>
          //     </p>
          //   </div>
          // </div>
          <Col className="colPlayer" m={4} s={12}>
            <Card
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image={player.img} reveal waves="light" />}
              reveal={<p>{player.info}</p>}
              revealIcon={<Icon>more_vert</Icon>}
              title={player.name}
            >
              <p>
                <Link to={`detail/${player.id}`}>
                  <a href="#">Detail</a>
                </Link>
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

// {isOpen ? (
//   <div className="overlay">
//     <div className="popup">
//       <img src={player.img} />
//       <h2>{player.name}</h2>
//       <a className="close" href="#" onClick={() => setIsOpen(false)}>
//         X
//       </a>
//       <div className="content">{player.info}</div>
//     </div>
//   </div>
// ) : (
//   <div></div>
// )}

export default PlayersPresentation;
