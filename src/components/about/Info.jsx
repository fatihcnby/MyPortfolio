import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i className="bx bx-award about_icon"></i>
        <h3 className="about_title">Tecrübe</h3>
        <span className="about_subtitle">Sektörde Çalışma</span>
      </div>
      <div className="about_box">
        <i className="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about_title">Tamamlanan</h3>
        <span className="about_subtitle">30'dan Fazla Proje</span>
      </div>
      <div className="about_box">
        <i className="bx bx-support about_icon"></i>
        <h3 className="about_title">Destek</h3>
        <span className="about_subtitle">Online 7/24</span>
      </div>
    </div>
  );
};

export default Info;
