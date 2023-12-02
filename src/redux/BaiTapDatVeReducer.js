import { DAT_GHE, HUY_GHE } from "./BaiTapDatVeType";

const stateDefault = {
  danhSachGheDangDat: [],
};

const BaiTapDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {
        //khi người dùng click ghế đang đặt đã có trong mảng thì sẽ remove đi
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        //khi người dùng click ghế đang đặt chưa có trong mảng thì push vào mảng
        danhSachGheDangDatUpdate.push(action.ghe);
      }
      //cập nhật lại state => giao diện render lại

      return { ...state, danhSachGheDangDat: danhSachGheDangDatUpdate };
    }

    case HUY_GHE: {
      let danhSachGheDangDatUpdate = state.danhSachGheDangDat.filter(
        (gheDangDat) => gheDangDat.soGhe !== action.soGhe
      );
      return { ...state, danhSachGheDangDat: danhSachGheDangDatUpdate };
    }
    default:
      return { ...state };
  }
};

export default BaiTapDatVeReducer;
