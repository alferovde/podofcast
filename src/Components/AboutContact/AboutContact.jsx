import React from "react";
import "./aboutcontact.scss";
import Button from "../../StyledComponent/Button/Button";
const AboutContact = () => {
  return (
    <div className="about-contact">
      <div className="about-contact__title">
        <h2>Get in touch</h2>
        <p>Send your message to us</p>
      </div>

      <div className="about-contact__form container">
        <form action="#">
          <div className="form__top">
            <label htmlFor="">
              <span>
                Full name <b>*</b>
              </span>
              <input type="text" required placeholder="Name" />
            </label>
            <label htmlFor="">
              <span>
                Email <b>*</b>
              </span>
              <input type="text" required placeholder="Email" />
            </label>
            <label htmlFor="">
              <span>
                Phone <b>*</b>
              </span>
              <input type="text" required placeholder="Phone" />
            </label>
            <label htmlFor="">
              <span>
                Subject <b>*</b>
              </span>
              <input type="text" required placeholder="Subject" />
            </label>
          </div>
          <div className="form__text">
            <label htmlFor="">
              <span>
                Message <b>*</b>
              </span>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your message goes here..."
              ></textarea>
            </label>
          </div>
        </form>

        <div className="form__btn">
          <p>
            <span>*</span>required
          </p>
          <Button btnColor className="about-btn__subscribe">
            SUBSCRIBE
          </Button>
          <p>
            Viverra at port accumsan. <span>Orci non</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
