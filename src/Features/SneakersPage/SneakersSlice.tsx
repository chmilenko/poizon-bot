import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { State } from "./types/StateSneakers";
import Sneakers, { SneakersId } from "./types/SneakersType";
import * as api from "./api";

const initialState: State = {
  sneakers: [],
  error: undefined,
};

export const loadSneakersListApi = createAsyncThunk(
  "sneakers/loadSneakers",
  async () => {
    return api.initSneakersList();
  }
);

export const addNewSneakersApi = createAsyncThunk(
  "sneakers/addNewSneakers",
  async (newSneakers: Sneakers) => api.addNewSneakers(newSneakers)
);

export const deleteSneakersApi = createAsyncThunk(
  "sneakers/deleteSneakers",
  async (id: SneakersId) => api.deleteSneakers(id)
);

const sneakersSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadSneakersListApi.fulfilled, (state, action) => {
        state.sneakers = action.payload;
      })
      .addCase(loadSneakersListApi.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addNewSneakersApi.fulfilled, (state, action) => {
        state.sneakers.push(action.payload);
      })
      .addCase(addNewSneakersApi.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteSneakersApi.fulfilled, (state, action) => {
        state.sneakers = state.sneakers.filter(
          (product) => product.id !== Number(action.payload)
        );
      })
      .addCase(deleteSneakersApi.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default sneakersSlice.reducer;
