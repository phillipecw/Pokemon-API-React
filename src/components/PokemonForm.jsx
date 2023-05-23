import React from "react";

const PokemonForm = ({
    handleSubmit,
    handleInputChange,
    handleCancel,
    newPokemon,
    editingPokemon,
    formIsdisabled,
}) => {
    return (
        <form onSubmit={handleSubmit} className="pokemon-form">
            <h2>{editingPokemon ? 'Editar Pokemon' : 'Nuevo Pokemon'}</h2>
            <div className="pokemon-form__row">
                <div>
                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="pokemon-input"
                            required={true}
                            value={editingPokemon ? editingPokemon.name : newPokemon.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="image">Imagen:</label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            className="pokemon-input"
                            required={true}
                            value={editingPokemon ? editingPokemon.image : newPokemon.image}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="attack">Ataque:</label>
                        <input
                            type="range"
                            id="attack"
                            name="attack"
                            min={0}
                            max={100}
                            step={1}
                            required={true}
                            value={editingPokemon ? editingPokemon.attack : newPokemon.attack}
                            onChange={handleInputChange}
                        />
                        <span>{editingPokemon ? editingPokemon.attack : newPokemon.attack}</span>
                    </div>
                    <div>
                        <label htmlFor="defense">Defensa:</label>
                        <input
                            type="range"
                            id="defense"
                            name="defense"
                            min={0}
                            max={100}
                            step={1}
                            required={true}
                            value={editingPokemon ? editingPokemon.defense : newPokemon.defense}
                            onChange={handleInputChange}
                        />
                        <span>{editingPokemon ? editingPokemon.defense : newPokemon.defense}</span>
                    </div>
                </div>
            </div>
            <div>
                <button
                    className="pokemon-btn pokemon-icon pokemon-icon--save"
                    type="submit"
                    disabled={formIsdisabled}
                >
                    Guardar
                </button>
                <button
                    className="pokemon-btn pokemon-icon pokemon-icon--cancel"
                    type="button"
                    onClick={handleCancel}
                >
                    Cancelar
                </button>
            </div>
        </form>
    );
};

export default PokemonForm;