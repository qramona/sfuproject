import React from "react";
import './Footer.css';
import vkLogo from '../Assets/vkLogo.png';
import CloseLogoSFU from "../Assets/CloseLogoSFU.svg";

function Footer() {
    return (
        <div className="footer">
            <footer class=" lg-col-6  absolute-bottom ">
                <div class="container">
                    <div className="footer__containers">
                        <div className="footer__apps col-12">
                            <div className="footer__School col-lg-3 col-md-6">
                                    <h1>О школе</h1>
                                <a href="#"><p>Мероприятия для учителей</p></a>
                                <a href="#"><p>Мероприятия для школьников</p></a>
                                <a href="#"><p>Физикоматематическая школа СФУ</p></a>
                            </div>

                            <div className="footer__Science col-lg-3 col-md-6">
                                <h1>Наука</h1>
                                <a href="#"><p>Научные семинары</p></a>
                                <a href="#"><p>Мероприятия</p></a>
                                <a href="#"><p>Публикациии и научные результаты</p></a>
                                <a href="#"><p>Вычислительная база центра</p></a>

                            </div>
                            <div className="footer__about__center col-lg-3 col-md-6">
                                <h1>О центре</h1>
                                <a href="#"><p>О центре</p></a>
                                <a href="#"><p>Полоежение о центре</p></a>
                                <a href="#"><p>Сотрудники</p></a>
                                <a href="#"><p>Сотрудничество</p></a>
                            </div>
                            <div className="footer__media col-lg-3 col-md-6">
                            <a href="#">  <img src={vkLogo} alt=""/></a>
                            <a href="mailto:kmc@sfu-kras.ru">kmc@sfu-kras.ru</a>
                            <a href="tel:+73912469886">+7(391) 246 98 86</a>
                        </div>
                        </div>

                    </div>
                    <div className="footer__copyright col-12">
                    <p class="mt-4 text-flex-start text-black">
                        © Красноярский математический центр 2023
                    </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Footer;