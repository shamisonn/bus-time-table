import moment from "moment";
import * as times from "./Times"


function getTimeTables(from, to, isSat, isVacation) {
  const mode = isSat ? "sat" : isVacation ? "vacation" : "normal";
  if (from === "univ") {
    return times.fromUniv[mode][to];
  } else {
    return times.toUniv[mode][from];
  }
}

function filterTimes(table, time, how) {
  const i = parseInt(time, 10);
  if (how === "departure") { // 出発
    return table.filter(t => i < t);
  } else if (how === "arrival"){ // 到着
    return table.filter(t => i > t).reverse();
  }
  return [];
}

const SuggestTimes = (inputs) => {

  const date = moment(inputs.date);
  const time = date.format("HHmm");
  const dayOfWeek = date.format("dddd");

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
};

export default SuggestTimes
