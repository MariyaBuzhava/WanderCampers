import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  vehicleType: "",
  filters: {
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    bathroom: false,
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setVehicleType(state, action) {
      state.vehicleType = action.payload;
    },
    setFilter(state, action) {
      const { name, value } = action.payload;
      state.filters[name] = value;
    },
    resetFilters(state) {
      state.location = "";
      state.vehicleType = "";
      state.filters = initialState.filters;
    },
  },
});

export const { setLocation, setVehicleType, setFilter, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
