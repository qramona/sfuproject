import React from 'react';
import './Education.css';
import EduTitle from '../../Assets/EduTitle.svg';
import EduPost1 from '../../Assets/EduPost1.svg';

const Education = () => {
    return (
            <div className="Events">
                <div className="container">
                    <div className='Science__header'>
                        <nav className="science__nav">
                            <ul className="nav__items">
                                <li className="nav__item"><a href="/Teachers">Учителям</a></li>
                                <li className="nav__item"><a href="/Schoolchild">Школьникам</a></li>
                                <li className="nav__item"><a href="/Students">Студентам</a></li>
                                <li className="nav__item nav__item-baza"><a href="#">Физ-мат школа СФУ</a></li>
                            </ul>
                        </nav>
                    </div>
                    <section className="Education__preview">
                        <h3 className="Education__title">
                            <p>Круглый стол: <br/>
                                Проблемы совершенствования  математического образования в России
                            </p>
                        </h3>
                        <div className="Education__blocks">
                            <div className="Education__block-1">
                                <p>Ведущий:</p>
                                <b className="title-b">Падуфалов Николай Дмитриевич</b>
                                <p className="title-desc">професор академик Российской академии образования</p>
                                <p className="title-program">Программа круглого стола</p>
                                <p className="title-program title-program1">Итоги проведения круглого стола, рекомендации</p>
                                <div className="title-date">
                                    <time><p class="title-date-p">Online</p> <p  class="title-date-p title-date-p1">30 ноября- 03 декабря</p></time>
                                </div>
                                
                            </div>
                            <div className="Education__block-2">
                                <img
                                    src={EduTitle}
                                />
                            </div>
                        </div>
                    </section>
                    <section className="Education__post">
                        <div className="Edu__post-blocks">
                            <div className="Edu__block1">
                                <div className="block1__header">
                                    <h3>
                                        Школы-погружения по подготовке к ЕГЭ
                                        по профильной математике
                                        для учащихся 10-11 классов
                                    </h3>
                                </div>
                                <div className="block1__text">
                                    <p>
                                        Рекомендации по самостоятельной подготовке к ЕГЭ по математике 
                                        (профильный уровень (2020 г.)II. Подготовка по темам:
                                        базовый уровень. Работа инженер лаборант в НПО КВАНТ в
                                        Мурманске - 7 вакансий.  Все вакансии компании НПО КВАНТ 
                                        в Мурманске собраны на сайте murmansk.jobfilter.ru.
                                    </p>
                                </div>
                            </div>
                            <div className="Edu__block2">
                                <img
                                    src={EduPost1}
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
    );
};

export default Education;