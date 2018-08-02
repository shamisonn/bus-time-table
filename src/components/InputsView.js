import React, { Component } from 'react';
import moment from "moment";


const InputFrom = (props) => {
  return <div>
    <p>FROM</p>
    <select onChange={props.handleChange} value={props.from}>
      <option value="univ">大学</option>
      <option value="takasaka">高坂</option>
      <option value="kitasaka">北坂戸</option>
      <option value="kumagaya">熊谷</option>
      <option value="kounosu">鴻巣</option>
    </select>
  </div>
};

const InputTo = (props) => {
  return <div>
    <p>TO</p>
    <select onChange={props.handleChange} value={props.to}>
      <option value="univ">大学</option>
      <option value="takasaka">高坂</option>
      <option value="kitasaka">北坂戸</option>
      <option value="kumagaya">熊谷</option>
      <option value="kounosu">鴻巣</option>
    </select>
  </div>
};

const InputHow = (props) => {
  return <div>
    <p>HOW</p>
    <select onChange={props.handleChange} value={props.how}>
      <option value="departure">出発</option>
      <option value="arrival">到着</option>
    </select>
  </div>
};

const InputIsVac = (props) => {
  return <div>
    <p>VACATION?</p>
    <select onChange={props.handleChange} value={props.isVac}>
      <option value="true">true</option>
      <option value="false">false</option>
    </select>
  </div>
};

const InputDate = (props) => {
  return <div>
    <p>DATE</p>
    <input type="datetime-local" onChange={props.handleChange} value={props.date}/>
  </div>
};


class InputsView extends Component {
  constructor() {
    super();
    this.state = {
      from: "kitasaka",
      to: "univ",
      how: "departure",
      date: moment().format("YYYY-MM-DDTHH:mm"),
      isVac: "false"
    };

    this.fromHandleChange = this.fromHandleChange.bind(this);
    this.toHandleChange = this.toHandleChange.bind(this);
    this.howHandleChange = this.howHandleChange.bind(this);
    this.dateHandleChange = this.dateHandleChange.bind(this);
    this.isVacHandleChange = this.isVacHandleChange.bind(this);
    this.btnHandleClick = this.btnHandleClick.bind(this);
  }

  fromHandleChange(e) {
    console.log("from: " + e.target.value);
    if (e.target.value === "univ" ) {
      this.setState({to: "kitasaka"});
    } else {
      this.setState({to: "univ"});
    }
    this.setState({from: e.target.value});
    console.log(this.state);
  }

  toHandleChange(e) {
    console.log("to: " + e.target.value);
    if (e.target.value === "univ" ) {
      this.setState({from: "kitasaka"});
    } else {
      this.setState({from: "univ"});
    }
    this.setState({to: e.target.value});
    console.log(this.state);
  }

  howHandleChange(e) {
    console.log("how: " + e.target.value);
    this.setState({how: e.target.value});
    console.log(this.state);
  }

  dateHandleChange(e) {
    console.log("date: " + e.target.value);
    this.setState({date: moment(e.target.value).format("YYYY-MM-DDTHH:mm")});
    console.log(this.state);
  }

  isVacHandleChange(e) {
    console.log("isVac: " + e.target.value);
    this.setState({isVac: e.target.value});
    console.log(this.state);
  }

  btnHandleClick() {
    console.log(this.state);
    this.props.suggest(this.state)
  }

  render() {
    return (
      <div className="InputsView">
        <h1>Inputs</h1>
        <form className="form-inline">
          <div className="form-group">
            <InputFrom handleChange={this.fromHandleChange} from={this.state.from}/>
          </div>
          <div className="form-group">
            <InputTo handleChange={this.toHandleChange} to={this.state.to}/>
          </div>
          <div className="form-group">
            <InputHow handleChange={this.howHandleChange} how={this.state.how}/>
          </div>
          <div className="form-group">
            <InputDate handleChange={this.dateHandleChange} date={this.state.date}/>
          </div>
          <div className="form-group">
            <InputIsVac handleChange={this.isVacHandleChange} isVac={this.state.isVac}/>
          </div>
          <div className="form-group">
            <p>CHECK</p>
            <button type="button" onClick={this.btnHandleClick}>送信</button>
          </div>
        </form>
      </div>
    )
  }

}

export default InputsView