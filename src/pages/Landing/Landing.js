import "../Landing/Landing.scss";
import Header from "../../components/Header/Header";
import chesshero from '../../assets/images/chess-hero.jpg';


function Landing() {
    return (
        <>
            <div className="landing">
                <h1>made it to landing</h1>
                <h2> Chess is great because of reasons!</h2>
                <div className="landing__hero-container">
                    <img className="landing__hero-container--img" src={chesshero} alt="chess pieces by Felix Mittermeier unsplash" />
                </div>
            </div>
            <div>
                <Header />
            </div>
      </>
    );
  }
  
  export default Landing;