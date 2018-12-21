import React from "react";
import PropTypes from "prop-types";

const Text = ({value}) => <p>{value.toUpperCase()}</p>;
Text.propTypes = {
  value: PropTypes.string.isRequired
};

const Select = ({options, onChange, defaultValue}) =>
  <select onChange={onChange} value={defaultValue}>
    {options.map((o) => <option key={o[0]} value={o[0]}>{o[1]}</option>)}
  </select>;
Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired
};

const DateTime = ({onChange, defaultValue}) =>
  <input type="datetime-local" onChange={onChange} value={defaultValue}/>;
DateTime.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string // date format: is "YYYY-MM-DDTHH:mm"
};

const Button = ({onClick, value}) =>
  <button type="button" onClick={onClick}>{value}</button>;
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export {Text, Select, DateTime, Button};




