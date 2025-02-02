import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    vehicleType: "",
    equipmentFilters: {},
    filteredCampers: [],
  },
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setFilteredCampers: (state, action) => {
      state.filteredCampers = action.payload;
    },
  },
});

export const { setLocation, setFilteredCampers } = filtersSlice.actions;
export default filtersSlice.reducer;
