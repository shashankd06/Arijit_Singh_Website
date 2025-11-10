import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="section">
        <h1 className="section-title">About Arijit Singh</h1>
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">Arijit Singh</div>
          </div>
          <div className="about-text">
            <p>
              Arijit Singh is one of the most celebrated and iconic playback singers in the Indian film industry. 
              Born on April 25, 1987, in Jiaganj, West Bengal, Arijit has become the voice behind countless 
              romantic and soulful melodies that have captured the hearts of millions.
            </p>
            <p>
              With his distinct voice and emotional depth, Arijit has redefined Bollywood music, delivering 
              hit after hit across various genres. His ability to convey emotions through his singing has 
              made him the go-to choice for romantic ballads and soul-stirring melodies.
            </p>
            <p>
              Throughout his career, Arijit has won numerous awards including multiple Filmfare Awards, 
              IIFA Awards, and Zee Cine Awards. His discography spans hundreds of songs across hundreds 
              of films, making him one of the most prolific singers in contemporary Indian cinema.
            </p>
            <h3>Early Life & Career</h3>
            <p>
              Arijit's journey in music began at a young age, and he gained recognition through reality 
              shows before making his mark in the film industry. His breakthrough came with the song 
              "Tum Hi Ho" from Aashiqui 2, which became an instant sensation and established him as 
              a leading playback singer.
            </p>
            <h3>Achievements</h3>
            <ul>
              <li>Multiple Filmfare Awards for Best Male Playback Singer</li>
              <li>IIFA Awards for Best Male Playback Singer</li>
              <li>Zee Cine Awards</li>
              <li>Over 500 songs in Bollywood</li>
              <li>Millions of fans worldwide</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

