import React from 'react';

const Promotion = ({ title, description }) => {
  return (
    <div style={promotionStyle}>
      <h3 style={titleStyle}>{title}</h3>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

const PromotionsPage = () => {
  return (
    <div style={pageStyle} id='promotions'>
      <h1 style={pageTitleStyle}>Promotions</h1>
      <div style={promotionsContainer}>
        <Promotion
          title="Special Discounts"
          description="Limited-time offers with special discounts up to 50% on selected items."
        />
        <Promotion
          title="Seasonal Sales"
          description="Seasonal sales now available! Get great deals on various products."
        />
        <Promotion
          title="Bonus Rewards"
          description="Earn bonus rewards on every purchase. Accumulate points and redeem them."
        />
      </div>
    </div>
  );
};

// Styles using the provided color codes
const pageStyle = {
  backgroundColor: '#C4D3DC',
  color: '#29235C',
  textAlign: 'center',
  padding: '50px',
};

const pageTitleStyle = {
  color: '#A52727',
};

const promotionsContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '50px',
};

const promotionStyle = {
  width: '30%',
  background: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
};

const titleStyle = {
  color: '#A52727',
  marginBottom: '10px',
};

const descriptionStyle = {
  color: '#29235C',
};

export default PromotionsPage;
