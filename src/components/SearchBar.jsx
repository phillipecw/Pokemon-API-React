import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery, handleNew}) => {
    return (
        <div className="pokemon-searchbar">
            <div>
                <input
                    type="text"
                    value={searchQuery}
                    className="pokemon-input pokemon-icon pokemon-icon--search"
                    placeholder="Buscar"
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div>
                <button
                    className="pokemon-btn pokemon-icon pokemon-icon--plus"
                    onClick={handleNew}
                >Nuevo</button>
            </div>
        </div>
    )
};

export default SearchBar;