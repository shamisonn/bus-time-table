import React, { Component } from 'react';
import {DateInput, SelectInput} from "../molecules";
import moment from "moment";
import {Button} from "../atoms";


class Inputs extends Component {
  constructor() {
    super();
  }
  places = [
    ["univ", "大学"],
    ["takasaka", "高坂"],
    ["kitasaka", "北坂戸"],
    ["kumagaya", "熊谷"],
    ["kounosu", "鴻巣"]
  ];

  how = [
    ["departure", "出発"],
    ["arrival","到着"]
  ];

  isVec =[
    ["true", "true"],
    ["false", "false"]
  ];

  render() {
    return (
      <div className="inputs">
        <SelectInput
          className="from-input"
          title="出発地点"
          defaultValue="kitasaka"
          onChange={this.fromHandleChange}
          options={this.places} />
        <SelectInput
          className="to-input"
          title="到着地点"
          defaultValue="univ"
          onChange={this.toHandleChange}
          options={this.places} />
        <SelectInput
          className="how-input"
          title="方式"
          defaultValue="departure"
          onChange={this.howHandleChange}
          options={this.how} />
        <DateInput
          className="date-input"
          title="日時"
          defaultDate={moment().format("YYYY-MM-DDTHH:mm")}
          onChange={this.dateHandleChange}
        />
        <SelectInput
          className="is-vec-input"
          title="is休業?"
          defaultValue="false"
          onChange={this.isVacHandleChange}
          options={this.isVec} />
        <Button
          onClick={this.onClickButton}
          value="送信"
        />
      </div>
    )
  }

  fromHandleChange(e) {
    if (e.target.value === "univ" ) {
      this.setState({to: "kitasaka"});
    } else {
      this.setState({to: "univ"});
    }
    this.setState({from: e.target.value});
  }

  toHandleChange(e) {
    if (e.target.value === "univ" ) {
      this.setState({from: "kitasaka"});
    } else {
      this.setState({from: "univ"});
    }
    this.setState({to: e.target.value});
  }

  howHandleChange(e) {
    this.setState({how: e.target.value});
  }

  dateHandleChange(e) {
    this.setState({date: moment(e.target.value).format("YYYY-MM-DDTHH:mm")});
  }

  isVacHandleChange(e) {
    this.setState({isVac: e.target.value});
  }
  onClickButton() {
    this.props.suggest(this.state)
  }
}
/*
class TimeTable extends Component {
  constructor() {
    super();
  }
}
*/
