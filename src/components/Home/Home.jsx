import React from "react";
import './Home.css';
import SFULecture from '../../Assets/SFULector.png';
import main_lecture from '../../Assets/main_lecture.png';
import button_left from '../../Assets/button_left.png';
import button_right from '../../Assets/button_right.png';
import forStudents1 from '../../Assets/forStudents1.png';
import forStudents2 from '../../Assets/forStudents2.png';
import forStudents3 from '../../Assets/forStudents3.png';
function Home() {
    return (
        <div className="home">
            <div class="container">
                <div className="home__preview">
                <div className="kras__banner col-lg-6 col-md-12 col-sm-12">
                    <h6>
                        Красноярский<br/>
                        математический<br/>
                        центр
                    </h6>
                    <p>
                        Сибирский федеральный университет <br/>
                        Институт Вычислительной Математики СО РАН
                    </p>
                </div>
                <div className=" kras__banner__lecture col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div class="row align-items-center ">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src={SFULecture}
                        />
                    </div>
                </div>
            </div><div className="home__anons">
                    <div className="col-12">
                            <div className="home__anons__h1 col-12">
                                <h1>Анонс</h1>
                            </div>
                            <div className="anons__mainblock col-12">
                                    <div className="anons__lecture col-lg-6 col-md-12 col-sm-12">
                                        <img src={main_lecture} alt=""/>
                                    </div>
                                <div className="anons__maintext col-lg-6 col-md-12 col-sm-12">
                                    <h3>Геометрическая теория функций<br/>
                                        и топология малых<br/>
                                        размерностей
                                    </h3>
                                    <p>Лектор д.ф.- м.н., профессор Медных Александр<br/>
                                        Дмитриевич, заведющий лабораторией теории функий<br/>
                                        Института им. С.Л. Соболева СО РАН, заведующий кафедрой<br/>
                                        теории функций Новосибрского государственного<br/>
                                        университета, г. Новосибирск
                                    </p>
                                    <a href="">8-11 декабря</a>
                                </div>
                            </div>
                        <div className="anons__posttext col-12">
                        <p>Цикл лекций о Геометрии узлов и зацеплений, Теории многогранников  в пространствах<br/>
                            постоянной кривизны, о подсчёте остовных лесов и деревьев в графах и о Детских<br/>
                            рисунках как предмете математический исследований
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="for__students">
                <div className="col-12">
                    <div className="for__students__header">
                        <div className="for__students__h1">
                            <h1>Школьникам</h1>
                        </div>
                        <div className="for__students__buttons">
                            <button type="button"><img src={button_left} alt=""/></button>
                            <button type="button"><img src={button_right} alt=""/></button>
                        </div>
                    </div>
                    <div className="for__students__columns col-12">
                        <div className="for__students__column1 col-lg-4 col-md-12">
                            <h6>Программа повышения
                                учителей</h6>
                            <p>Методы и алгоритмы и программные<br/>
                                инструменты высокоуровневого синтеза<br/>
                                однокристальных цифровых систем.<br/>
                                Методы и алгоритмы и программные<br/>
                                инструменты высокоуровневого синтеза<br/>
                                однокристальных цифровых систем.<br/>
                                Методы и алгоритмы и программные<br/>
                                инструменты высокоуровневого синтеза<br/>
                                однокристальных цифровых систем.</p>
                        </div>
                        <div className="for__students__column2 col-lg-4 col-md-12">
                            <h6>
                                Круглый стол  “Проблемы<br/>
                                совершенствования<br/>
                                матиматического образования<br/>
                                в России”
                            </h6>
                            <p>30.11.2020 по 3.12.2020</p>
                            <button>Подробнее</button>
                        </div>
                        <div className="for__students__column1 col-lg-4">
                            <h6>Программа повышения
                                учителей</h6>
                            <p>Методы и алгоритмы и программные<br/>
                                инструменты высокоуровневого синтеза<br/>
                                однокристальных цифровых систем.<br/>
                                Методы и алгоритмы и программные<br/>
                                инструменты высокоуровневого синтеза<br/>
                                однокристальных цифровых систем.<br/>
                                Методы и алгоритмы и программные<br/>
                                инструменты высокоуровневого синтеза<br/>
                                однокристальных цифровых систем.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="for__students">
                <div className="col-12">
                    <div className="for__students__header">
                        <div className="for__students__h1">
                            <h1>Мероприятия</h1>
                        </div>
                        <div className="for__students__buttons">
                            <button type="button"><img src={button_left} alt=""/></button>
                            <button type="button"><img src={button_right} alt=""/></button>
                        </div>
                    </div>
                    <div className="for__students__columns col-12">
                        <div className="for__students__column1 col-lg-4 col-md-12">
                            <h6>Лицеисты СФУ презентуют<br/>
                                свои проекты</h6>
                            <p>Состоиться презентация лучших проектов,<br/>
                                подготовленных учащимися Лицея<br/>
                                Сибирского Федерального Университета<br/>
                                в течение 2020/2021 учебного года.</p>
                            <div className="for__students__date col-12">
                                <h6>8-11 Ноября</h6>
                                <p>СФУ</p>
                            </div>
                            <div className="for__students__img">
                                <img src={forStudents1} alt=""/>
                            </div>

                        </div>
                        <div className="for__students__column1 col-lg-4 col-md-12">
                            <h6>Лицеисты СФУ презентуют<br/>
                                свои проекты</h6>
                            <p>Состоиться презентация лучших проектов,<br/>
                                подготовленных учащимися Лицея<br/>
                                Сибирского Федерального Университета<br/>
                                в течение 2020/2021 учебного года.</p>
                            <div className="for__students__date col-12">
                                <h6>8-11 Ноября</h6>
                                <p>СФУ</p>
                            </div>
                            <div className="for__students__img">
                                <img src={forStudents2} alt=""/>
                            </div>

                        </div>
                        <div className="for__students__column1 col-lg-4 col-md-12">
                            <h6>Лицеисты СФУ презентуют<br/>
                                свои проекты</h6>
                            <p>Состоиться презентация лучших проектов,<br/>
                                подготовленных учащимися Лицея<br/>
                                Сибирского Федерального Университета<br/>
                                в течение 2020/2021 учебного года.</p>
                            <div className="for__students__date col-12">
                                <h6>8-11 Ноября</h6>
                                <p>СФУ</p>
                            </div>
                            <div className="for__students__img">
                                <img src={forStudents3} alt=""/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="for__students">
                <div className="col-12">
                    <div className="for__students__header">
                        <div className="for__students__h1">
                            <h1>Предстоящие заседания</h1>
                        </div>
                        <div className="for__students__buttons">
                            <button type="button"><img src={button_left} alt=""/></button>
                            <button type="button"><img src={button_right} alt=""/></button>
                        </div>
                    </div>
                    <div className="for__students__columns col-12">
                        <div className="for__students__column1 col-lg-4 col-md-12">
                            <div className="pre__meeting__date col-12">
                                <h5>12 апреля</h5><h5 className='pre__meeting__date__h5'>16:00</h5><h5>ИВМ</h5>
                            </div>
                            <div className="for__students__column1__texts">
                            <h6>Рыженко Игорь Николаевич</h6>
                            <h5>СФУ</h5>
                            <p>Методы и алгоритмы и программные<br/>
                                инструменты высокоуровневого синтеза<br/>
                                однокристальных цифровых систем.
                            </p>
                            <p className='for__students__column1__inline'>Проблемы математического<br/>
                                и численного моделирования</p></div>
                        </div>
                        <div className="for__students__column1 col-lg-4 col-md-12">
                            <div className="pre__meeting__date col-12">
                                <h5>12 апреля</h5><h5 className='pre__meeting__date__h5'>16:00</h5><h5>ИВМ</h5>
                            </div>
                            <div className="for__students__column1__texts">
                                <h6>Рыженко Игорь Николаевич</h6>
                                <h5>СФУ</h5>
                                <p>Методы и алгоритмы и программные<br/>
                                    инструменты высокоуровневого синтеза<br/>
                                    однокристальных цифровых систем.
                                </p>
                                <p className='for__students__column1__inline'>Проблемы математического<br/>
                                    и численного моделирования</p></div>
                        </div>
                        <div className="for__students__column1 col-lg-4 col-md-12">
                            <div className="pre__meeting__date col-12">
                                <h5>12 апреля</h5><h5 className='pre__meeting__date__h5'>16:00</h5><h5>ИВМ</h5>
                            </div>
                            <div className="for__students__column1__texts">
                                <h6>Рыженко Игорь Николаевич</h6>
                                <h5>СФУ</h5>
                                <p>Методы и алгоритмы и программные<br/>
                                    инструменты высокоуровневого синтеза<br/>
                                    однокристальных цифровых систем.
                                </p>
                                <p className='for__students__column1__inline'>Проблемы математического<br/>
                                    и численного моделирования</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Home;