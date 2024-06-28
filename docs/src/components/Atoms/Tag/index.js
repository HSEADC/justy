import * as React from 'react'
import './style.scss'
import Sphere from '../Sphere';

const Tag = (props) => (
    <div className="tag">
        <Sphere size={18} color={props.color}/>
        <p className={props.color}>{props.content}</p>
    </div>
);
  
  export default Tag;
  