import React, { useState } from "react";
import { addPokemon } from "../redux/reducers/PokemonReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonImage from "../assets/add-pokemon.png";
import { ToastContainer, toast } from "react-toastify";

const AddPokemon = () => {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    description: "",
  });
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPokemon = {
      id: pokemons[pokemons.length - 1].id + 1,
      name: formData.name,
      breed: formData.breed,
      description: formData.description,
    };

    dispatch(addPokemon(newPokemon));
    toast.success("Pokemon added successfully", {
      autoClose: 1000,
    });
    setTimeout(() => {
      navigate("/list");
    }, 2000);
  };

  return (
    <>
      <ToastContainer />

      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src={PokemonImage}
                alt="pokemon-image"
                className="add-pokemon-image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-row align-items-center justify-content-center">
                  <p className="fw-normal mb-0 me-3 add-new-heading">
                    ADD NEW POKEMON
                  </p>
                </div>
                <div className="divider d-flex align-items-center my-4"></div>
                <div className="form-outline mb-4">
                  <label className="form-label" for="name">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control form-control-lg"
                    placeholder="Enter name"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" for="breed">
                    Breed:
                  </label>
                  <input
                    type="text"
                    name="breed"
                    id="breed"
                    className="form-control form-control-lg"
                    placeholder="Enter breed"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-outline mb-3">
                  <label className="form-label" for="description">
                    Description:
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    className="form-control form-control-lg"
                    placeholder="Enter description"
                    onChange={handleChange}
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg justify-content-center"
                    style={{ paddingLeft: "2.5rem", paddingRight: "3.5rem" }}
                  >
                    Add Pokemon
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddPokemon;
