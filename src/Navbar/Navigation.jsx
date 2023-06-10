import React,{useState, useEffect} from "react";
import LogoSFU from '../Assets/LogoSFU.png';
import BurgerIcon from '../Assets/BurgerIcon.png';
import CloseLogoSFU from '../Assets/CloseLogoSFU.svg';
import './Navigation.css';
import {NavLink} from "react-router-dom";

const Navigation = () => {


    const [toggleMenu, setToggleMenu] = useState(false);


    useEffect(()=>{
        if( toggleMenu ){
            document.body.style.overflow = "hidden";
            document.querySelector("#root").style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto";
            document.querySelector("#root").style.overflow = "auto";
        }
    }, [toggleMenu])



    return (
        <div className="navigation">
            <nav className="navbar navbar-expand">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1 md-col-2" >
                    <NavLink className="navbar-brand" to="/">
                       <img src={LogoSFU}/>
                    </NavLink>
                        </div>
                        <div className="col-lg-10">
                            <div className="header__blocks">
                        <ul className="navbar-nav ml-auto">
                            <div className='col-lg-2'>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/Science">
                                    Наука
                                    <span className="sr-only">(current)</span>
                                </NavLink>
                            </li>
                            </div>
                            <div className='col-lg-3'>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Education">
                                    Образование
                                </NavLink>
                            </li>
                            </div>
                            <div className='col-lg-4'>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cooperation">
                                    Сотрудничество
                                </NavLink>
                            </li>
                            </div>
                            <div className='col-lg-3'>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/About center">
                                    О центре
                                </NavLink>
                            </li>
                            </div>

                            <div className='md-col-10'>

                                    <div className="navbar-brand-2" to="/">

                                        <div  style={{ }} className="menu__burger">
                                            <img src={ toggleMenu?CloseLogoSFU:BurgerIcon } color="#fff" size={27} onClick={() => setToggleMenu(!toggleMenu)}/>
                                        </div>
                 
                                        <div className={"menu menu__box" + (toggleMenu?" active":"")}>
                                            <div className="navbar-links_container menu__list">
                                                <p><a href="/Science">Наука</a></p>
                                                <p><a href="/Education">Образование</a></p>
                                                <p><a href="#">Сотрудничество</a></p>
                                                <p><a href="#">О центре</a></p>
                                            </div>
                                       </div>

                                    </div>
                            </div>

                        </ul></div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
    };



export default Navigation;