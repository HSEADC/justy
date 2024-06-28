import * as React from 'react'
import './style.scss'
import Tag from '../../Atoms/Tag';

const Card = (props) => (
    <div className='card'>
        <img src={props.image} alt={""}/>
        <Tag content={props.tag} />
        <span>{props.content}</span>
    </div>
  );
  
  export default Card;
  