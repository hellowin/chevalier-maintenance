import React, { Component } from 'react';
import logo from '../public/assets/img/logo-light.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* **** Loading **** */}
        <div className="globload">
          <div id="logo-loading" className="spinner animated fadeIn">
            {/* LOGO */}
            <img src={logo} alt="Chevalier Logo" width={150} />
            <div className="ball-anim">
              <div className="ball" />
              <div className="ball" />
              <div className="ball" />
              <div className="ball" />
              <div className="ball" />
              <div className="ball" />
              <div className="ball" />
            </div>
            {/* <h6>LOADING</h6> */}
          </div>
        </div>
        {/* **** Loading **** */}
        {/* START GLOBAL WRAPPER */}
        <div id="wrapper-firefly" className="wrapper">
          <div className="outer animated" />
          {/* START MAIN */}
          <div className="main">
            {/* MAP */}
            <div id="map" className="animated-quick invisible index-999" />
            {/* START WELCOME SECTION */}
            <section className="welcome-section" id="coming-soon">
              <div className="tlt animated">Welcome to Chevalier</div>
              {/* START WELCOME BLOCK */}
              <div id="welcome" className="welcomeblock">
                <div className="container">
                  <div className="col-lg-12 col-md-12 col-xs-12">
                    {/* LOGO */}
                    <img src={logo} id="brand-logo" className="animated opacity-0" alt="Chevalier Logo" width={300} />
                    {/* TEXT ROTATOR */}
                    <h1 className="demo1 animated opacity-0" id="text-rotation"><span className="rotate">WELCOME, BIENVENUE, VÄLKOMMEN, BIENVENIDO, 欢迎, SELAMAT DATANG</span></h1>
                    <div className="col-md-offset-3 col-md-6 animated opacity-0" id="text-construction">
                      <h2>Our website is under construction, we are working very hard to give you the best experience with this one.</h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* END WELCOME BLOCK */}
              {/* START CHEVRON */}
              <div className="scrollbott animated opacity-0">
                <a data-scroll data-toggle="tooltip" data-placement="top" data-title="More" data-trigger="hover" href="#anchor" className="anchor-link">
                  <i className="fa fa-chevron-down fa-2x" />
                </a>
              </div>
              {/* END CHEVRON */}
            </section>
            {/* END WELCOME SECTION */}

            {/* START FOOTER */}
            <footer>
              <div className="container">
                <div className="row">
                  <div className="col-md-offset-2 col-md-8">
                    <div className="social-icons" data-scroll-reveal="enter bottom move 35px, after 0.2s">
                      <a href="https://www.instagram.com/chevalierstore/" target="_blank" className="btn btn-round"><i className="fa fa-instagram" /></a>
                    </div>
                    <p data-scroll-reveal="enter bottom move 35px, after 0.4s">Copyright © 2017 Chevalier Store</p>
                    <a data-scroll href="#coming-soon" id="go-top" className="btn btn-round notification" data-scroll-reveal="enter bottom move 35px, after 0.6s">
                      <i className="fa fa-2x fa-angle-double-up" />
                    </a>
                  </div>
                </div>
              </div>
            </footer>
            {/* END FOOTER */}
            {/* START BUTTON FOR CLOSE MAP */}
            <div className="container">
              <div id="close-map">
                <a id="close-map-top" className="fa-close-map">
                  <i className="fa fa-compress" />
                </a>
              </div>
            </div>
            {/* END BUTTON FOR CLOSE MAP */}
          </div>
          {/* END MAIN */}
        </div>
        {/* END GLOBAL WRAPPER  */}
        {/* START POPUP INFORMATIONS */}
        <div id="popup-informations" className="white-popup mfp-with-anim mfp-hide">
          <h2 className="wow fadeIn" data-wow-delay="0.4s">We are available 7/7</h2>
          <h3 className="wow fadeIn" data-wow-delay="0.4s">9:00 - 12:30 / 14:00 - 20:00</h3>
          <span className="border" />
          <div className="col-lg-4 col-xs-12">
            {/* LOCATE US */}
            <h4 className="wow fadeIn" data-wow-delay="0.4s">
              <a data-toggle="tooltip" data-placement="top" data-title="Locate Us" data-trigger="hover" id="map-location">
                <i className="fa fa-fw fa-map-marker fa-2x" />
                <br />
                28, Rue du Nord
              </a>
            </h4>
          </div>
          <div className="col-lg-4 col-xs-12">
            {/* CALL US */}
            <h4 className="wow fadeIn" data-wow-delay="0.6s">
              <a data-toggle="tooltip" data-placement="top" data-title="Call Us" data-trigger="hover" href="tel:+3336568547">
                <i className="fa fa-fw fa-phone fa-2x" />
                <br />
                +33 36 56 85 47
              </a>
            </h4>
          </div>
          <div className="col-lg-4 col-xs-12">
            {/* EMAIL US */}
            <h4 className="wow fadeIn" data-wow-delay="0.8s">
              <a data-toggle="tooltip" data-placement="top" data-title="Email Us" data-trigger="hover" href="mailto:">
                <i className="fa fa-fw fa-envelope-o fa-2x" />
                <br />
                info@sailor.com
              </a>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
