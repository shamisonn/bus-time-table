import React from "react";
import {connect} from "react-redux";

import {SingleTable} from "../molecules";

const TimeTable = ({times}) => {
  return <div className="TimeTable">
    <h1>TimeTable</h1>
    <p>移動時間はだいたい10分くらい。以下, 出発時間</p>
    <SingleTable times={times}/>
  </div>
};

// 状態を引っ張ってこれる。connectでつながる。
const mapStateToProps = state => {
  return {times: state.timeTable};
};

export default connect(mapStateToProps)(TimeTable)