import React from "react";
import "./Campus.css";
import Images from "../../utils/Images";
const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={Images.gallery_1} />
        <img src={Images.gallery_2} />
        <img src={Images.gallery_3} />
        <img src={Images.gallery_4} />
      </div>
      <button className="btn dark-btn">
        See more here
        <img src={Images.white_arrow} /> 
      </button>
    </div>
  );
};

export default Campus;
