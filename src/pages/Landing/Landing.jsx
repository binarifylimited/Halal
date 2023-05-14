import React, { useEffect, useRef, useState } from "react";
import "./landing.scss";
import Header from "../../components/header/Header";
import OurStory from "../../components/ourStory/OurStory";
import Ready from "../../components/ready/Ready";
import loadingBackground from "../../assets/png/mobileLoading.png";
import loadingIcon from "../../assets/svg/LoadingIcon.svg";
import { useNavigate } from "react-router-dom";
import PopupAuth from "../../components/popupAuth/PopupAuth";
const Landing = () => {
  const [timeoutid, setTimeOutId] = useState(0);
  const [timeoutid1, setTimeOutId1] = useState(0);
  const iconref = useRef(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(0);
  const [type, setType] = useState("signin");
  console.log(type, open);
  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth <= 664) {
        setTimeOutId(
          window.setTimeout(() => {
            iconref.current.style.top = "-200px";
          }, 4000)
        );
        setTimeOutId1(
          window.setTimeout(() => {
            navigate("/signup");
          }, 8000)
        );
        iconref.current.style.top = "300px";
        iconref.current.style.animation = "bounce .4s 8 alternate";
      }
    };
    handleSize();
    return () => {
      window.clearTimeout(timeoutid);
      window.clearTimeout(timeoutid1);
    };
  }, []);
  return (
    <div className="Landing_wrapper">
      <Header open={open} setOpen={setOpen} type={type} setType={setType} />
      <OurStory />
      <Ready />
      {open ? <PopupAuth open={open} setOpen={setOpen} type={type} /> : ""}
      <div className="Landing_loading">
        <img
          className="loading_background"
          src={loadingBackground}
          alt="loadingBackground "
        />
        <img
          ref={iconref}
          className="loading_Icon"
          src={loadingIcon}
          alt="loadingIcon"
        />
      </div>
    </div>
  );
};

export default Landing;
