import * as times from "../Times";
import moment from "moment";

import * as types from "./ActionTypes";

export const setFrom = place => ({
  type: types.SET_FROM,
  place
});

export const setTo = place => ({
  type: types.SET_TO,
  place
});

export const setHow = how => ({
  type: types.SET_HOW,
  how
});

export const setDate = date => ({
  type: types.SET_DATE,
  date
});

export const setIsVac = isVac => ({
  type: types.SET_DATE,
  isVac
});

// buttonが押されたときに行う
export const updateTimeTable = inputs => ({
  type: types.UPDATE_TIME_TABLE,
  times: inputs2times(inputs)
});

const inputs2times = (inputs) => {
  const date = moment(inputs.date);
  const time = date.format("HHmm");
  const dayOfWeek = date.format("dddd");

  // 休業中の処理
  if (inputs.isVac === "true") {
    if(dayOfWeek === "Sunday" || dayOfWeek === "Saturday") {
      return ["土日曜は川越観光使うしかないです。"]
    } else {
      return filterTimes(
        getTimeTables(inputs.from, inputs.to, false, true),
        time,
        inputs.how
      )
    }
  }
  // 曜日を判定する
  if(dayOfWeek === "Sunday") {
    return ["日曜は川越観光使うしかないです。"]
  } else if (dayOfWeek === "Saturday"){
    // 土曜の日程
    return filterTimes(
      getTimeTables(inputs.from, inputs.to, true, false),
      time,
      inputs.how
    )
  }
  // 通常運行日程
  return filterTimes(
    getTimeTables(inputs.from, inputs.to, false, false),
    time,
    inputs.how
  );

  // 時刻表JSONから指定の時刻表を取ってくる
  function getTimeTables(from, to, isSat, isVacation) {
    const mode = isSat ? "sat" : isVacation ? "vacation" : "normal";
    if (from === "univ") {
      return times.fromUniv[mode][to];
    } else {
      return times.toUniv[mode][from];
    }
  }

  // 出発と到着に合わせてデータ量を変更
  function filterTimes(table, time, how) {
    const i = parseInt(time, 10);
    if (how === "departure") { // 出発
      return table.filter(t => i < t);
    } else if (how === "arrival"){ // 到着
      return table.filter(t => i > t).reverse();
    }
    return [];
  }
};


