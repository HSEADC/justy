import * as React from 'react'
import './style.scss'
import '../style.scss'
import Topic from '../../Organisms/Topic';
import Articles from "../../../articles.json";

const Des = (props) => (
  <div className="Body">
    <div className="Content">    
      <Topic title="UX" cases={Articles.filter(val => !!(val.tags ?? []).find(elem => elem.title === "ux"))} 
             number={2} open={true}/>
      <Topic title="Учебники" cases={Articles.filter(val => !!(val.tags ?? []).find(elem => elem.title === "учебник"))} 
            number={3} open={true}/>
      <Topic title="Типографика" cases={Articles.filter(val => !!(val.tags ?? []).find(elem => elem.title === "типографика"))} 
            number={2} open={true}/>
      <Topic title="Нейросети" cases={Articles.filter(val => !!(val.tags ?? []).find(elem => elem.title === "нейросети"))} 
            number={2} open={true}/>
      <Topic title="О чём книга" cases={Articles.filter(val => !!(val.tags ?? []).find(elem => elem.title === "книги"))} 
            number={4} open={true}/>
    </div>
  </div>
  );
  
  export default Des;
  