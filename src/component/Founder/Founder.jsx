import React from 'react';
import './Founder.css';

const Founder = () => {
  return (
    <section className="founder-section">
      <div className="founder-container">
        <div className="founder-image">
          <img src="/founder.svg" alt="Founder" />
        </div>
        <div className="founder-text">
          <h2>Founder</h2>
          <h2 className='name'>Sneha Garud</h2>
          <p>
            Meet the captain of our ship, Sneha, the heartbeat of Rhisome. A passionate entrepreneur fuelled by unwavering
            dedication and boundless enthusiasm for her work. Infusing a touch of innovation and creativity into her
            endeavours, she steers the ship of her business with a unique blend of passion and purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founder;
