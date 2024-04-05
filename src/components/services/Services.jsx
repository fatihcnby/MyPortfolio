import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section_title">Projelerim</h2>
      <h4 className="section_subtitle">Yaptığım Projeler</h4>

      <div className="services_container  container grid">
        <div className="services_content">
          <div>
            <i className="uil uil-html5-alt services_icon"></i>
            <h3 className="services_title">Html5</h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(1)}>
            Daha Fazlası
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_modal-close"
              ></i>
              <h3 className="services_modal-title">Html5 Tasarımları</h3>
              <p className="services_modal-description">
                Html5 ile ilgili tecrübelerim sayesinde sizlere ideal çözümler sunuyorum. Web siteniz için en uygun çözümler için tercih edebilirsiniz.
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Web sitesi tasarımlar
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Tasarım Geliştirmeleri</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Hızlı ve Etkili Web siteleri
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Tüm cihazlarda kullanım olanağı
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    SEO Çözümleri
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services_content">
          <div>
            <i className="uil uil-java-script services_icon"></i>
            <h3 className="services_title">Javascript </h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(2)}>
            Daha Fazlası
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_modal-close"
              ></i>
              <h3 className="services_modal-title">Javascript Projeleri</h3>
              <p className="services_modal-description">
                Javascript uygulamaları ile Web sitenizi kolay ve hızlı şekilde kullanılabilir hale getirebiliriz.
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Etkileşimli Web sitesi tasarımları
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Animasyonlar ile özel tasarımlar</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Hızlı ve sorunsuz Web siteleri
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Modern ve size özel uygulamalar
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Kullanıcı Dostu Seçenekler
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services_content">
          <div>
            <i className="uil uil-react services_icon"></i>
            <h3 className="services_title">React JS</h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(3)}>
            Daha Fazlası
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_modal-close"
              ></i>
              <h3 className="services_modal-title">React JS Projeleri</h3>
              <p className="services_modal-description">
                React JS kullanılan projeler sayesinde teknolojik yenilikleri yakından takip edebilirsiniz.
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Dev projelerde yüksek performans
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Düşük maliyetli çözümler</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Hızlı ve Etkili Tasarımlar
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    SEO Dostu İçerikler
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                    Farklı Sektörlerde Kullanılabilme
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
