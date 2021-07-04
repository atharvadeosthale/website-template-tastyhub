import React from "react";
import "./Contact.css";
import { ReactComponent as FBIcon } from "../../assets/fb-round.svg";
import { ReactComponent as InstaIcon } from "../../assets/instagram-round.svg";

function Contact() {
  return (
    <div className="contact p-5 md:pl-36 md:pr-36 w-full">
      <div className="contact__heading">Contact us</div>
      <div className="contact__main">
        <div className="contact__box col-span-2">
          <div className="contact__description">
            Fill in the form and we will get back to you as soon as possible!
          </div>
          <div className="contact__form">
            <input
              type="text"
              className="contact__textBox"
              placeholder="Full Name"
            />
            <input
              type="text"
              className="contact__textBox"
              placeholder="E-Mail Address"
            />
            <textarea
              className="contact__textBox"
              placeholder="Message"
            ></textarea>
            <button className="contact__button">Send Message</button>
          </div>
        </div>
        <div className="contact__box">
          <div className="contact__description">More ways to contact us!</div>
          <div className="contact__methods">
            <div className="contact__method">
              <FBIcon style={{ height: 30, width: 30 }} />
              <div className="contact__methodText">TastyHub</div>
            </div>
            <div className="contact__method">
              <InstaIcon style={{ height: 30, width: 30 }} />
              <div className="contact__methodText">tastyhub</div>
            </div>
            <div className="contact__method">
              <img
                src="https://image.flaticon.com/icons/png/512/1782/1782765.png"
                style={{ height: 30, width: 30 }}
              />
              <div className="contact__methodText">tastyhub</div>
            </div>
            <div className="contact__method">
              <img
                src="https://image.flaticon.com/icons/png/512/455/455705.png"
                style={{ height: 30, width: 30 }}
              />
              <div className="contact__methodText">0000000000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
