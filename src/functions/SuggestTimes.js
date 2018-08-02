import moment from "moment";
import * as times from "./Times"


function getTimeTables(from, to, isSat, isVacation) {
  if (from === "univ") {
    switch (to) {
      case "takasaka":
        return isSat ? times.fromUniv.sat.takasaka :
          isVacation ? times.fromUniv.vacation.takasaka :
            times.fromUniv.normal.takasaka;
      case "kitasaka":
        return isSat ? times.fromUniv.sat.kitasaka :
          isVacation ? times.fromUniv.vacation.kitasaka :
            times.fromUniv.normal.kitasaka;
      case "kumagaya":
        return isSat ? times.fromUniv.sat.kumagaya :
          isVacation ? times.fromUniv.vacation.kumagaya :
            times.fromUniv.normal.kumagaya;
      case "kounosu":
        return isSat ? times.fromUniv.sat.kounosu :
          isVacation ? times.fromUniv.vacation.kounosu :
            times.fromUniv.normal.kounosu;
      default:
        return []
    }
  } else {
    switch (from) {
      case "takasaka":
        return isSat ? times.toUniv.sat.takasaka :
          isVacation ? times.toUniv.vacation.takasaka :
            times.toUniv.normal.takasaka;
      case "kitasaka":
        return isSat ? times.toUniv.sat.kitasaka :
          isVacation ? times.toUniv.vacation.kitasaka :
            times.toUniv.normal.kitasaka;
      case "kumagaya":
        return isSat ? times.toUniv.sat.kumagaya :
          isVacation ? times.toUniv.vacation.kumagaya :
            times.toUniv.normal.kumagaya;
      case "kounosu":
        return isSat ? times.toUniv.sat.kounosu :
          isVacation ? times.toUniv.vacation.kounosu :
            times.toUniv.normal.kounosu;
      default:
        return []
    }
  }
}

function getTimes(table, time, how) {
  const i = parseInt(time, 10);
  if (how === "departure") { // 出発
    return table.filter(t => i < t);
  } else if (how === "arrival"){ // 到着
    return table.filter(t => i > t).reverse();
  }
  return [];
}

const suggestTimes = (inputs) => {

  const date = moment(inputs.date);
  const time = date.format("HHmm");
  const dayOfWeek = date.format("dddd");

  console.log(inputs.isVac);
  if (inputs.isVac === "true") {
    if(dayOfWeek === "Sunday" || dayOfWeek === "Saturday") {
      return ["土日曜は川越観光使うしかないです。"]
    } else {
      return getTimes(
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
    return getTimes(
      getTimeTables(inputs.from, inputs.to, true, false),
      time,
      inputs.how
    )
  }
  // 通常運行日程
  return getTimes(
    getTimeTables(inputs.from, inputs.to, false, false),
    time,
    inputs.how
  );
};

export default suggestTimes
