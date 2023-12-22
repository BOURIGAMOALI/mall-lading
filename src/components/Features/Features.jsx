import React from 'react';
import "./feature.css";

const Feature = ({ name, description }) => {
  return (
    <div className="feature">
      <div className="face front">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="face back">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="face right">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="face left">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="face top">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="face bottom">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const FeaturesPage = () => {
  return (
    <div className="page">
      <h1>Features</h1>
      <div className="features-container">
        <Feature
          name="Mall Hunt"
          description="A challenge between two persons in a mall to scan reduction QR codes. The winner is the one who scans the maximum QR codes in a short period of time."
        />
        <Feature
          name="Charged Shop"
          description="Integrated in the app, it notifies mall visitors of a charged boutique. It informs clients to wait before entering the boutique."
        />
        <Feature
          name="Indoor Location with 3D Model"
          description="Provides an indoor location feature with a 3D model of the mall."
        />
      </div>
    </div>
  );
};

export default FeaturesPage;