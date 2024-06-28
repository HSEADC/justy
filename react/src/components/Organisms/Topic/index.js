import * as React from 'react'
import './style.scss'
import Case from '../../Molecules/Case'

const Topic = (props) => {
    const [ open, setOpen ] = React.useState(false);
    return (
        <div className="Topic">
            <div className="TopicTitle">
                {props.title}
                {props.open ?
                <button className="Link" onClick={() => { setOpen(val => !val) }}>
                    {open ? "Свернуть" : "Развернуть"}
                </button> :
                <a className="Link" href={props.link} hidden={!props.link}>
                    См.всё
                </a>}
            </div>
            <div className={`CasesSet-${props.number}`} data-open={open}>
                {(props.cases ?? []).map((elem, index) => (
                    <Case title={elem?.title} subtitle={elem?.subtitle} image={`/static/preview/${elem?.id}.png`}
                        tags={elem?.tags} key={index} link={`/${elem?.id}`}/>
                ))}
            </div>
        </div>
    )
}

export default Topic;