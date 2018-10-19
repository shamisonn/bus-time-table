import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as Actions from "../../redux/action";
import {ButtonForm, DateForm, FromForm, HowForm, IsVacForm, ToForm} from "../molecules";

import './InputForm.css';

const InputForm = ({formState, actions}) => {
  return  <div className="input-form">
    <FromForm defaultValue={formState.from} fromHandleChange={e => actions.setFrom(e.target.value) }/>
    <ToForm defaultValue={formState.to} toHandleChange={e => actions.setTo(e.target.value) }/>
    <HowForm defaultValue={formState.how} howHandleChange={e => actions.setHow(e.target.value)}/>
    <DateForm defaultValue={formState.date} dateHandleChange={e => actions.setDate(e.target.value) }/>
    <IsVacForm defaultValue={formState.isVac} isVacHandleChange={e => actions.setIsVac(e.target.value) } />
    <ButtonForm onClickButton={() => actions.updateTimeTable(formState)}/>
  </div>
};

// 状態を引っ張ってこれる。connectでつながる。
// 今回はformsを持ってくる。これはreducerでexportしているやつ。
const mapStateToProps = state => {
  return {formState: state.forms};
};

// actionの関数を使えるようにする。
// actionの実際の挙動はreducerが行うが、
// componentが行うことは typeと値を渡してやること。
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputForm);
