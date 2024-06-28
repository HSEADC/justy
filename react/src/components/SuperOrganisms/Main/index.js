import * as React from 'react'
import './style.scss'
// import MainFrame from '../../../assets/images/Frame 1321315119.png';
import Topic from '../../Organisms/Topic';
import Articles from "../../../articles.json";

const Main = (props) => {
  const inspIds = [
    "000332",
    "000261",
  ]
  const uxIds = [
    "000032",
    "000334",
    "000286",
  ]
  const tgIds = [
    "000315",
    "000319",
  ]
  const filmIds = [
    "000267",
    "000328",
  ]
  const bookIds = [
    "000317",
    "000281",
    "000322",
    "000274",
  ]

  return (
  <div className="Body">
    {/* <div className="MainFrame" style={{
      backgroundImage: `url("${MainFrame}")`,
    }}>
    </div> */}
    <div className="Content">    
      <Topic title="Насмотренность" cases={Articles.filter(val => inspIds.includes(val?.id))} number={2} link="/insp"/> 

      <Topic title="UX" cases={Articles.filter(val => uxIds.includes(val?.id))} number={3} link="/des"/>

      <Topic title="Типографика" cases={Articles.filter(val => tgIds.includes(val?.id))} number={2} link="/des"/> 

      <Topic title="Фильмы" cases={Articles.filter(val => filmIds.includes(val?.id))} number={2} link="/insp"/> 

      <Topic title="О чём книга" cases={Articles.filter(val => bookIds.includes(val?.id))} number={4} link="/des"/>
    </div>
  </div>
)};
  
  export default Main;
  