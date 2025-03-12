import React from "react";

const Map: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", padding: "20px" }}>
      <div
        className="map-container"
        style={{
          width: "90%",
          margin: "50px",
          height: "500px",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
          border: "5px solid #007bff",
        }}
      >
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(20%) brightness(90%)" }} // تھوڑا ڈیزائن بہتر بنانے کے لیے
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14476.988467835004!2d67.1973376!3d24.8895511!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fa5f65b6f6d%3A0xd79593ed7192b34!2sYour%20Business!5e0!3m2!1sen!2s!4v1741329159090!5m2!1sen!2s"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
