import React from "react";
import Images from "../../utils/Images";
import "./Testimonials.css";
import { useRef } from "react";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const sliderForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const sliderBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img
        src={Images.next_icon}
        alt=""
        className="next-btn"
        onClick={sliderForward}
      />
      <img
        src={Images.back_icon}
        alt=""
        className="back-btn"
        onClick={sliderBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={Images.user_1} alt="" />
                <div>
                  <h3> William Jackson 1</h3>
                  <span> Edusity,USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                dcisions I've ever made. The supportive
                community,state-of-the-art facilities,and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={Images.user_2} alt="" />
                <div>
                  <h3> William Jackson 2</h3>
                  <span> Edusity,USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                dcisions I've ever made. The supportive
                community,state-of-the-art facilities,and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={Images.user_3} alt="" />
                <div>
                  <h3> William Jackson 3</h3>
                  <span> Edusity,USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                dcisions I've ever made. The supportive
                community,state-of-the-art facilities,and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={Images.user_4} alt="" />
                <div>
                  <h3> William Jackson 4</h3>
                  <span> Edusity,USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                dcisions I've ever made. The supportive
                community,state-of-the-art facilities,and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
