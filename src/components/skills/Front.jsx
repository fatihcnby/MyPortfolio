import React from "react";

const Front = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Frontend Developer</h3>
      <div className="skills_box">
        <div className="skills-group">
        <div className="skills_data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">HTML5</h3>
              <span className="skills_level">Middle</span>
            </div>
          </div>
          <div className="skills_data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">CSS</h3>
              <span className="skills_level">Middle</span>
            </div>
          </div>
        </div>
        <div className="skills-group">

          <div className="skills_data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Bootstrap</h3>
              <span className="skills_level">Middle</span>
            </div>
          </div>
          <div className="skills_data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Git</h3>
              <span className="skills_level">Middle</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
