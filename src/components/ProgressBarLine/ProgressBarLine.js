import React from 'react';
import './ProgressBarLine.css';

function ProgressBarLine(props) {
  const singleElemWidth = 15;
  const maxIndent = 2;

  const data = props.data;

  const countElems = data.items.map(item =>
    Math.round(data.width * item.value / props.sum / (singleElemWidth + maxIndent))
    || (item.value !== 0 && 1)
  );

  const genSingleSubline = (countElems, color, height) => {
    const subline = [];
    const singleElem = (index) =>
      <div
        style={{
          width: singleElemWidth,
          backgroundColor: color,
          borderRadius: height * 0.2 + 'px',
          height: height,
          color: color
        }}
        key={color + index}
      >
      </div>
    ;

    for (let i = 0; i < countElems; i++) {
      subline.push(singleElem(i));
    }

    return subline;
  }

  return (
    <figure className="progress-bar-line" style={{width: data.width, height: data.height}}>
      {data.items.map(
        (item, index) =>
          item.value &&
          <React.Fragment key={item.name + index}>
            {genSingleSubline(countElems[index], item.color, data.height)}
          </React.Fragment>
      )}
    </figure>
  );
}

export default ProgressBarLine;
