import React from 'react';
import './TableComponent.css';
import colorNameToRgbA from "../../libraries/ColorToRGBA";

export function TableComponent(props) {
  const data = props.data;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <select>
              <option>Project</option>
              <option>Пункт 2</option>
            </select>
          </th>
          <th>
            <select>
              <option>Token Type</option>
              <option>Пункт 2</option>
            </select>
          </th>
          <th>
            <select>
              <option>Conditions</option>
              <option>Пункт 2</option>
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
      {data.map(item =>
        <tr key={item.name} style={{backgroundColor: colorNameToRgbA(item.status, 0.15)}}>
          <td>{item.name}</td>
          <td>{item.type}</td>
          <td>{item.conditions}</td>
          <td>$ {item.volume}</td>
          <td>{item.roi} %</td>
          <td>{item.free}</td>
          <td>{item.hedge} %</td>
          <td><button className="button">Buy</button></td>
        </tr>
      )}
      </tbody>
    </table>
  );
}
