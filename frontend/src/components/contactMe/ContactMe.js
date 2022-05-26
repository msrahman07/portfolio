import React, { useRef, useState, useEffect } from "react";
import "./contactMe.css";
import validator from "validator";
import axios from "axios";
import $ from "jquery";

export default function ContactMe() {
  const inputEmail = useRef("");
  const inputName = useRef("");
  const inputCompany = useRef("");
  const inputMessage = useRef("");
  const successMsg = useRef("");
  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [btnDisable, setBtnDisable] = useState(true);

  useEffect(() => {
    inputMessage.current.value = "Let's have coffee!";
  });
  const checkEmail = (e) => {
    setEmailValue(e.target.value);
    // console.log(emailValue);
  };
  const checkName = (e) => {
    setNameValue(e.target.value);
    console.log(successMsg);
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

  const CSRFToken = (name) => {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = $.trim(cookies[i]);
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };
  const submitForm = (e) => {
    e.preventDefault();
    var csrf = CSRFToken("csrftoken");
    axios
      .post(
        "/contactme/",
        {
          name: nameValue,
          company: inputCompany.current.value,
          email: emailValue,
          message: inputMessage.current.value,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRFToken": csrf,
          },
        }
      )
      .then(function (response) {
        console.log(successMsg);
        successMsg.current.hidden = false;
        inputName.current.value = "";
        inputEmail.current.value = "";
        inputCompany.current.value = "";
        inputMessage.current.value = "Let's have coffee!";
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="sec container">
      <h4 id="contact" className="display-7">Contact me</h4>
      <hr className="hr" />
      <form className="form" onSubmit={submitForm}>
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
            ref={inputName}
            onChange={checkName}
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputCompany">Company</label>
          <input
            ref={inputCompany}
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
            ref={inputEmail}
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
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.facebook.com/mdshahriar.rahmansakib/"
          className="facebook"
          target="_blank"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/msrahman07/"
          className="linkedin"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}
