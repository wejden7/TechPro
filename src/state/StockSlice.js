import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import {
  findMerchandiseApi,
  createMerchandiseApi,
  updateMerchandiseApi,
  deleteMerchandiseApi,
} from "utils/apis/stock.api";
import { findEntreeMerchandise } from "./entreeStockSlice";
import { findDestroyMerchandise } from "./DestroyStockSlice";

const StockAdapter = createEntityAdapter({
  selectId: (a) => a._id,
});

const initialState = StockAdapter.getInitialState({
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
});

export const fetchMerchandise = createAsyncThunk(
  "stock/fetchMerchandise",
  async (_, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const respance = await findMerchandiseApi();
    await dispatch(findEntreeMerchandise());
    await dispatch(findDestroyMerchandise());
    return respance;
  }
);
export const creatMerchandise = createAsyncThunk(
  "stock/creatMerchandise",
  (data, thunkAPI) => createMerchandiseApi(data)
);
export const updateMerchandise = createAsyncThunk(
  "stock/updateMerchandise",
  (data, thunkAPI) => updateMerchandiseApi(data)
);
export const deleteMerchandise = createAsyncThunk(
  "stock/deleteMerchandise",
  (id, thunkAPI) => deleteMerchandiseApi(id)
);
const StockSlice = createSlice({
  name: "stock",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchMerchandise.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchMerchandise.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchMerchandise.fulfilled, (state, action) => {
        console.log("stock successful");
        console.log(action.payload);
        state.status = "succeeded";
        StockAdapter.upsertMany(state, action.payload.data);
      })
      .addCase(creatMerchandise.fulfilled, (state, action) => {
        console.log("stock created");
        console.log(action.payload);
        StockAdapter.addOne(state, action.payload.data);
      })
      .addCase(updateMerchandise.fulfilled, (state, action) => {
        console.log("stock update");
        console.log(action.payload);
        StockAdapter.upsertOne(state, action.payload.data);
      })
      .addCase(deleteMerchandise.fulfilled, (state, action) => {
        console.log("stock delete");
        console.log(action.payload);
        StockAdapter.removeOne(state, action.payload);
      });
  },
});

export const {
  selectAll: selectAllStock,
  selectById: selectStockById,
  selectIds: selectStockIds,
  selectEntities: selectEntitiesStock,
  selectTotal: selectTotalStock,
} = StockAdapter.getSelectors((state) => state.stock);

export const getStockStatus = (state) => state.stock.status;
export const getStockError = (state) => state.stock.error;
export default StockSlice.reducer;
