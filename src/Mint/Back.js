import React from "react";
// import "./Coutdown"

const Back = () => {
  const all = () => {
    const clockdiv = document.getElementById("countdown");
    const countDownTime = new Date(
      clockdiv.getAttribute("data-date")
    ).getTime();

    const countdownfunction = setInterval(function () {
      const now = new Date().getTime();
      const diff = countDownTime - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      if (diff < 0) {
        clockdiv.style.display = "none";
        clearInterval(countdownfunction);
      } else {
        clockdiv.querySelector(".days").innerHTML = days;
        clockdiv.querySelector(".hours").innerHTML = hours;
        clockdiv.querySelector(".minutes").innerHTML = minutes;
        clockdiv.querySelector(".seconds").innerHTML = seconds;
      }
    }, 1000);
  };

  setTimeout(all, 100);

  return (
    <div className="mt-20 flex">
      <section className="container">
        <div className="owner-status"></div>
        <div className="countdown">
          <ul
            id="countdown"
            className="count-down"
            data-date="July 20, 2022 7:00:00 PM UTC"
          >
            <li className="clock-item">
              <span className="count-number days"></span>
              <p className="count-text">Days</p>
            </li>

            <li className="clock-item">
              <span className="count-number hours"></span>
              <p className="count-text">Hour</p>
            </li>

            <li className="clock-item">
              <span className="count-number minutes"></span>
              <p className="count-text">Min</p>
            </li>

            <li className="clock-item">
              <span className="count-number seconds"></span>
              <p className="count-text">Sec</p>
            </li>
          </ul>
          <h1 className="soon" >NFT Drop Coming Soon!!</h1>
          <a
            href="https://discord.gg/7C3H58qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn btn"
          >
            <span>Join the Community</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Back;
