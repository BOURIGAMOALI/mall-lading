import React from 'react';

const testimonialCardStyle = {
  maxWidth: '600px',
  margin: '20px auto',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#C4D3DC', // Background color
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const testimonialContentStyle = {
  color: '#29235C', // Second color
  marginBottom: '20px',
};

const testimonialAuthorStyle = {
  fontWeight: 'bold',
  color: '#A52727', // Third color
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "Great experience! The service provided exceeded my expectations.",
      author: "John Doe",
    },
    {
      id: 2,
      content: "Amazing support team! Helped me through every step of the way.",
      author: "Jane Smith",
    },
    // Add more testimonials as needed
  ];

  return (
    <div id='testimonials'>
      <h2 style={{ color: '#A52727', textAlign: 'center', marginTop: '40px' }}>
        Testimonials
      </h2>
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          style={testimonialCardStyle}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
          }}
        >
          <p style={testimonialContentStyle}>{testimonial.content}</p>
          <p style={testimonialAuthorStyle}>- {testimonial.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
