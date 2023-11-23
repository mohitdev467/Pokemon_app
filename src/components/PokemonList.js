import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removePokemon } from "../redux/reducers/PokemonReducer";
import Logo from "../assets/main-logo.png";
import PokedexIcon from '../assets/pokedex-icon.png'

const PokemonList = () => {
  const [loading, setLoading] = useState(true);
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removePokemon({ id: id }));
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.split(" ").slice(0, maxLength).join(" ") + "...";
    }
    return text;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="banner-seond">
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom p-3">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="logo-image" className="logo-image-2" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto nav-div">
                <li className="nav-item nav-link-addd">
                  <Link to="/add" className="nav-link">
                    Add New Pokemon
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="container h-100 ">
        <div className="row justify-content-center ">
          <div className="col-lg-7 col-md-10">
            <div className="section_title text-center mt-5 mb-5">
              <h3>Pokemons list</h3>
            </div>
          </div>
        </div>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Breed</th>
              <th>Description</th>
              <th className="text-center">Edit</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <div className="row">
                <div className="loading loading1 col-lg-12">
                  <span>L</span>
                  <span>o</span>
                  <span>a</span>
                  <span>d</span>
                  <span>i</span>
                  <span>n</span>
                  <span>g</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </div>
            ) : (
              pokemons.map((pokemon, index) => {
                return (
                  <tr key={index} className="tr-pokemon">
                    <td>
                      <img src={PokedexIcon} alt="pokdex-icon" className="pokedex-icon" />
                    </td>
                    <td>{pokemon.name}</td>
                    <td>{pokemon.breed}</td>
                    <td><textarea rows="1" cols="35" style={{ resize: "none", border: "none" }}>{pokemon.description}</textarea></td>
                    <td>
                      <Link
                        to={`/edit/${pokemon.id}`}
                        className="btn btn-sm btn-info edit-btn"
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(pokemon.id)}
                        className="btn btn-sm btn-danger ms-5 delete-btn"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PokemonList;
