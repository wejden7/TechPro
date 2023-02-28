import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import {
  createEntreeMerchandiseApi,
  findEntreeMerchandiseApi,
  deleteEntreeMerchandiseApi,
  updateEntreeMerchandiseApi,
} from "utils/apis/entreeMerchandise.api";

const StockAdapter = createEntityAdapter({
  selectId: (a) => a._id,
});

const initialState = StockAdapter.getInitialState({
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
});
export const createEntreeMerchandise = createAsyncThunk(
  "entreeStock/createEntreeMerchandise",
  (data, thunkAPI) => createEntreeMerchandiseApi(data)
);
export const findEntreeMerchandise = createAsyncThunk(
  "entreeStock/findEntreeMerchandise",
  (_, thunkAPI) => findEntreeMerchandiseApi()
);
export const deleteEntreeMerchandise = createAsyncThunk(
  "entreeStock/deleteEntreeMerchandise",
  (data, thunkAPI) => deleteEntreeMerchandiseApi(data)
);
export const updateEntreeMerchandise = createAsyncThunk(
  "entreeStock/updateEntreeMerchandise",
  (data, thunkAPI) => updateEntreeMerchandiseApi(data)
);
const EntreeStockSlice = createSlice({
  name: "entreeStock",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(createEntreeMerchandise.fulfilled, (state, action) => {
        console.log("stock successful created");
        console.log(action.payload);
        StockAdapter.upsertOne(state, action.payload.data);
      })
      .addCase(findEntreeMerchandise.fulfilled, (state, action) => {
        console.log("stock successful created");
        console.log(action.payload);
        state.status = "succeeded";
        StockAdapter.upsertMany(state, action.payload.data);
      })
      .addCase(deleteEntreeMerchandise.fulfilled, (state, action) => {
        console.log("stock successful delete");
        console.log(action.payload);
        StockAdapter.upsertOne(state, action.payload.data);
      })
      .addCase(updateEntreeMerchandise.fulfilled, (state, action) => {
        console.log("stock successful update");
        console.log(action.payload);
        StockAdapter.upsertOne(state, action.payload.data);
      });
  },
});

export const {
  selectAll: selectAllEntreeStock,
  selectById: selectEntreeStockById,
  selectIds: selectEntreeStockIds,
  selectEntities: selectEntitiesEntreeStock,
  selectTotal: selectTotalEntreeStock,
} = StockAdapter.getSelectors((state) => state.entreeStock);

export const selectAllEntreeStockByMerchandise = (state, id) => {
  const data = selectAllEntreeStock(state);

  const result = data.filter((item) => item.merchandise === id);

  return result;
};
export const getEntreeStockStatus = (state) => state.entreeStock.status;
export const getEntreeStockError = (state) => state.entreeStock.error;
export default EntreeStockSlice.reducer;
