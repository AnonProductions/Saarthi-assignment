import "./Card.css";

const Card = ({ title, paragraph, cta, outline }) => {
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      {paragraph ? <p className="card__text">{paragraph}</p> : <></>}
      {cta ? (
        <button className={`card__cta ${outline ? "outlined" : ""}`}>
          {cta}
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Card;
