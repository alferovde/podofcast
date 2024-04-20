import React from "react";
import "./footer.scss";
import logo from "../../images/logo.svg";
import twitter from "../../images/twitter.png";
import instagramm from "../../images/instagram.png";
import tiktoc from "../../images/tiktok.png";
import spotify from "../../images/Spotify.png";
import google from "../../images/GooglePodcast.png";
import youtube from "../../images/Youtube.png";
import store from "../../images/app_store.png";
import play from "../../images/google_play.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <div className="footer__top">
          <div className="top__left">
            <div className="top__left-logo">
              <img src={logo} alt="logo" />
              <span>©2024.</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul>
              <li>
                <a href="#">
                  <img src={twitter} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instagramm} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={tiktoc} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="top__center">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Episodes</a>
              </li>{" "}
              <li>
                <a href="#">Pricing</a>
              </li>{" "}
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="top__right">
            <p>Listen to episodes on your fav platform:</p>
            <ul>
              <li>
                <img src={google} alt="" />
              </li>
              <li>
                <img src={spotify} alt="" />
              </li>
              <li>
                <img src={youtube} alt="" />
              </li>
            </ul>
            <div>
              App available on:
              <ul>
                <li>
                  <img src={store} alt="" />
                </li>
                <li>
                  <img src={play} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__left">
            <p>
              ©2022. All Rights Reserved. <span> Pod of Cast</span>
            </p>
          </div>
          <div className="footer__right">
            <p>Terms</p>
            <span>•</span>
            <p>Privacy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
