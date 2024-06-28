import * as React from 'react'
import './style.scss'
import Tag from '../../Atoms/Tag';

const Case = (props) => {
    const [ bgColor, setBgColor ] = React.useState()

    React.useEffect(() => {
        setBgColor([
            'linear-gradient(#F900FE 9.37%, #F4017E 35.94%, #DF024D 74.48%)',
            'linear-gradient(#60E5FF 9%, #42BEFF 36%, #006EFF 74%)',
            `linear-gradient(#FFCC00 9.37%, #FFA200 35.94%, #FF4B00 74.48%)`,
            `linear-gradient(#00FE0D 9.37%, #01EE8F 35.94%, #03CEAC 74.48%)`,
        ][Math.floor(Math.random() * 4) % 4])
    }, [])

    return (
        <div className="Case">
            <img className="ImageContainer" src={props.image} alt="" style={{
                background: bgColor,
            }}/>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15, display: 'flex', width: '100%'}}>
                <div style={{justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, display: 'inline-flex', width: '100%'}}>
                    <div className="Tags">
                        {(props.tags ?? []).map((elem, index) => (
                            <Tag content={elem?.title} color={elem?.color ?? "blue"} key={index}/>
                        ))}
                    </div>
                    <div className="Time">{props.time}</div>
                </div>
                <a className="Title" href={props.link}>{props.title}</a>
                <p className="Subtitle">{props.subtitle}</p>
            </div>
        </div>
    )
};
  
  export default Case;