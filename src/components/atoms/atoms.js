import React from "react";

const Text = (props) => <p>{props.value.toUpperCase()}</p>;

const Select = (props) => {
  const options = props.options.map((o) => <option value={o[0]}>{o[1]}</option>);
  // options are two-dimensional array.[[key, value], ...]
  return <select onChange={props.handleChange} value={props.value}>{options}</select>
};

const DateTime = (props) => {
  return <input type="datetime-local" onChange={props.handleChange} value={props.date}/>
};





