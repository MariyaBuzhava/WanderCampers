import { createSlice } from "@reduxjs/toolkit";

const loadFavorites = () => {
  const savedFavorites = localStorage.getItem("favorites");
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};

const saveFavorites = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: loadFavorites(),
  reducers: {
    addToFavorites(state, action) {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
        saveFavorites(state);
      }
    },
    removeFromFavorites(state, action) {
      const updatedFavorites = state.filter((id) => id !== action.payload);
      saveFavorites(updatedFavorites);
      return updatedFavorites;
    },
    clearFavorites() {
      saveFavorites([]);
      return [];
    },
  },
});

export const { addToFavorites, removeFromFavorites, clearFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
