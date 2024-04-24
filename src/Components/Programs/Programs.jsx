import React from "react";
import "./Programs.css";
import Images from "../../utils/Images";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={Images.program_1} />
        <div className="caption">
          <img src={Images.program_icon_1} />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={Images.program_2} />
        <div className="caption">
          <img src={Images.program_icon_2} />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={Images.program_3} />
        <div className="caption">
          <img src={Images.program_icon_3} />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
