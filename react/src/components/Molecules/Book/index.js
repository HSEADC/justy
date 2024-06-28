import * as React from 'react'
import './style.scss'
import Tag from '../../Atoms/Tag';

const Book = (props) => (
    <div className='book'>
        <div className='cover'>
            <img src={props.image} />
            <p>{props.author}</p>
        </div>
        <div className='tittle'>
            <p className='name'>{props.name}</p>
            <p className='sub'>{props.sub}</p>
        </div>
    </div>
  );
  
  export default Book;
  