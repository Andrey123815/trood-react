import React from 'react';
import './TableComponent.css';
import colorNameToRgbA from "../../libraries/ColorToRGBA";
import {useSelector} from "react-redux";
import {selectItems} from "../../features/testcase/testcaseSlice";

const defaultType = 'Token Type';
const defaultStatus = 'Project';

export function TableComponent(props) {
  const {items, filters, sort, onFilter, onSort, onBuy} = props.data;
  const {type, status} = filters;

  const options = {
    1: [],
    2: new Set()
  };

  useSelector(selectItems).map(item => {
    options[1].push(item.status);
    options[2].add(item.type);
    return item;
  });

  const handleTypeFilterChange = (newType) => {
    onFilter({type: newType === defaultType ? 'all' : newType, status});
  }

  const handleStatusFilterChange = (newStatus) => {
    onFilter({type, status: newStatus === defaultStatus ? 'all' : newStatus});
  }

  const handleLineClick = (id) => {
    window.location.href = `/project/${id}`;
  }

  const handleHeadCellClick = (name, sort) => {
    onSort(name === sort ? '-' + name : name);
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <select onChange={(e) => handleStatusFilterChange(e.target.value)}>
              <option>Project</option>
              {options[1].map(status =>
                <option key={status}>{status}</option>
              )}
            </select>
          </th>
          <th>
            <select onChange={(e) => handleTypeFilterChange(e.target.value)}>
              <option>Token Type</option>
              {Array.from(options[2]).map((val, index) =>
                <option key={val + index}>{val}</option>
              )}
            </select>
          </th>
          <th>
            <select>
              <option>Conditions</option>
            </select>
          </th>
          <th onClick={() => handleHeadCellClick('volume', sort)}>Volume</th>
          <th onClick={() => handleHeadCellClick('roi', sort)}>ROI</th>
          <th onClick={() => handleHeadCellClick('free', sort)}>Free float</th>
          <th onClick={() => handleHeadCellClick('hedge', sort)}>Insurance hedge</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
      {items.map((item, index) =>
        <tr onClick={() => handleLineClick(index)} key={item.name} style={{backgroundColor: colorNameToRgbA(item.status, 0.15)}}>
          <td>
            <span className="name-with-status">
              <div className="name-with-status__status" style={{background: item.status}}></div>
              {item.name}
            </span>
          </td>
          <td>{item.type}</td>
          <td>{item.conditions}</td>
          <td>$ {item.volume}</td>
          <td>{item.roi} %</td>
          <td>{item.free}</td>
          <td>{item.hedge} %</td>
          <td>
            <button className="button" onClick={e => {e.stopPropagation(); return onBuy(index)}}>Buy</button>
          </td>
        </tr>
      )}
      </tbody>
    </table>
  );
}
