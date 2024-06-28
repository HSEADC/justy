import React, {useState, useEffect} from 'react';
import anonceLg from './anonce-lg.png'
import anonceSm from './anonce-sm.png'
import './style.scss'

const Anonce = (props) => {
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 768px)').matches);

    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      const handleResize = () => setIsMobile(mediaQuery.matches);
      mediaQuery.addListener(handleResize);
      return () => mediaQuery.removeListener(handleResize);
    }, []);

    <div className='anonce'>
        <h2>sdafjasl;</h2>
        {isMobile ? <img src={anonceSm}/> : <img src={anonceLg}/>}
    </div>
};
  
export default Anonce;
  