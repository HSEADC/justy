import * as React from 'react'
import './style.scss'
import Logo from '../../Quarks/Logo';

const Footer = (props) => (
    <div className="Footer">
        <div className="Content">
            <div className="Logo">
                <Logo />
                <p className="Moto">
                    Создаем контент, нацеленный<br/>на длительную актульность
                </p>
            </div>
            <div className="FooterContent">
                <div className="Column">
                    <p className="Header">Style Guide</p>
                    <a className="Link" href="https://html-preview.github.io/?url=https://github.com/HSEADC/justy/blob/konst-main/src/styleguide/colors.html">Colors</a>
                    <a className="Link" href="https://html-preview.github.io/?url=https://github.com/HSEADC/justy/blob/konst-main/src/styleguide/home.html">Home</a>
                    <a className="Link" href="https://html-preview.github.io/?url=https://github.com/HSEADC/justy/blob/konst-main/src/styleguide/images.html">Images</a>
                </div>
                <div className="Column">
                    <p className="Header">Статьи</p>
                    <a className="Link" href="/des">Дизайн</a>
                    <a className="Link" href="/code">Код</a>
                    <a className="Link" href="/insp">Вдохновение</a>
                </div>
            </div>
        </div>
        <p className="Rights">
            Brand Guideline<br/>©All rights reserved
        </p>
    </div>
)

export default Footer;