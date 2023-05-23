import axios from 'axios';

const BASE_URL = "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/pkm-msa-evaluation/pokemon";

export const getPokemons = async (idAuthor) => {
    try {
        const response = await axios.get(`${BASE_URL}/?idAuthor=${idAuthor}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data || 'Error while getting Pokemons data');
    }
};

export const createPokemon = async (newPokemon) => {
    try {
        const response = await axios.post(BASE_URL, newPokemon);
        return response.data;
    } catch (error) {
        throw new Error('Could not create Pokemon');
    }
};

export const updatePokemon = async (id, updatedPokemon) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, updatedPokemon);
        return response.data;
    } catch (error) {
        throw new Error('Could not update Pokemon');
    }
};

export const deletePokemon = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Could not delete Pokemon');
    }
};