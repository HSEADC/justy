import * as React from 'react'
import './style.scss'

const SearchItem = (props) => {
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
        <div className="SearchItem">
            <img className="Preview" src={`/static/preview/${props.article?.id}.png`} alt="" style={{
                background: bgColor,
            }}/>
            <a className="Title" href={`/${props.article?.id}`}>{props.article?.title}</a>
        </div>
    )
}
  
export default SearchItem;
  