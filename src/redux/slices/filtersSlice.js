import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    vehicleType: "",
    equipmentFilters: {
      AC: false,
      automatic: false,
      kitchen: false,
      TV: false,
      bathroom: false,
      radio: false,
      refrigerator: false,
      microwave: false,
      gas: false,
      water: false,
    },
    filteredCampers: [],
  },
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setVehicleType(state, action) {
      state.vehicleType = action.payload;
    },
    setFilteredCampers: (state, action) => {
      state.filteredCampers = action.payload;
    },
    setFilter: (state, action) => {
      const { name, value } = action.payload;
      state.equipmentFilters[name] = value;
    },
    resetFilters: (state) => {
      state.equipmentFilters = {
        AC: false,
        automatic: false,
        kitchen: false,
        TV: false,
        bathroom: false,
        radio: false,
        refrigerator: false,
        microwave: false,
        gas: false,
        water: false,
      };
      state.location = "";
      state.vehicleType = "";
    },
  },
});

export const {
  setLocation,
  setVehicleType,
  setFilteredCampers,
  setFilter,
  resetFilters,
} = filtersSlice.actions;
export default filtersSlice.reducer;
