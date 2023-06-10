import React from 'react';
import './Events.css';

const Events = () => {
    return (
            <div class="Events">
            <div className="container">
                <div class='Science__header'>
                <nav class="science__nav">
                <ul className="nav__items">
                <li class="nav__item"><a href="/Science">Научные семинары</a></li>
                <li class="nav__item"><a href="/Events">Мероприятия</a></li>
                <li class="nav__item"><a href="#">Публикации</a></li>
                <li class="nav__item nav__item-baza"><a href="#">Вычислительная база</a></li>
                </ul>
                </nav>
                    <div className="Event__title">
                        <p>При поддержке Красноярского математического центра работают
                            научные семинары в <b class="title-h3">Сибирском Федеральном Университете</b> и в <b class="title-h3">Институте
                            вычислительной математики КНЦ СО РАН.</b></p>
                    </div>
                    <section className="Event__post">
                        <h3 className="post-title"> Красноярский городской семинар по многомерному
                            комплексному анализу и алгебраической геометрии</h3>
                        <p className="post-supervisor">
                            <b>Руководители</b>
                            <p className="supervisor-name">
                                Цих Август Карлович
                            </p>
                            <p className="supervisor-name">
                                Кытманов Александр Мечиславович
                            </p>
                        </p>
                        <p className="post-supervisor">
                            <b>Секретарь:</b>
                            <p className="supervisor-name">
                                Почекутов Дмитрий
                            </p>
                            <span className="post-data">
                                <div className="contact">
                                    <p><a href="tel:+4733378901">+47 333 78 901</a>
                                    <a href = "mailto: abc@example.com">Send Email</a>
                                    </p>
                                </div>
                                <div className="date">
                                    <time class="post-date"><p class="date-p">Вторник</p> <p class="date-p1">15:05</p> <p>СФУ</p> <p>34-01</p></time>
                                </div>
                            </span>
                        </p>
                    </section>
                </div>
            </div>
            </div>
    );
};

export default Events;