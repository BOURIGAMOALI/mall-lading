import React from 'react';

const formStyle = {
  maxWidth: '400px',
  margin: 'auto',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#C4D3DC',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const labelStyle = {
  fontWeight: 'bold',
  color: '#29235C',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  margin: '5px 0',
  borderRadius: '4px',
  border: '1px solid #ddd',
  transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
};

const buttonStyle = {
  backgroundColor: '#A52727',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: '10px',
  transition: 'background-color 0.3s ease, transform 0.3s ease',
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', this.state);
    this.setState({
      name: '',
      email: '',
      message: '',
    });
  };

  render() {
    const formContainerStyle = {
      textAlign: 'center',
      color: '#29235C',
      paddingBottom: '150px', // Increased padding at the bottom to avoid hiding the button behind the footer
    };

    return (
      <div style={formContainerStyle} id="contact">
        <h2 style={{ color: '#A52727', transition: 'color 0.3s ease', marginTop: '40px' }}>
          Contact Us
        </h2>
        <form style={formStyle} onSubmit={this.handleSubmit}>
          <div>
            <label style={labelStyle} htmlFor="name">
              Name:
            </label>
            <input
              style={inputStyle}
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              onMouseEnter={(e) => (e.target.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)')}
              onMouseLeave={(e) => (e.target.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)')}
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="email">
              Email:
            </label>
            <input
              style={inputStyle}
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              onMouseEnter={(e) => (e.target.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)')}
              onMouseLeave={(e) => (e.target.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)')}
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="message">
              Message:
            </label>
            <textarea
              style={{ ...inputStyle, height: '100px' }}
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              onMouseEnter={(e) => (e.target.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)')}
              onMouseLeave={(e) => (e.target.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)')}
            ></textarea>
          </div>
          <button
            style={buttonStyle}
            type="submit"
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#891A1D')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#A52727')}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
