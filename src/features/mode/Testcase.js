import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {PROGRESS_BAR_MODE, selectMode, switchMode, TABLE_COMPONENT_MODE} from './testcaseSlice';
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import {TableComponent} from "../table/TableComponent";
import './Testcase.css';

export function Testcase() {
  const mode = useSelector(selectMode);
  const dispatch = useDispatch();

  const testProgressBarItems = [
    {name: 'Sold', color: '#BD1FBE', value: 677},
    {name: 'Got free', color: '#FC64FF', value: 23},
    {name: 'Burned', color: '#19DE38', value: 202},
    {name: 'Free float', color: '#9BA3AA', value: 323},
  ];

  const testTableCompItems = [
    {id: 1, name: 'Pyshky.net', status: 'green', type: 'TRST', conditions: 'x2,6 months', volume: 120000, roi: 4, free: 20, hedge: 20},
    {id: 2, name: 'NFT-Flowershop', status: 'yellow', type: 'THT', conditions: 'x4,2 years', volume: 80000, roi: 23, free: 12, hedge: 0},
    {id: 4, name: 'Web3 P2P University', status: 'red', type: 'TRST', conditions: 'x2,1 years', volume: 200000, roi: 6, free: 1, hedge: 0},
  ];

  const testCase = {
    items: testProgressBarItems,
    width: 1000,
    height: 30
  }

  const changeMode = () => dispatch(switchMode());

  return (
    <>
      <div className="content">
        {mode === PROGRESS_BAR_MODE
          ? <ProgressBar data={testCase}/>
          : <TableComponent data={testTableCompItems}/>
        }
      </div>

      <button className="btn" onClick={changeMode}>{mode === PROGRESS_BAR_MODE
        ? TABLE_COMPONENT_MODE
        : PROGRESS_BAR_MODE}
      </button>
    </>
  );
}
