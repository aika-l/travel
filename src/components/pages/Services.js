import React, { useState, useEffect } from "react";
import "./Services.css";
import Slider from "react-slick";

export default function Services() {
  let images = [
    {
      image: "images/kel1.jpeg",
    },
    {
      image: "images/kel2.jpeg",
    },
    {
      image: "images/kel3.jpeg",
    },
  ];

  return (
    <>
      <div className="service">
        <h1 className="services">SERVICES</h1>
        <div className="service-type">
          <div className="desc">
            <h2>Lake Kel-Suu</h2>
            <p>
              The sky-blue lake of Kel-Suu is located in the valley of Kok-Kiya
              at the altitude of 3514 m, between high rocky mountains. It was
              formed thousands of years ago, because of the destruction of the
              mountain massif.
            </p>
            <p>
              {" "}
              From all sides Kel-Suu is surrounded by steep cliffs with numerous
              caves and pits. In the middle of the lake there is a small stone
              island.
            </p>
            <button>
              <a href="https://triptokyrgyzstan.com/en/destinations/places/kel-suu-lake">
                Book your trip
              </a>
            </button>
          </div>
          <div className="pictures">
            <section className="slider">
              <div className="bigPic">
                <img src="images/kel1.jpeg" alt="pic" className="image" />
              </div>
              <div className="picSet">
                <img className="smallImg" src="images/kel1.jpeg" />
                <img className="smallImg" src="images/kel2.jpeg" />
                <img className="smallImg" src="images/kel3.jpeg" />
              </div>
            </section>
          </div>
        </div>
        <div className="service-type">
          <div className="desc">
            <h2>Jeti-Oguz gorge</h2>
            <p>
              Its name is translated from Kyrgyz language means “Seven bulls”.
              The name is symbolic, because there is a 35 km long wall of seven
              huge red-brown cliffs resembling ranked furious bulls standing
              together.
            </p>
            <p>
              Jeti-Oguz is also famous for its hot springs with water enriched
              with radon and hydrogen sulfide. In the place they hit out of the
              ground, at the altitude of 2200 m, there is a resort.
            </p>
            <button>
              <a href="https://triptokyrgyzstan.com/en/destinations/places/jeti-oguz-gorge">
                Book your trip
              </a>
            </button>
          </div>
          <div className="pictures">
            <section className="slider">
              <div className="bigPic">
                <img src="images/j-o.jpeg" alt="pic" className="image" />
              </div>
              <div className="picSet">
                <img id="1" className="smallImg" src="images/j-o.jpeg" />
                <img className="smallImg" src="images/j1.jpeg" />
                <img className="smallImg" src="images/j2.jpg" />
              </div>
            </section>
          </div>
        </div>
        <div className="service-type">
          <div className="desc">
            <h2>World Nomad Games</h2>
            <p>
              The World Nomad Games is an event unlike any other. Sometimes
              referred to as the ‘Olympics of the Nomads,’ the week-long
              celebration of Central Asian athletics is a stunning display of
              epic proportions.
            </p>
            <p>
              There were 23 different sports at the World Nomad Games like Horse
              races, wrestling competitions, intellectual games, archery,
              hunting and etc..
            </p>
            <button>
              <a href="http://www.worldnomadgames.com/en/">Book your trip</a>
            </button>
          </div>
          <div className="pictures">
            <section className="slider">
              <div className="bigPic">
                <img src="images/girl.jpeg" alt="pic" className="image" />
              </div>
              <div className="picSet">
                <img id="1" className="smallImg" src="images/girl.jpeg" />
                <img className="smallImg" src="images/ik1.jpeg" />
                <img className="smallImg" src="images/ik2.jpeg" />
              </div>
            </section>
          </div>
        </div>
        <div className="service-type">
          <div className="desc">
            <h2>Skii or Paraglide</h2>
            <p>
              Kyrgyzstan’s mountain-saturated landscape makes it an ideal
              location for skiing and snowboarding in the wintertime and
              paragliding. The Tien Shan Mountain Range meanders majestically
              through the country, providing both calm and challenging slopes.
              More skiers and snowboarders are coming to Kyrgyzstan for winter
              sports because of its unrestricted atmosphere and opportunities to
              enjoy different kinds of skiing/snowboarding or paragliding.
            </p>
            <button>
              <a href="https://triptokyrgyzstan.com/en/interests/skiing">
                Book your trip
              </a>
            </button>
          </div>
          <div className="pictures">
            <section className="slider">
              <div className="bigPic">
                <img src="images/snow.jpeg" alt="pic" className="image" />
              </div>
              <div className="picSet">
                <img id="1" className="smallImg" src="images/snow.jpeg" />
                <img className="smallImg" src="images/skii3.jpeg" />
                <img className="smallImg" src="images/skii2.jpeg" />
              </div>
            </section>
          </div>
        </div>
        <div className="service-type">
          <div className="desc">
            <h2>Lounge</h2>
            <p>
              Kyrgyzstan is saturated with nomadic heritage and traditions that
              weave their way into the everyday lives of Kyrgyz people. Many
              nomadic families still live in the mountains of Kyrgyzstan,
              keeping the old customs and ways of life. Some people have moved
              into cities, but still exhibit nomadic practices. Everywhere you
              go in Kyrgyzstan, nomadic ancestry still influences the lives of
              Kyrgyz people today.
            </p>
            <p>
              Book your stay in one of the portable yurta and be close to the
              nature.
            </p>
            <button>
              <a href="https://triptokyrgyzstan.com/en/interests/culture">
                Book your trip
              </a>
            </button>
          </div>
          <div className="pictures">
            <section className="slider">
              <div className="bigPic">
                <img src="images/yurta.jpeg" alt="pic" className="image" />
              </div>
              <div className="picSet">
                <img id="1" className="smallImg" src="images/yurta.jpeg" />
                <img className="smallImg" src="images/y2.jpeg" />
                <img className="smallImg" src="images/y3.jpeg" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
