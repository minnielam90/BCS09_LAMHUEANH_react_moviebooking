// redux/configStore.js
import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./reducer";
import BaiTapDatVeReducer from "./BaiTapDatVeReducer";

const store = configureStore({
  reducer: {
    BaiTapDatVeReducer,
  },
});

export default store;
