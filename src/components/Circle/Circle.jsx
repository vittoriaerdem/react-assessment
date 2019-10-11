import React from 'react';
import './Circle.css'

const Circle = (props) => (
  <div className="Circles">
    <div className={props.selected === '1' ? 'selected' : null}>1</div>
    <div className={props.selected === '2' ? 'selected' : null}>2</div>
    <div className={props.selected === '3' ? 'selected' : null}>3</div>
    <div className={props.selected === '4' ? 'selected' : null}>4</div>
</div>
);

export default Circle;