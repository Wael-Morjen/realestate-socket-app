import SearchBar from '../../components/search-bar/SearchBar';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className='homePage'>
      <div className="textContainer">
        <div className="wrapper">
          <h1 className='title'>
            Find Real Estate & Get Your Dream Place          
          </h1>
          <p>
            Search & find your dream destination for RealEstate. 
            Explore diffrent location among various prices
            and filters to get the perfect place for you.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>+16</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="./bg.png" alt="hero" />
      </div>
    </div>
  );
}
 
export default HomePage;