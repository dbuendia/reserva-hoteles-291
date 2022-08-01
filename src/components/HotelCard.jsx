import locationIcon from "../icons/location-pin.svg";
import bedIcon from "../icons/bed.svg";
import dollarIcon from "../icons/dollar.svg";

function HotelCard(props) {
  return (
    <div className="hotel-card">
      <div className="hotel-card-header">
        <img src={props.photo} alt="La bamba de areco"></img>
      </div>
      <div className="hotel-card-body">
        <span className="hotel-card-name">{props.name}</span>
        <p className="hotel-card-description">{props.description}</p>
        <div className="hotel-card-tag-container">
          <div className="tag">
            <img
              className="icon-location-pin"
              src={locationIcon}
              alt="location"
            />
            {props.city}, {props.country}
          </div>
          <div className="tag">
            <img className="icon-bed" src={bedIcon} alt="bed" />
            {props.rooms} Habitaciones
          </div>
          <div className="tag">
            <img className="icon-dollar" src={dollarIcon} alt="dollar" />
            {props.price}
          </div>
        </div>
      </div>
      <div className="hotel-card-footer">
        <button>Reservar</button>
      </div>
    </div>
  );
}

export default HotelCard;
