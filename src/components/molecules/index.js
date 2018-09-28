import React from "react";
import {Button, DateTime, Select, Text} from "../atoms";

import "./index.css"

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

const places = [
  ["univ", "大学"],
  ["takasaka", "高坂"],
  ["kitasaka", "北坂戸"],
  ["kumagaya", "熊谷"],
  ["kounosu", "鴻巣"]
];
const FromForm = ({defaultValue, fromHandleChange}) => {
  return <SelectInput
    className="from-input"
    title="出発地点"
    defaultValue={defaultValue}
    onChange={fromHandleChange}
    options={places} />
};
const ToForm = ({defaultValue,toHandleChange}) => {
  return <SelectInput
    className="to-input"
    title="到着地点"
    defaultValue={defaultValue}
    onChange={toHandleChange}
    options={places} />
};

const how = [
  ["departure", "出発"],
  ["arrival","到着"]
];
const HowForm = ({defaultValue, howHandleChange}) => {
  return <SelectInput
    className="how-input"
    title="方式"
    defaultValue={defaultValue}
    onChange={howHandleChange}
    options={how} />
};

const DateForm = ({defaultValue, dateHandleChange}) => {
  return <DateInput
    className="date-input"
    title="日時"
    defaultDate={defaultValue}
    onChange={dateHandleChange}
  />
};

const isVac =[
  ["true", "true"],
  ["false", "false"]
];

const IsVacForm = ({defaultValue, isVacHandleChange}) => {
  return <SelectInput
    className="is-vac-input"
    title="is休業?"
    defaultValue={defaultValue}
    onChange={isVacHandleChange}
    options={isVac} />
};

const ButtonForm = ({onClickButton}) => {
  return <Button
    onClick={onClickButton}
    value="送信"
  />
};

const SingleTable = ({times}) => {
  if (times.length === 0) {
    return <div>no entry</div>
  }
  return <div><table>
    <tbody>
    {times.map(t => <tr key={t}><td>{t}</td></tr>)}
    </tbody>
  </table></div>
};

export {FromForm, ToForm, HowForm, DateForm, IsVacForm, ButtonForm, SingleTable}

