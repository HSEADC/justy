import * as React from 'react'
import './style.scss'
import Articles from "../../../articles.json";
import { useParams } from 'react-router-dom';
import Tag from '../../Atoms/Tag';
import LinkIcon from './link.svg';

const ArticlePage = (props) => {
  const { id } = useParams()
  const [ article, setArticle ] = React.useState()
  const [ bgColor, setBgColor ] = React.useState()
  const [ currentSection, setCurrentSection ] = React.useState()
  const linkRegExp = new RegExp(/(\[[^\[\]]+\]\([^\(\)]+\))/)

  React.useEffect(() => {
    setArticle(Articles.find(val => val?.id === id))
    console.warn(Articles.find(val => val?.id === id))
    setBgColor([
      'linear-gradient(#F900FE 9.37%, #F4017E 35.94%, #DF024D 74.48%)',
      'linear-gradient(#60E5FF 9%, #42BEFF 36%, #006EFF 74%)',
      `linear-gradient(#FFCC00 9.37%, #FFA200 35.94%, #FF4B00 74.48%)`,
      `linear-gradient(#00FE0D 9.37%, #01EE8F 35.94%, #03CEAC 74.48%)`,
    ][Math.floor(Math.random() * 4) % 4])

    window.onscroll = () => {
      document.querySelectorAll(".Paragraph,.Image").forEach((elem) => {
        const number = Number(elem.getAttribute("data-number") ?? 0);
        if (elem.getBoundingClientRect().top < window.innerHeight / 2 && elem.getBoundingClientRect().bottom > window.innerHeight / 2) {
          setCurrentSection(number)
        }
      })
    }
  }, [id])

  return (
  <div className="Body">
    <div className="Content">  
      <img className="ImagePreview" src={`/static/preview/${article?.id}.png`} alt="" style={{
        background: bgColor,
      }}/>
      <div className="ArticleContent">
        <div className="LeftBar"></div>
        <div className="Article">
          <p className="ArticleTitle">{article?.title}</p>
          <div className="Tags">
            {(article?.tags ?? []).map((elem, index) => (
              <Tag content={elem?.title} color={elem?.color ?? "blue"} key={index}/>
            ))}
          </div>
          <div className="Author" data-hidden={!article?.author}>
            {article?.author}
          </div>
          <div className="Links" data-hidden={!article?.source}>
            <div className="Link">
              <img src={LinkIcon} alt=""/>
              <a href={article?.source}>
                Источник статьи
              </a>
            </div>
          </div>

          {(article?.content ?? []).map((elem, index) => {
            if (elem?.type === 'section_header') {
              return (<p className="SectionTitle" key={index} id={`section-${index}`}>{elem?.text}</p>)
            } else if (elem?.type === 'section_header_link') {
              return (<a className="SectionTitle" key={index} id={`section-${index}`} href={elem?.link}>{elem?.text}</a>)
            } else if (elem?.type === 'subsection_header') {
              return (<p className="SectionSubtitle" key={index} id={`section-${index}`}>
                {(elem?.text ?? "").split(linkRegExp).map((elem, index) => linkRegExp.test(elem) ? 
                <a href={elem.slice(1, -1).split(/\]\(/)[1]} key={index}>
                  {elem.slice(1, -1).split(/\]\(/)[0]}
                </a> : <React.Fragment key={index}>{elem}</React.Fragment>)}
              </p>)
            } else if (elem?.type === 'paragraph') {
              return (<p className="Paragraph" key={index} data-number={index}>
                {(elem?.text ?? "").split(linkRegExp).map((elem, index) => linkRegExp.test(elem) ? 
                <a href={elem.slice(1, -1).split(/\]\(/)[1]} key={index}>
                  {elem.slice(1, -1).split(/\]\(/)[0]}
                </a> : <React.Fragment key={index}>{elem}</React.Fragment>)}
              </p>)
            } else if (elem?.type === 'paragraph_link') {
              return (<p className="Paragraph"><a className="Paragraph" key={index} href={elem?.link} data-number={index}>{elem?.text}</a></p>)
            } else if (elem?.type === 'figure') {
              return (<a href={(elem?.text ?? "").startsWith("http") ? elem?.text : `/static/${elem?.text}`}>
              <img src={(elem?.text ?? "").startsWith("http") ? elem?.text : `/static/${elem?.text}`} 
                   alt="" className="Image" key={index} data-number={index}/></a>)
            } else if (elem?.type === 'list_item') {
              return (<p className="ListItem" key={index} data-number={index}>&nbsp;&nbsp;
                {(elem?.text ?? "").split(linkRegExp).map((elem, index) => linkRegExp.test(elem) ? 
                <a href={elem.slice(1, -1).split(/\]\(/)[1]} key={index}>
                  {elem.slice(1, -1).split(/\]\(/)[0]}
                </a> : <React.Fragment key={index}>{elem}</React.Fragment>)}
              </p>)
            } else if (elem?.type === 'list_item_link') {
              return (<a className="ListItem" key={index} data-number={index} href={elem?.link}>&nbsp;&nbsp;{elem?.text}</a>)
            } else if (elem?.type === 'cite') {
              return (<p className="Cite" key={index} data-number={index}>
                {(elem?.text ?? []).map((elem_, index_) => (<React.Fragment key={index_}>
                  {elem_}<br/>
                </React.Fragment>))}
              </p>)
            } else {
              return null
            }
          })}
        </div>
        <div className="RightBar">
          <p className="ContentListTitle"  data-hidden={!(article?.content ?? []).filter(
            elem => (elem?.type === 'section_header' || elem?.type === 'section_header_link')
          )?.length}>СОДЕРЖАНИЕ</p>
          {(article?.content ?? []).reduce((init, elem, index) => {
            if (elem?.type === 'section_header' || elem?.type === 'section_header_link') {
              return init.concat([{
                ...elem,
                index: index,
              }])
            } else {
              return init
            }
          }, []).map((elem, index, array) => {
              return (<p className="ContentListItem" 
                         data-checked={currentSection > elem?.index && (
                          currentSection < array[index + 1]?.index ||
                          !array[index + 1]?.index
                         )} 
                         key={index} onClick={() => {
                const section = document.querySelector(`#section-${elem?.index}`);
                if (section) {
                  window.scrollTo({
                    top: window.scrollY + section.getBoundingClientRect().top - 96,
                    behavior: `smooth`,
                  })
                }
              }}>{elem?.text}</p>)
            })}
        </div>
      </div>
    </div>
  </div>
)};
  
  export default ArticlePage;
  