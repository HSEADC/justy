import * as React from 'react'
import './style.scss'
import '../style.scss'
import Topic from '../../Organisms/Topic';
import Articles from "../../../articles.json";

const Insp = (props) => (
  <div className="Body">
    <div className="Content">    
      <Topic title="Насмотренность" cases={Articles.filter(val => !!(val.tags ?? []).find(elem => elem.title === "насмотренность"))} 
             number={2} open={true}/>
      <Topic title="Книги" cases={Articles.filter(val => !!(val.tags ?? []).find(elem => elem.title === "книги"))} 
            number={3} open={true}/>
      <Topic title="Дизайнеры" cases={Articles.filter(val => !!(val.tags ?? []).find(elem => elem.title === "дизайнеры"))} 
            number={3} open={true}/>
      <Topic title="Кино" cases={Articles.filter(val => (
        !!(val.tags ?? []).find(elem => elem.title === "кино") ||
        !!(val.tags ?? []).find(elem => elem.title === "фильмы")
      ))} 
            number={2} open={true}/>
    </div>
  </div>
  );
  
  export default Insp;
  