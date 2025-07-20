import { createSlice } from "@reduxjs/toolkit";
import { getGalleries } from "../../services/api/gallery-service";

const myListSlice = createSlice({
    name: 'mylist',
    initialState: { list: null },
    reducers: {
        all: (state) => {
            state.list = async () => {
                try {
                    const response = await getGalleries('series');
                    return response.data;
                } catch (e) {
                    console.error('Error fetching galleries: ', e);
                    return null;
                }
            };
        },
        filtered: (state, action) => {
            state.list = action.payload;
        },
    }
});

export const { all, filtered } = myListSlice.actions;
export default myListSlice.reducer;