import * as React from 'react'
import './style.scss'
import '../style.scss'
import Topic from '../../Organisms/Topic';
import Articles from "../../../articles.json";

const Code = (props) => (
  <div className="Body">
    <div className="Content">    
      <Topic title="Всё о коде" cases={Articles.filter(val => !!(val.tags ?? []).find(elem => elem.title === "код"))} 
             number={3} open={true}/>
      <Topic title="HTML" cases={Articles.filter(val => !!(val.tags ?? []).find(elem => elem.title === "html"))} 
            number={4} open={true}/>
      <Topic title="CSS" cases={Articles.filter(val => !!(val.tags ?? []).find(elem => elem.title === "css"))} 
            number={4} open={true}/>
      <Topic title="Нейросети" cases={Articles.filter(val => !!(val.tags ?? []).find(elem => elem.title === "нейросети"))} 
            number={4} open={true}/>
    </div>
  </div>
  );
  
  export default Code;
  