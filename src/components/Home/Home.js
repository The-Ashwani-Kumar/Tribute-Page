import React from 'react';
import './Home.css';
import images from '../../assets/apj.png';

const Home = () => {
  return (
    <div className='home'>
      <div className="quote">
        <i>“I firmly believe that unless one has tasted the bitter pill of failure, one cannot aspire enough for success.”
          <br /><br />
          &emsp;&emsp;&emsp;&emsp;&emsp; ~ A.P.J. Abdul Kalam</i>
      </div>
      {/* <div className='img-apj'>
        <img src={images} alt='A.P.J Abdul Kalam' />
      </div> */}
      <div class="container">
        <img src={images} alt='A.P.J Abdul Kalam' />
          <div class="middle">
            <div class="text">A.P.J Abdul Kalam</div>
          </div>
      </div>
    </div>
  )
}

export default Home