import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Contact() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ column1: '', column2: '', column3: '' });

  const fetchData = () => {
    axios.get('http://localhost:3001/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/data', formData)
      .then(response => {
        console.log(response.data);
        fetchData(); // Refresh data after insertion
      })
      .catch(error => {
        console.error('There was an error inserting the data!', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  function Message(){
    alert("Your response is saved");
  }

  return (
    <div id="contact">
      <h1>CONTACT US</h1>
      <div className="detail">
        <div className="headings">
          <h2>Call Us</h2><h2>Email Us</h2>
        </div>
        <div className="content">
          <p>+91-9981315087</p><p className="mail">thetarget.anixon@gmail.com</p>
        </div>
      </div>
      <div className="location">
        <h2>OUR LOCATION</h2>
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223.71420275293977!2d78.17006153738907!3d26.21530388153587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c7eb7988a51d%3A0xedeae88a68d573d5!2sThe%20Target%20Institute!5e0!3m2!1sen!2sin!4v1717493761511!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <h2>ENQUIRY FORM</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="column1" onChange={handleInputChange} placeholder="Full Name" required />
        <input type="email" name="column2" onChange={handleInputChange} placeholder="Your Email" required />
        <textarea name="column3" onChange={handleInputChange} placeholder="Write Your Query......"></textarea>
        <button type="submit" value="Send">SUBMIT</button>
      </form>
    </div>
  );
}

export default Contact;
