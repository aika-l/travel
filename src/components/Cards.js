import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-11.jpeg"
              text="Explore the hidden lake of Kel-Suu"
              label="Luxery"
              path="/services"
            />
            <CardItem
              src="images/j-o.jpeg"
              text="Climb up into picturesque Jeti-Oguz gorge"
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/girl.jpeg"
              text="Experience the Amazing World Nomads Games"
              label="Exotic"
              path="/services"
            />
            <CardItem
              src="images/snow.jpeg"
              text="Skii or paraglide down the Montains of Ala-Too"
              label="Adrenaline"
              path="/services"
            />
            <CardItem
              src="images/yurta.jpeg"
              text="Stay close to the nature and book your stay in portable Yurta"
              label="Relax"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
