import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const [timerDays, setTimerDays] = useState("0");
  const [timerHours, setTimerHours] = useState("0");
  const [timerMinutes, setTimerMinutes] = useState("0");
  const [timerSeconds, setTimerSeconds] = useState("0");
  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("Oct 21, 2021 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return (
    <div id="hero" className="section">
      <div className="box">
        <h1 className="mb-5">SOLD OUT</h1>

        <div className="timer">
          <div className="item">
            <h1>{timerDays}</h1>
            <h3>DAYS</h3>
          </div>
          <div className="item">
            <h1>{timerHours}</h1>
            <h3>HOURS</h3>
          </div>
          <div className="item">
            <h1>{timerMinutes}</h1>
            <h3>MINUTES</h3>
          </div>
          <div className="item">
            <h1>{timerSeconds}</h1>
            <h3>SECONDS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// import React, { useRef, useState, useEffect } from "react";

// const ComingSoon = () => {
//   return (
//     <>
//       <section id="mint" className="coming_soon">
//         {/* <h1>Coming Soon</h1> */}
//         <div className="row gy-4 com_container">
//           <div className="col-6 col-sm-3 col-md-3 col-lg-3">
//             <div className="com_div">
//               <div className="com_time">
//                 <h2>{timerDays}</h2>
//                 <h6>Days</h6>
//               </div>
//             </div>
//           </div>
//           <div className="col-6 col-sm-3 col-md-3 col-lg-3">
//             <div className="com_div">
//               <div className="com_time">
//                 <h2>{timerHours}</h2>
//                 <h6>Hours</h6>
//               </div>
//             </div>
//           </div>
//           <div className="col-6 col-sm-3 col-md-3 col-lg-3">
//             <div className="com_div">
//               <div className="com_time">
//                 <h2>{timerMinutes}</h2>
//                 <h6>Minutes</h6>
//               </div>
//             </div>
//           </div>
//           <div className="col-6 col-sm-3 col-md-3 col-lg-3">
//             <div className="com_div">
//               <div className="com_time">
//                 <h2>{timerSeconds}</h2>
//                 <h6>Seconds</h6>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ComingSoon;
