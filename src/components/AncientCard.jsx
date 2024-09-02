import React from "react";

const AncientCard = ({ img, name, history }) => {
  return (
    < >
      <div className="cards">
        <div className="container-card">
        <div className="on">
          <img className="card-img" src={img} alt="img" /> 
          <h3>{name}</h3>
        </div>

        <div className="arka">
          {history.map((item) => (
            <ul>
              <li className="list-unstyled">🏛️{item}</li>
            </ul>
          ))}
        </div>
        </div>
      </div>
    </>
  );
};

export default AncientCard;
