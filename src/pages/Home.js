import React from 'react';
import TypingEffect from '../components/TypingEffect';


function Home() {
  const texts = ['Project Manager', 'Front-End Developer', 'Software Tester', 'Traveller', 'Gamer', 'Spiritual Seeker'];

  return (
    <div className='Home'>
  
      <div className="center-section">
        <div className="center-content">
        <div className="glitch-container">
        <img className="imgcontent" src={require("../images/girish.jpg")} alt="cannot display"/>
</div>
        </div>
      </div>
      <div className="right-section">
        <div className="right-content">
          <h1>Girish Kumar Lanka</h1>
          <TypingEffect texts={texts} /> 
          <br/>       
          <p className='textbox'>A passionate tech aficionado hailing from the vibrant landscapes of India, whose heart beats to the rhythm of web development and project management, and soul indwells in service and spirituality. <br/><br/> Believe me, the word "aficionado" came from my heart, not from Google Search 😜😝😄</p>
          </div>
      </div>
</div>

  );
}

export default Home;