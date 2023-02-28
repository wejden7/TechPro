import { configureStore } from "@reduxjs/toolkit";
import auth from "state/AuthSlice";
import setting from "state/SettingSlice";
import team from "state/TeamSlice";
import autorization from "state/AutorizationSlice";
import parametre from "state/ParametreSlice";
import stock from "state/StockSlice";
import entreeStock from "state/entreeStockSlice";
import destroyStock from "state/DestroyStockSlice.js";
export const store = configureStore({
  reducer: {
    auth,
    setting,
    team,
    autorization,
    parametre,
    stock,
    entreeStock,
    destroyStock,
  },
});
