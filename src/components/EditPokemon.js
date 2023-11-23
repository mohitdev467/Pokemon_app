import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatePokemon } from "../redux/reducers/PokemonReducer";
import PokemonImage from "../assets/pik-ash.png";

import { ToastContainer, toast } from "react-toastify";

const EditPokemon = () => {
  const { id } = useParams();
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const existingPokemon = pokemons.filter((p) => p.id == id);
  const { name, breed, description } = existingPokemon[0];

  const [pName, setPname] = useState(name);
  const [pBreed, setPBreed] = useState(breed);
  const [pDescription, setPDescription] = useState(description);

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updatePokemon({
        id: id,
        name: pName,
        breed: pBreed,
        description: pDescription,
      })
    );
    toast.success("Pokemon update successfully", {
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
                alt="Sample image"
                className="add-pokemon-image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleUpdate}>
                <div className="d-flex flex-row align-items-center justify-content-center">
                  <p className="fw-normal mb-0 me-3 add-new-heading">
                    EDIT YOUR POKEMON
                  </p>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

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
                    defaultValue={pName}
                    onChange={(e) => setPname(e.target.value)}
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
                    defaultValue={pBreed}
                    onChange={(e) => setPBreed(e.target.value)}
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
                    defaultValue={pDescription}
                    onChange={(e) => setPDescription(e.target.value)}
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-warning btn-lg justify-content-center"
                    style={{ paddingLeft: "2.5rem", paddingRight: "3.5rem" }}
                  >
                    Update Pokemon
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

export default EditPokemon;
