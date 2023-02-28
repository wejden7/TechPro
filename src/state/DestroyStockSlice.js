import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

import {
  createDestroyMerchandiseApi,
  findDestroyMerchandiseApi,
  deleteDestroyMerchandiseApi,
  updateDestroyMerchandiseApi,
} from "utils/apis/destroyMerchandise.api";

const StockAdapter = createEntityAdapter({
  selectId: (a) => a._id,
});

const initialState = StockAdapter.getInitialState({
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
});
export const createDestroyMerchandise = createAsyncThunk(
  "destroyStock/createDestroyMerchandise",
  (data, thunkAPI) => createDestroyMerchandiseApi(data)
);
export const findDestroyMerchandise = createAsyncThunk(
  "destroyStock/findDestroyMerchandise",
  (_, thunkAPI) => findDestroyMerchandiseApi()
);
export const deleteDestroyMerchandise = createAsyncThunk(
  "destroyStock/deleteDestroyMerchandise",
  (data, thunkAPI) => deleteDestroyMerchandiseApi(data)
);
export const updateDestroyMerchandise = createAsyncThunk(
  "destroyStock/updateDestroyMerchandise",
  (data, thunkAPI) => updateDestroyMerchandiseApi(data)
);
const DestroyStockSlice = createSlice({
  name: "destroyStock",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(createDestroyMerchandise.fulfilled, (state, action) => {
        console.log("stock successful destroy created");
        console.log(action.payload);
        StockAdapter.upsertOne(state, action.payload.data);
      })
      .addCase(findDestroyMerchandise.fulfilled, (state, action) => {
        console.log("stock successful destroy find all");
        console.log(action.payload);
        StockAdapter.upsertMany(state, action.payload.data);
      })
      .addCase(deleteDestroyMerchandise.fulfilled, (state, action) => {
        console.log("stock successful destroy deleted ");
        console.log(action.payload);
        StockAdapter.upsertOne(state, action.payload.data);
      })
      .addCase(updateDestroyMerchandise.fulfilled, (state, action) => {
        console.log("stock successful destroy upadte ");
        console.log(action.payload);
        StockAdapter.upsertOne(state, action.payload.data);
      });
  },
});

export const {
  selectAll: selectAllDestroyStock,
  selectById: selectDestroyStockById,
  selectIds: selectDestroyStockIds,
  selectEntities: selectEntitiesDestroyStock,
  selectTotal: selectTotalDestroyStock,
} = StockAdapter.getSelectors((state) => state.destroyStock);

export const selectAllDestroyStockByMerchandise = (state, id) => {
  const data = selectAllDestroyStock(state);
  const result = data.filter((item) => item.merchandise === id);
  return result;
};
export const getDestroytockStatus = (state) => state.destroyStock.status;
export const getDestroyStockError = (state) => state.destroyStock.error;
export default DestroyStockSlice.reducer;
