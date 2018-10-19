import React from "react";
import {connect} from "react-redux";

import {SingleTable} from "../molecules";

import "./TimeTable.css"

const TimeTable = ({times}) => {
  return <div className="time-table">
    <SingleTable times={times}/>
  </div>
};

// 状態を引っ張ってこれる。connectでつながる。
const mapStateToProps = state => {
  return {times: state.timeTable};
};

export default connect(mapStateToProps)(TimeTable)
