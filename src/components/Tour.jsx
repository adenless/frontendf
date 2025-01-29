import React from "react";

function Tour({ image, date, title, info, location, cost, duration }) {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt={title} />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map" />
            </span>
            {location}
          </p>
          <p>from €{cost ? cost : "N/A"}</p>
          <p>{duration} days</p>
        </div>
      </div>
    </article>
  );
}

export default Tour;
