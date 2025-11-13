const API_BASE_URL = 'https://rickandmortyapi.com/api';

export const rickAndMortyService = {
  searchCharacters: async (name) => {
    const response = await fetch(`${API_BASE_URL}/character/?name=${name}`);
    if (!response.ok) {
      if (response.status === 404) {
        return { results: [] };
      }
      throw new Error('Network response was not ok');
    }
    return response.json();
  },

  getCharacterById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/character/${id}`);
    if (!response.ok) {
      throw new Error('Character not found');
    }
    return response.json();
  },
};