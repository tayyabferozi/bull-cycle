import React from "react";

const About = () => {
  return (
    <div id="about" className="section">
      <h1 className="text-center">MEET THE TEAM</h1>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="img">
                <img src="./assets/img/image.png" alt="bull" />
              </div>
              <div className="text">
                <h3>SEAN</h3>
                <h3>DIRECTOR</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="img">
                <img src="./assets/img/image-1.png" alt="bull" />
              </div>
              <div className="text">
                <h3>Trix</h3>
                <h3>Artist</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="img">
                <img src="./assets/img/image-2.png" alt="bull" />
              </div>
              <div className="text">
                <h3>Regine</h3>
                <h3>Designer</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="img">
                <img src="./assets/img/image-3.png" alt="bull" />
              </div>
              <div className="text">
                <h3>Nishan</h3>
                <h3>Marketer</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
