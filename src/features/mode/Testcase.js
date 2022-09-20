import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {PROGRESS_BAR_MODE, selectMode, switchMode, TABLE_COMPONENT_MODE} from './testcaseSlice';
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import './Testcase.css';

export function Testcase() {
  const mode = useSelector(selectMode);
  const dispatch = useDispatch();

  const testItems = [
    {name: 'Sold', color: '#BD1FBE', value: 677},
    {name: 'Got free', color: '#FC64FF', value: 23},
    {name: 'Burned', color: '#19DE38', value: 202},
    {name: 'Free float', color: '#9BA3AA', value: 323},
  ];

  const testCase = {
    items: testItems,
    width: 1000,
    height: 30
  }

  const changeMode = () => dispatch(switchMode());

  return (
    <>
      <div className="content">
        {mode === PROGRESS_BAR_MODE
          ? <ProgressBar data={testCase}/>
          : <ProgressBar data={testCase}/>
        }
      </div>

      <button className="btn" onClick={changeMode}>{mode === PROGRESS_BAR_MODE
        ? TABLE_COMPONENT_MODE
        : PROGRESS_BAR_MODE}
      </button>
    </>
  );
}
