import React from 'react';
import './SingleLegendCaption.css';

function SingleLegendCaption(props) {
  return (
    <section className="caption">
      <div className="color-preview" style={{background: props.item.color}}></div>
      <span className="caption__title-value">
        {props.item.name}: {props.item.value}
      </span>
      <span className="percentage">
        ({props.percentage} %)
      </span>
    </section>
  );
}

export default SingleLegendCaption;
