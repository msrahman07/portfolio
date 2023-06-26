import React, { useRef, useState, useEffect } from "react";
import "./contactMe.css";
import validator from "validator";
import emailjs from "@emailjs/browser";
import api from "../api";

export default function ContactMe() {
  const form = useRef();
  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [btnDisable, setBtnDisable] = useState(true);
  const inputMessage = useRef("");
  const successMsg = useRef("");

  useEffect(() => {
    inputMessage.current.value = "Let's have coffee!";
  });
  const checkEmail = (e) => {
    setEmailValue(e.target.value);
    // console.log(emailValue);
  };
  const checkName = (e) => {
    setNameValue(e.target.value);
    // console.log(successMsg);
  };
  useEffect(() => {
    successMsg.current.hidden = true;

    if (validator.isEmail(emailValue) && nameValue !== "") {
      setBtnDisable(false);
      //   console.log(inputEmail);
      //   console.log(inputName);
    } else {
      setBtnDisable(true);
    }
  }, [emailValue, nameValue]);

  const submitForm = (e) => {
    // console.log(form.current["inputName"].value);
    e.preventDefault();
    var templateParams = {
      from_name: form.current["inputName"].value,
      from_email: form.current["inputEmail"].value,
      company: form.current["inputCompany"].value,
      message: form.current["inputMessage"].value
    }
    // console.log(templateParams);
    emailjs
      .send(
        api.EMAIL_SERVICE_ID,
        api.EMAIL_TEMPLATE_ID,
        templateParams,
        api.EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          successMsg.current.hidden = false;
          e.target.reset();
          inputMessage.current.value = "Let's have coffee!";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="sec container">
      <h4 id="contact" className="display-7">
        Contact me
      </h4>
      <hr className="hr" />
      <form ref={form} className="form" onSubmit={submitForm}>
        <div
          ref={successMsg}
          className="alert alert-success"
          role="alert"
          hidden={true}
        >
          Thank you for contacting me!
        </div>
        <div className="form-group">
          <label htmlFor="inputName">
            Name <span className="star">*</span>
          </label>
          <input
            onChange={checkName}
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputCompany">Company</label>
          <input
            type="text"
            className="form-control"
            id="inputCompany"
            placeholder="Enter company name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">
            Email address <span className="star">*</span>
          </label>
          <input
            onChange={checkEmail}
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputMessage">Message</label>
          <textarea
            ref={inputMessage}
            className="form-control"
            id="inputMessage"
            rows="4"
            placeholder="Enter your message/comment"
            // value={inputMessage.current.value}
          ></textarea>
        </div>
        <button
          id="contact"
          type="submit"
          className="button"
          disabled={btnDisable}
        >
          Submit
        </button>
      </form>
      <div id="contactme-social">
        <a
          href="https://github.com/msrahman07"
          className="github"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.facebook.com/mdshahriar.rahmansakib/"
          className="facebook"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/msrahman07/"
          className="linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}
