import React from "react";

const Welcome = () => {
  return (
    <div id="welcome" className="section">
      <div className="container-fluid">
        <div className="bg"> </div>
        <div className="row">
          <div className="col-md-4 img">
            <img src="./assets/img/b3.png" alt="bull" />
          </div>
          <div className="col-md-8 text">
            <div className="main">
              <h1 className="mb-4">WELCOME TO BULL CYCLE</h1>
              <h1>
                Bull Cycle NFT is a collection of exclusive limited NFTs
                following the adventures of Dozer on his bull cycle.
                <br />
                <br />
                <br />
                Bull Dozing their way onto the Solana blockchain!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
