import React from "react";

const PokemonList = ({ filteredPokemons, handleEdit, handleDelete }) => {
    return (
        <div className="pokemon-table">
            <div className="pokemon-table__header">
                    <div>Nombre</div>
                    <div>Imagen</div>
                    <div>Ataque</div>
                    <div>Defensa</div>
                    <div>Acciones</div>
                
            </div>
            <div className="pokemon-table__items">
                {filteredPokemons.length > 0 ? (
                    filteredPokemons.map((pokemon) => (
                        <div className="item" key={pokemon.id}>
                            <div>{pokemon.name}</div>
                            <div className="image"><img src={pokemon.image} alt={pokemon.name} /></div>                            
                            <div><span>ATK:</span>{pokemon.attack}</div>
                            <div><span>DEF:</span>{pokemon.defense}</div>
                            <div className="actions">
                                <button className="pokemon-btn--icon pokemon-icon pokemon-icon--edit" onClick={() => handleEdit(pokemon)}></button>
                                <button className="pokemon-btn--icon pokemon-icon pokemon-icon--trash" onClick={() => handleDelete(pokemon.id)}></button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No se encontraron pokemones.</div>
                )}
            </div>
        </div>
    );
};

export default PokemonList;