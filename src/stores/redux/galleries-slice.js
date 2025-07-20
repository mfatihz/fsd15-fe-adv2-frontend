import { createSlice } from "@reduxjs/toolkit";
import { getGalleries } from "../../services/api/gallery-service";

// const galleriesSlice = createSlice({
//     name: 'galleries',
//     initialState: { list: null },
//     reducers: {
//         all: (state) => {
//             state.list = getGalleries('series');
//         },
//         filtered: (state, action) => {
//             state.list = action.payload;
//         },
//     }
// });

// export const { all, filtered } = galleriesSlice.actions;
// export default galleriesSlice.reducer;

// Thunk: fetch galleries and dispatch plain data
export const fetchGalleries = () => async (dispatch) => {
  try {
    const response = await getGalleries("series");
    dispatch(setGalleries(response.data)); // Dispatch serializable data only
  } catch (err) {
    console.error("Error fetching galleries:", err);
  }
};

const galleriesSlice = createSlice({
  name: "galleries",
  initialState: { list: [] },
  reducers: {
    setGalleries: (state, action) => {
      state.list = action.payload;
    },
    filtered: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setGalleries, filtered } = galleriesSlice.actions;
export default galleriesSlice.reducer;