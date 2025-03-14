import React, { useEffect, useState } from "react";

// Countdown Timer Component
const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const offerEndTime = new Date(localStorage.getItem("offerEndTime") || "");
    const now = new Date();
    const difference = offerEndTime - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return null; // Offer Expired
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // اگر لوکل اسٹوریج میں آفر کی ڈیڈ لائن نہیں ہے، تو اسے سیٹ کریں
    if (!localStorage.getItem("offerEndTime")) {
      const offerEndTime = new Date();
      offerEndTime.setDate(offerEndTime.getDate() + 5); // 5 دن بعد
      localStorage.setItem("offerEndTime", offerEndTime);
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-3">
      {timeLeft ? (
        <h4 className="text-primary fw-bold">
          Offer Ends In:{" "}
          <span className="text-danger">
            {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
          </span>
        </h4>
      ) : (
        <h4 className="text-danger fw-bold">🎉 Offer Expired 🎉</h4>
      )}
    </div>
  );
};

export default CountdownTimer;
