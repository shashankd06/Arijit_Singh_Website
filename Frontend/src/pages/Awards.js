import React from 'react';
import './Awards.css';

const Awards = () => {
  const awards = [
    {
      year: '2023',
      award: 'Filmfare Award',
      category: 'Best Male Playback Singer',
      song: 'Kesariya'
    },
    {
      year: '2022',
      award: 'Filmfare Award',
      category: 'Best Male Playback Singer',
      song: 'Raataan Lambiyan'
    },
    {
      year: '2021',
      award: 'IIFA Award',
      category: 'Best Male Playback Singer',
      song: 'Chhichhore'
    },
    {
      year: '2020',
      award: 'Filmfare Award',
      category: 'Best Male Playback Singer',
      song: 'Kalank Title Track'
    },
    {
      year: '2019',
      award: 'Zee Cine Award',
      category: 'Best Playback Singer - Male',
      song: 'Ae Watan'
    },
    {
      year: '2018',
      award: 'Filmfare Award',
      category: 'Best Male Playback Singer',
      song: 'Roke Na Ruke Naina'
    },
    {
      year: '2017',
      award: 'Filmfare Award',
      category: 'Best Male Playback Singer',
      song: 'Ae Dil Hai Mushkil'
    },
    {
      year: '2016',
      award: 'Filmfare Award',
      category: 'Best Male Playback Singer',
      song: 'Soch Na Sake'
    }
  ];

  return (
    <div className="awards">
      <section className="section">
        <h1 className="section-title">Awards & Achievements</h1>
        <div className="awards-timeline">
          {awards.map((award, index) => (
            <div key={index} className="award-item">
              <div className="award-year">{award.year}</div>
              <div className="award-content">
                <h3 className="award-name">{award.award}</h3>
                <p className="award-category">{award.category}</p>
                <p className="award-song">Song: {award.song}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="awards-stats">
          <div className="stat-card">
            <h3>50+</h3>
            <p>Filmfare Awards</p>
          </div>
          <div className="stat-card">
            <h3>30+</h3>
            <p>IIFA Awards</p>
          </div>
          <div className="stat-card">
            <h3>25+</h3>
            <p>Zee Cine Awards</p>
          </div>
          <div className="stat-card">
            <h3>100+</h3>
            <p>Total Awards</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awards;

