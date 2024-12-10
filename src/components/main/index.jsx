import React from "react";
import bubleImg from "../../assets/buble.png";
import bubleImg2 from "../../assets/layer.png";
import secimg1 from "../../assets/icon1.svg";
import secimg2 from "../../assets/icon2.svg";
import secimg3 from "../../assets/icon3.svg";
import secimg4 from "../../assets/icon4.svg";
import secimg5 from "../../assets/icon5.svg";
import sec1 from "../../assets/sec_1.svg";
import sec2 from "../../assets/sec_2.svg";
import sec3 from "../../assets/sec_3.svg";
import sec4 from "../../assets/sec_4.svg";
import secTwoImg from "../../assets/sec_two_img.svg";
import three1 from "../../assets/three1.svg";
import three2 from "../../assets/three2.svg";
import three3 from "../../assets/three3.svg";
import strelkaRight from "../../assets/strelka_right.svg";
import kolso from "../../assets/kolso.svg";
import leftGreen from "../../assets/leftg.svg";
import rigthGreen from "../../assets/rightg.svg";
import footerImg from "../../assets/fimg.svg";
import footerImg1 from "../../assets/f1.svg";
import footerImg2 from "../../assets/f2.svg";
import footerImg3 from "../../assets/f3.svg";
import footerImg4 from "../../assets/f4.svg";
import leftImg1 from "../../assets/secimg11.svg";
import leftImg2 from "../../assets/secimg22.svg";

import "./style.scss";

function Main() {
  return (
    <>
      <div className="container">
        <div className="main">
          <img src={bubleImg} alt="" />
          <div className="buble-about">
            <h2>Put the human back in HR.</h2>
            <p>
              Your employees are the real stars. Show the love and help them
              perform!
            </p>
          </div>
        </div>
        <div className="main">
          <div className="buble-about">
            <h2>You don’t have to play all the parts.</h2>
            <p>
              Sales, accounting, HR— Oh My! You can’t do it all - let Clerksy
              help.
            </p>
          </div>
          <img src={bubleImg2} alt="" />
        </div>
      </div>
      <div className="main_bottom">
        <p className="title">We partner with the best</p>
        <div className="mb_box">
          <img src={secimg1} alt="icon" />
          <img src={secimg2} alt="icon" />
          <img src={secimg3} alt="icon" />
          <img src={secimg4} alt="icon" />
          <img src={secimg5} alt="icon" />
        </div>
      </div>
      <div className="sec_one container">
        <p className="quality">HR Production of the Highest Quality</p>
        <div className="sec_one_box">
          <div className="sec_one_card">
            <img src={sec1} alt="img_sec_one" />
            <p>Educates & Informs</p>
            <p>Employee Expectations</p>
          </div>
          <div className="sec_one_card">
            <img src={sec2} alt="img_sec_one" />
            <p>Educates & Informs</p>
            <p>Employee Expectations</p>
          </div>{" "}
          <div className="sec_one_card">
            <img src={sec3} alt="img_sec_one" />
            <p>Educates & Informs</p>
            <p>Employee Expectations</p>
          </div>{" "}
          <div className="sec_one_card">
            <img src={sec4} alt="img_sec_one" />
            <p>Educates & Informs</p>
            <p>Employee Expectations</p>
          </div>
        </div>
      </div>
      <div className="container sec_two">
        <h2 className="title">
          Employees come in all shapes and sizes. Find the right fit.
        </h2>
        <p>
          Focus on casting and screening. Let Clerksy handle contracts, resolve
          any on set-conflicts and make sure you are compliant with work and
          safety boards.
        </p>
        <img src={secTwoImg} alt="photo" />
      </div>
      <div className="main container">
        <div className="buble-about">
          <h2>How the scenes fit together</h2>
          <p>
            Employee Training & Development, Diversity & Inclusion Programs, and
            Conflict Resolution.
          </p>
        </div>
        <img src={leftImg2} alt="" />
      </div>{" "}
      <div className="main_bottom">
        <p className="title">Consider everyone's best interest</p>
        <p className="title_pp">HR is for everyone. Clerksy can help you.</p>
        <div className="mb_box">
          <div className="three_card">
            <img className="three_img" src={three1} alt="icon" />
            <p>Protect Your Company</p>
            <ul>
              <li>Compliance Audits & Training</li>
              <li>Employee Data Storage</li>
              <li>Policy Drafting</li>
            </ul>
          </div>
          <div className="three_card three_card_center ">
            <img className="three_img" src={three2} alt="icon" />
            <p>Protect Your Company</p>
            <ul>
              <li>Compliance Audits & Training</li>
              <li>Employee Data Storage</li>
              <li>Policy Drafting</li>
            </ul>
          </div>{" "}
          <div className="three_card">
            <img className="three_img" src={three3} alt="icon" />
            <p>Protect Your Company</p>
            <ul>
              <li>Compliance Audits & Training</li>
              <li>Employee Data Storage</li>
              <li>Policy Drafting</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" sec_two container">
        <h2 className="title">It's easy as 1, 2, 3</h2>
        <p>Clerksy can help use your unique business needs. Here's how:</p>
        <div className="two_container ">
          <div className="two_box">
            <p>Fill out a form and tell us what you're looking for:</p>
            <h4>5 minutes</h4>
          </div>
          <img className="strelka_img" src={strelkaRight} alt="" />

          <div className="two_box">
            <p>Time it will take a Clerksy rep to follow up:</p>
            <h4>24 minutes</h4>
          </div>
          <img className="strelka_img" src={strelkaRight} alt="" />
          <div className="two_box">
            <p>Take advantage of our monthly plans starting at </p>
            <h4>$969 USD </h4>
            <img className="kolso" src={kolso} alt="" />
          </div>
        </div>
        <button className="two_btn">Book Free Discovery Call</button>
      </div>
      <div className="main container">
        <div className="buble-about">
          <h2>Not just another HR resource.</h2>
          <p>Simple. Entertaining. Informative.</p>
          <button className="two_btn">Download E-book</button>
        </div>
        <img src={leftImg1} alt="" />
      </div>
      <div className="sec_one container">
        <p className="quality">Get Started With Clerksy</p>
        <p className="make_p">Make sure your business puts people first.</p>
        <button className="pink_btn">Book a Free Discovery Call</button>
        <img className="leftg_img" src={leftGreen} alt="photo" />
        <img className="rightg_img" src={rigthGreen} alt="photo" />
      </div>
      <div className="sec_for container">
        <div className="for_first_box">
          <h4>Stay up to date!</h4>
          <p>Sign up for the latest Clerksy news.</p>
        </div>
        <div className="for_second_box">
          <form>
            <input type="text" />
            <button>Sign Up</button>
          </form>
          <p>
            By submitting your email you agree to receive updates about Clerksy.
            You can unsubscribe at any time. View our full{" "}
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
      <footer className="container">
        <div className="footer_first_box">
          <img src={footerImg} alt="" />
          <p>A people company.</p>
          <div className="contact">
            <img src={footerImg4} alt="logo" />
            <img src={footerImg1} alt="logo" />
            <img src={footerImg2} alt="logo" />
            <img src={footerImg3} alt="logo" />
          </div>
        </div>
        <hr style={{ color: "wheat" }} />
        <div className="footer_second_box">
          <p>
            © 2020 Clerksy, Inc. Clerksy is a registered trademark of Clerksy,
            Inc.
          </p>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">GDPR</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press Kit</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Main;
