import React from "react";
import Bulb from "../assets/bulb.png";
import Pikachu from "../assets/pikachu.png";
import Chari from "../assets/chari.png";

const FavouritePokemon = () => {
  return (
    <>
      <div className="service_area">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-7 col-md-10">
              <div className="section_title text-center mb-95">
                <h3>Popular Pokemons</h3>
                <p>Most powerful and popular pokemons</p>
              </div>
            </div>
          </div>{" "}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single_service">
                <div className="service_thumb service_icon_bg_1 d-flex align-items-center justify-content-center">
                  <div className="service_icon">
                    <img src={Chari} alt="chari-image" />
                  </div>
                </div>
                <div className="service_content text-center">
                  <h3>Charizard</h3>
                  <p>
                    A fearsome Fire/Flying-type Pokémon that resembles a
                    majestic dragon. Charizard is the final evolution of
                    Charmander and is known for its powerful fire-based moves
                    and imposing presence.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_service active">
                <div className="service_thumb service_icon_bg_1 d-flex align-items-center justify-content-center">
                  <div className="service_icon">
                    <img src={Pikachu} alt="pikachu-image" />
                  </div>
                </div>
                <div className="service_content text-center">
                  <h3>Pikachu</h3>
                  <p>
                    An iconic yellow Electric-type Pokémon with pointy ears and
                    red cheeks. Pikachu is the mascot of the Pokémon franchise
                    and is known for its cute appearance and powerful
                    Thunderbolt attacks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_service">
                <div className="service_thumb service_icon_bg_1 d-flex align-items-center justify-content-center">
                  <div className="service_icon">
                    <img src={Bulb} alt="bulbasaur-image" />
                  </div>
                </div>
                <div className="service_content text-center">
                  <h3>Bulbasaur</h3>
                  <p>
                    A Grass/Poison-type Pokémon that resembles a small, blue
                    dinosaur with a plant bulb on its back. Bulbasaur evolves
                    into Ivysaur and later into Venusaur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavouritePokemon;
