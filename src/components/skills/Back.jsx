import React from "react";

const Back = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">React Developer</h3>
      <div className="skills_box">
        <div className="skills-group">
          <div className="skills_data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Javascript</h3>
              <span className="skills_level">Middle</span>
            </div>
          </div>
          <div className="skills_data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">React Js</h3>
              <span className="skills_level">Middle</span>
            </div>
          </div>
        </div>
        <div className="skills-group">
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Redux</h3>
              <span className="skills_level">Middle</span>
            </div>
          </div>
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Typscript</h3>
              <span className="skills_level">Middle</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Back;
