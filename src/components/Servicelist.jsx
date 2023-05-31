import React from "react";
import "./MyPage.css";
import image1 from '../images/caring hand.jpg'
import image2 from '../images/housing.png'
import image3 from '../images/house.png'
import image4 from '../images/retirement-home-concept-with-nurse.jpg'
import { Footer } from "./Footer";



export const Servicelist = () => {
  return (
    <><div>
      <div _ngcontent-mbd-c10="" class="serviceList">
        <div _ngcontent-mbd-c10="" class="serviceIntro">
          <div _ngcontent-mbd-c10="" class="serviceImage">
            <img
              _ngcontent-mbd-c10=""
              src={image1} />
          </div>
          <div _ngcontent-mbd-c10="" class="ServiceSummary">
            <p _ngcontent-mbd-c10="">Overseas Nursing Career</p>
          </div>
          <div
            _ngcontent-mbd-c10=""
            class="ServiceSummaryshadow"
            style={{ height: "150px", width: "755px" }}
          ></div>
        </div>
        <div _ngcontent-mbd-c10="" class="serviceIntro">
          <div _ngcontent-mbd-c10="" class="serviceImage">
            <img
              _ngcontent-mbd-c10=""
              src={image2} />
          </div>
          <div _ngcontent-mbd-c10="" class="ServiceSummary">
            <p _ngcontent-mbd-c10="">
            Relocation Support
            </p>
          </div>
          <div
            _ngcontent-mbd-c10=""
            class="ServiceSummaryshadow"
            style={{ height: "150px", width: "755px" }}
          ></div>
        </div>
        <div _ngcontent-mbd-c10="" class="serviceIntro">
          <div _ngcontent-mbd-c10="" class="serviceImage">
            <img
              _ngcontent-mbd-c10=""
              src={image3} />
          </div>
          <div _ngcontent-mbd-c10="" class="ServiceSummary">
            <p _ngcontent-mbd-c10="">Temporary Housing</p>
          </div>
          <div
            _ngcontent-mbd-c10=""
            class="ServiceSummaryshadow"
            style={{ height: "150px", width: "755px" }}
          ></div>
        </div>
        <div _ngcontent-mbd-c10="" class="serviceIntro">
          <div _ngcontent-mbd-c10="" class="serviceImage">
            <img
              _ngcontent-mbd-c10=""
              src={image4} />
          </div>
          <div _ngcontent-mbd-c10="" class="ServiceSummary">
            <p _ngcontent-mbd-c10="">
            Temporary Housing
Personalised Supports
            </p>
          </div>
          <div
            _ngcontent-mbd-c10=""
            class="ServiceSummaryshadow"
            style={{ height: "150px", width: "755px" }}
          ></div>
        </div>
      </div>
    </div><Footer /></>
  );
};
