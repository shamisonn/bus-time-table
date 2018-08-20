import React from "react";
import {DateTime, Select, Text} from "../atoms";


const SelectInput = ({className, title, defaultValue, onChange, options}) => {
  return <div className={className}>
    <Text value={title}/>
    <Select defaultValue={defaultValue} onChange={onChange}  options={options}/>
  </div>
};

const DateInput = ({className, title, defaultDate, onChange}) => {
  return <div className={className}>
    <Text value={title}/>
    <DateTime defaultValue={defaultDate} onChange={onChange}/>
  </div>
};

