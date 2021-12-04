import React from "react";

const FAQ = () => {
  return (
    <div id="faq" className="section">
      <div className="container-fluid">
        <div className="bg"> </div>
        <div className="row">
          <div className="col-md-6 text">
            <div className="main">
              <h1 className="mb-4">FREQUENTLY ASKED QUESTIONS</h1>

              <ul className="questions">
                <li>
                  <h1 className="question">HOW MUCH IS BULL CYCLE NFT?</h1>
                </li>
                <li>
                  <h1 className="question">
                    WHERE CAN I VIEW MY BULL CYCLE NFT
                  </h1>
                </li>
                <li>
                  <h1 className="question">WHEN CAN I MINT BULL CYCLE NFTS?</h1>
                </li>
                <li>
                  <h1 className="question">
                    WHAT NETWORK WILL THE BULL CYCLE NFTS BE ON?
                  </h1>
                </li>
                <li>
                  <h1 className="question">
                    WHAT CAN I DO WITH MY BULL CYCLE NFTS?
                  </h1>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 img">
            <img src="./assets/img/b1.png" alt="bull" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
