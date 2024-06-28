import * as React from 'react'
import './style.scss'

const gradients = {
    blue: 'radial-gradient(85.49% 85.49% at 42.98% 42.52%, #60E5FF 9%, #42BEFF 36%, #006EFF 74%)',
    red: 'radial-gradient(58.48% 58.48% at 50% 50%, #F900FE 9.37%, #F4017E 35.94%, #DF024D 74.48%)',
    yellow: `radial-gradient(58.48% 58.48% at 50% 50%, #FFCC00 9.37%, #FFA200 35.94%, #FF4B00 74.48%)`,
    green: `radial-gradient(58.48% 58.48% at 50% 50%, #00FE0D 9.37%, #01EE8F 35.94%, #03CEAC 74.48%)`,
}

const Sphere = (props) => (
    <div style={{
        width: props.size, 
        height: props.size, 
        background: gradients[props.color], 
        boxShadow: '2px 2px 2px ', 
        borderRadius: 9999, 
        filter: 'blur(2px)'
    }} />
);
  
  export default Sphere;
  