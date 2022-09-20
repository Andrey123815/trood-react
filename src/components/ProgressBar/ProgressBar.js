import React from 'react';
import ProgressBarLegend from "../ProgressBarLegend/ProgressBarLegend";
import ProgressBarLine from "../ProgressBarLine/ProgressBarLine";
import './ProgressBar.css';

function ProgressBar(props) {
  const data = props.data;
  const sum = data.items.reduce((sum, el) => sum + el.value, 0);

  return (
    <div className="progress-bar" style={{width: data.width}}>
      <ProgressBarLine data={data} sum={sum}/>
      <ProgressBarLegend items={data.items} width={data.width} sum={sum}/>
    </div>
  );
}

export default ProgressBar;
