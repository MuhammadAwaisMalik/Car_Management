import React from "react";

const Card = ({
  card_title,
  card_desc,
  card_action,
  card_img,
  card_style,
  card_desc_title_style,
  card_desc_title,
}) => {
  return (
    <>
      <div className={`card ${card_style}`}>
        <img src={card_img} className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">{card_title}</h3>
          <h5 className={`${card_desc_title_style}`}>{card_desc_title}</h5>
          <p className="card-text">{card_desc}</p>
          {card_action && (
            <a href="#" className="btn btn-primary">
              {card_action || null}
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
