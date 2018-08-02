import React, { Component } from 'react';
import './TimeTable.css'

const Tables = (props) => {
  console.log(props);
  if (props.suggestTimes.length === 0) {
    console.log("len == 0 ");
    return <div>no entry</div>
  }

  return <table>
    <tbody>
    {props.suggestTimes.map(t => <tr key={t}><td>{t}</td></tr>)}
    </tbody>
  </table>;

};

class TimeTable extends Component {
  constructor(props) {
    super(props);
    console.log(props.suggestTimes);
    this.state ={};
  }
  render() {
    return (
      <div className="TimeTable">
        <h1>TimeTable</h1>
        <p>移動時間はだいたい10分くらい。以下, 出発時間</p>
        <Tables suggestTimes={this.props.suggestTimes}/>
      </div>
    )
  }
}

export default TimeTable