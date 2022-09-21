import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {PROGRESS_BAR_MODE, selectMode, switchMode, TABLE_COMPONENT_MODE} from './testcaseSlice';
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import {TableComponent} from "../table/TableComponent";
import './Testcase.css';
import {ProgressBarTestCase, TableComponentTestCase} from "../../testConfigurations";

export function Testcase() {
  const mode = useSelector(selectMode);
  const dispatch = useDispatch();
  const changeMode = () => dispatch(switchMode());

  return (
    <>
      <div className="content">
        {mode === PROGRESS_BAR_MODE
          ? <ProgressBar data={ProgressBarTestCase}/>
          : <TableComponent data={TableComponentTestCase}/>
        }
      </div>

      <button className="btn" onClick={changeMode}>{mode === PROGRESS_BAR_MODE
        ? TABLE_COMPONENT_MODE
        : PROGRESS_BAR_MODE}
      </button>
    </>
  );
}
