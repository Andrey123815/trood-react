import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  PROGRESS_BAR_MODE,
  selectFilters,
  selectItems,
  selectMode, selectSortCell,
  switchMode,
  TABLE_COMPONENT_MODE, updateFilters, updateSortCell
} from './testcaseSlice';
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import {TableComponent} from "../../components/TableComponent/TableComponent";
import './Testcase.css';
import {ProgressBarTestCase} from "../../configurations/testConfigurations";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

export function Testcase() {
  const mode = useSelector(selectMode);
  const sort = useSelector(selectSortCell);
  const dispatch = useDispatch();

  const filters = useSelector(selectFilters);
  const items = useSelector(selectItems).filter(gotItem =>
      (filters.type === 'all' || gotItem.type === filters.type) &&
      (filters.status === 'all' || gotItem.status === filters.status));

  if (sort[0] === '-') {
    items.sort((a, b) => b[sort.slice(1,)] - a[sort.slice(1,)]);
  } else {
    items.sort((a, b) => a[sort] - b[sort]);
  }

  const changeMode = () => {
    dispatch(switchMode());
  }

  const onFilter = (newFilters) => {
    dispatch(updateFilters(newFilters));
  }

  const onSort = (sort) => {
    dispatch(updateSortCell(sort));
  }

  const onBuy = (id) => {
    alert(`Good with id ${id} bought`);
  }

  return (
    <>
      <Router>
          <Routes>
            <Route path="/trood-react" element={
              <div className="content">
                {mode === PROGRESS_BAR_MODE
                  ? <ProgressBar data={ProgressBarTestCase}/>
                  : <TableComponent data={ {items, filters, sort, onFilter, onSort, onBuy}}/>
                }
              </div>
            } />
            <Route path="/project/*" element={<div>Пока что страница пуста. Для возврата используйте адресную строку или History API</div>} />
          </Routes>
      </Router>

      <button className="btn" onClick={changeMode}>{mode === PROGRESS_BAR_MODE
        ? TABLE_COMPONENT_MODE
        : PROGRESS_BAR_MODE}
      </button>
    </>
  );
}
