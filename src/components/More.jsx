import React from "react";
import { Link } from "react-router-dom";

const More = () => {
  return (
    <div id="more">
      <div id="roadmap-2" className="section">
        <div className="container-fluid">
          <div className="bg"> </div>
          <div className="row">
            <div className="col-md-6 img">
              <img src="./assets/img/b2.png" alt="bull" />
            </div>
            <div className="col-md-6 text">
              <div className="main">
                <h1 className="mb-4">ROAD MAP</h1>
                <h1>Let’s get Bullish!</h1>

                <ul>
                  <li>
                    <h1> Presale</h1>
                  </li>
                  <li>
                    <h1> Project launch</h1>
                  </li>
                  <li>
                    <h1> Exclusive Bull Cycle Gang</h1>
                  </li>
                  <li>
                    <h1> Amazing Giveaways and much more!</h1>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="more-1" className="section">
        <div className="container-fluid">
          <div className="bg"> </div>
          <div className="row">
            <div className="col-md-7 text">
              <div className="main">
                <h1 className="mb-4">PRIVATE PRESALE</h1>
                <h1>
                  Members of the Bull Cycle Gang will have access to mint a
                  limited amount of NFTs.
                </h1>
              </div>
            </div>
            <div className="col-md-5 img">
              <img src="./assets/img/b2.png" alt="bull" />
            </div>
          </div>
        </div>
      </div>
      <div id="more-2" className="section">
        <div className="container-fluid">
          <div className="bg"> </div>
          <div className="row">
            <div className="col-md-5 img">
              <img src="./assets/img/b2.png" alt="bull" />
            </div>
            <div className="col-md-7 text">
              <div className="main">
                <h1 className="mb-4">PROJECT LAUNCH</h1>
                <h1>
                  8000 Bull Cycle NFTs will be bull dozing their way onto the
                  Solana blockchain! Grab one if you can!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="more-3" className="section">
        <div className="container-fluid">
          <div className="bg"> </div>
          <div className="row">
            <div className="col-md-7 text">
              <div className="main">
                <h1 className="mb-4">EXCLUSIVE BULL CYCLE GANG</h1>
                <h1>
                  You will be granted access to our Bull Cycle Gang! Here you
                  will be able to trade your NFT in our market place with
                  escrow. Chat about Investments, NFTs and Crypto.
                </h1>
              </div>
            </div>
            <div className="col-md-5 img">
              <img src="./assets/img/b2.png" alt="bull" />
            </div>
          </div>
        </div>
      </div>
      <div id="more-4" className="section">
        <div className="container-fluid">
          <div className="bg"> </div>
          <div className="row">
            <div className="col-md-5 img">
              <img src="./assets/img/b2.png" alt="bull" />
            </div>
            <div className="col-md-7 text">
              <div className="main">
                <h1 className="mb-4">FANTASTIC GIVEAWAYS</h1>
                <h1>
                  Let’s get Bullish! We will be doing Bull Cycle NFT giveaways
                  throughout our social media on Twitter, Instagram, Facebook
                  etc..
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="more-5" className="section">
        <div className="container-fluid">
          <div className="bg"> </div>
          <div className="row">
            <div className="col-md-7 text">
              <div className="main">
                <h1 className="mb-4">EXCLUSIVE BEAR CYCLE NFT</h1>
                <h1>
                  Members of the Bull Cycle Gang will automatically have access
                  to the Bear Cycle gang coming soon!
                </h1>
              </div>
            </div>
            <div className="col-md-5 img">
              <img src="./assets/img/b2.png" alt="bull" />
            </div>
          </div>
        </div>
      </div>
      <div id="more-6" className="section">
        <div className="container-fluid">
          <div className="bg"> </div>
          <div className="row">
            <div className="col-md-5 img">
              <img src="./assets/img/b2.png" alt="bull" />
            </div>
            <div className="col-md-7 text">
              <div className="main">
                <h1 className="mb-4">AMAZING ANIMATIONS & STORIES</h1>
                <h1>
                  To raise the floor price and popularity of the NFTs we will be
                  creating animations for YouTube telling the story between
                  Dozer the Bull & Grizzly the Bear.. Watch this space..
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/">
        <img src="./assets/img/go-home.png" className="go-home" alt="home" />
      </Link>
    </div>
  );
};

export default More;
