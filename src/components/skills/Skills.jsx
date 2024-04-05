import React from "react";
import "./skills.css";
import Front from "./Front";
import Back from "./Back";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Çalışma Alanlarım</h2>
      <h4 className="section_subtitle">Yazılım Dilleri</h4>

      <div className="skills_container container grid">
        <Front />
        <Back />
      </div>
    </section>
  );
};

export default Skills;
