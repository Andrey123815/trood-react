import React from 'react';
import SingleLegendCaption from "../SingleLegendCaption/SingleLegendCaption";
import './ProgressBarLegend.css';

function ProgressBarLegend(props) {
  return (
    <figcaption className="progress-bar-legend" style={{width: props.width}}>
      {props.items.map(item =>
        <SingleLegendCaption key={item.name} item={item} percentage={(item.value / props.sum * 100).toFixed(2)}/>
      )}
    </figcaption>
  );
}

export default ProgressBarLegend;
