import React from 'react';
import './TableComponent.css';
import colorNameToRgbA from "../../libraries/ColorToRGBA";

export function TableComponent(props) {
  const {items, onBuy} = props.data;

  const options = {
    1: [],
    2: new Set()
  };

  items.map(item => {
    options[1].push(item.status);
    options[2].add(item.type);
    return item;
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <select>
              <option>Project</option>
              {options[1].map(status =>
                <option key={status}>{status}</option>
              )}
            </select>
          </th>
          <th>
            <select>
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
          <th>Volume</th>
          <th>ROI</th>
          <th>Free float</th>
          <th>Insurance hedge</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {items.map((item, index) =>
        <tr key={item.name} style={{backgroundColor: colorNameToRgbA(item.status, 0.15)}}>
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
            <button className="button" onClick={(e) => {e.stopPropagation(); return onBuy(index)}}>Buy</button>
          </td>
        </tr>
      )}
      </tbody>
    </table>
  );
}
