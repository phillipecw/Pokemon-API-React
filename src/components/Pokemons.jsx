import React, {useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import PokemonForm from "./PokemonForm";
import PokemonList from "./PokemonList";
import { getPokemons, createPokemon, updatePokemon, deletePokemon } from "../api";

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const idAuthor = 1;
    const [newPokemon, setNewPokemon] = useState({
        name: '',
        image: '',
        attack: 0,
        defense: 0,
        hp: 0,
        type: '',
        idAuthor: idAuthor,
    });
    const [editingPokemon, setEditingPokemon] = useState(null);
    const [newPokemonVisible, setNewPokemonVisible] = useState(false);
    const [formIsdisabled, setformIsdisabled] = useState(true);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const data = await getPokemons(idAuthor);
                setPokemons(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPokemons();
        setNewPokemonVisible(false);
    }, [idAuthor]);

    useEffect(() => {
        setFilteredPokemons(
            pokemons.filter((pokemon) => 
                pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
        setNewPokemonVisible(false);
    }, [searchQuery, pokemons]);

    const handleInputChange = (e) => {
        if (editingPokemon) {
            setEditingPokemon({
                ...editingPokemon,
                [e.target.name]: e.target.value,
            });
        } else {
            setNewPokemon({
                ...newPokemon,
                [e.target.name]: e.target.value,
            });
        }
        e.target.value ? setformIsdisabled(false) : setformIsdisabled(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editingPokemon) {
            try {
                const updatedPokemon = await updatePokemon(editingPokemon.id, editingPokemon);
                setPokemons((prevPokemons) =>
                    prevPokemons.map((pokemon) =>
                        pokemon.id === updatedPokemon.id ? updatedPokemon: pokemon
                    )
                );
                setEditingPokemon(null);
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                const createdPokemon = await createPokemon(newPokemon);
                setPokemons([...pokemons, createdPokemon]);
                setNewPokemon({
                    name: '',
                    image: '',
                    attack: 0,
                    defense: 0,
                    hp: 0,
                    type: '',
                    idAuthor: idAuthor,
                });
            } catch (error) {
                console.error(error);
            }
        }
        setNewPokemonVisible(false);
        setformIsdisabled(true);
    };

    const handleNewPokemon = () => {
        setEditingPokemon(null);
        setNewPokemonVisible(true);
    }

    const handleEdit = (pokemon) => {
        setEditingPokemon(pokemon);
        setNewPokemonVisible(true);
        setformIsdisabled(true);
        setNewPokemon({
            name: '',
            image: '',
            attack: 0,
            defense: 0,
            hp: 0,
            type: '',
            idAuthor: 1,
        })
    };

    const handleDelete = async (id) => {
        try {
            await deletePokemon(id);
            const updatedPokemons = pokemons.filter((pokemon) => pokemon.id !== id);
            setPokemons(updatedPokemons);
            setEditingPokemon(null);
        } catch (error) {
            console.error(error);
        }
    };

    const handleCancel = () => {
        setEditingPokemon(null);
        setNewPokemonVisible(false);
        setformIsdisabled(true);
        setNewPokemon({
            name: '',
            image: '',
            attack: 0,
            defense: 0,
            hp: 0,
            type: '',
            idAuthor: 1,
        });
    };
    
    return (
        <div className="pokemon-app">
            <h1>Listado de Pokemons</h1>
            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleNew={handleNewPokemon}
            />
            <PokemonList
                filteredPokemons={filteredPokemons}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />

            {editingPokemon || newPokemonVisible ? (
                <PokemonForm
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
                    handleCancel={handleCancel}
                    newPokemon={newPokemon}
                    editingPokemon={editingPokemon}
                    formIsdisabled={formIsdisabled}
                />
            ) : null}
        </div>
    );
};

export default Pokemons;