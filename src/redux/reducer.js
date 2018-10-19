import moment from "moment";

import * as types from "./ActionTypes";
import {combineReducers} from "redux";

/* actionとstateを受け取って、stateを更新する処理をする */
const initialFormState = {
  from: "kitasaka",
  to: "univ",
  how: "departure",
  date: moment().format("YYYY-MM-DDTHH:mm"),
  isVac: false
};
function forms(state = initialFormState, action) {
  switch(action.type) {
    case types.SET_FROM:
      // fromをunivに変更したい場合
      if (action.place === "univ") {
        // fromがunivでない場合
        if (state.from !== "univ") {
          const place = state.from;
          return {
            ...state,
            from: "univ",
            to: place
          };
        }
        // else {
        // stateの変更は必要ない。
        //}
        return state;
      } else {
        // fromをuniv以外に変更したい場合
        return {
          ...state,
          from: action.place,
          to: "univ"
        };
      }
    case types.SET_TO:
      if (action.place === "univ") {
        if (state.to !== "univ") {
          const place = state.to;
          return {
            ...state,
            from: place,
            to: "univ"
          };
        }
        return state;
      } else {
        return {
          ...state,
          from: "univ",
          to: action.place
        };
      }

    case types.SET_HOW:
      return {
        ...state,
        how: action.how
      };
    case types.SET_DATE:
      return {
        ...state,
        date: moment(action.date).format("YYYY-MM-DDTHH:mm")
      };
    case types.SET_IS_VAC:
      return {
        ...state,
        isVac: action.isVac.toString()
      };
    default:
      return state;
  }
}

function timeTable(state = [], action) {
  switch(action.type) {
    case types.UPDATE_TIME_TABLE:
      return action.times;
    default:
      return state;
  }
}

export default combineReducers({
  forms,
  timeTable
})
