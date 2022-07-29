function HotelCard(props) {
  console.log(props); // undefined
  return (
    <div className="hotel-card">
      <img src={props.img} alt="Bamba de Areco"></img>
      <div>
        <span>{props.name}</span>
      </div>
      <div>
        <p>{props.description}</p>
      </div>

      <div className="tag-container">
        <div>
          {props.city} {props.country}
        </div>
        <div>{props.rooms} Habitaciones</div>
        <div>Price {props.price}</div>
      </div>
      <div className="hotel-card-footer">Reservar</div>
    </div>
  );
}

export default HotelCard;
