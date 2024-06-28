import React, { useEffect, useState } from "react";

import styles from "./index.module.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import Logo from "../../Quarks/Logo";
import Lens from "./lens.svg";
import Articles from '../../../articles.json'
import SearchItem from "../../Molecules/SearchItem";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const menuToggler = () => setMenuOpen((p) => !p);

    const [search, setSearch] = useState("");

    useEffect(() => {
        if (search) {
            setOpenSearch(true)
        } else {
            setOpenSearch(false)
        }
    }, [search])

    return (
        <div className={styles.header}>
            <div className={styles.header__content}>
                <div>
                    <Logo />
                </div>
                <div>
                    <div className={styles.header__input}>
                        <img src={Lens} alt=""/>
                        <input placeholder="Поиск" value={search} onChange={e => { setSearch(e.target.value) }}></input>
                    </div>
                    <div className={styles.header__search} data-hidden={!openSearch}>
                        {Articles.filter(val => (val.title ?? '').toLowerCase().includes(search.toLowerCase())).slice(0,4).map((elem, index) => (
                            <SearchItem article={elem}/>
                        ))}
                    </div>
                </div>
                <div>
                    <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}>
                        <a className={styles.nav__item} href={"/insp"}>
                            Вдохновение
                        </a>
                        <a className={styles.nav__item} href={"/des"}>
                            Дизайн
                        </a>
                        <a className={styles.nav__item} href={"/code"}>
                            Код
                        </a>
                        <div className={styles.nav__button__container}>
                            <span></span>
                        </div>
                    </nav>
                </div>
                <div>
                    <button className={styles.header__toggler} onClick={menuToggler}>
                        {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Navbar;