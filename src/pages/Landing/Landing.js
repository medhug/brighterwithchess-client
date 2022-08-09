import "../Landing/Landing.scss";
import chesshero from '../../assets/images/chess-hero.jpg';


function Landing() {
    return (
        <main className="landing">
            <div className="landing-container">
                <h1 className="landing-container__title">Welcome to BrighterWithChess!</h1>
                <div className="landing-container__hero-container">
                    <img className="landing-container__hero-container--img" src={chesshero} alt="chess pieces by Felix Mittermeier unsplash" />
                </div>
                <p>Chess helps train and build a variety of mental skills.</p>
                <p>These include:</p>
                <p>Memory</p>
                <p>Calculation</p>
                <p>Pattern Recognition</p>

                <div className="landing-container__about">
                    <p className="landing-container__about--text">On this website you can learn each skill and take quizzes to test your new ability. Watch your progress grow as you complete exercises.</p>
                </div>
            </div>
        </main>
    );
  }
  
  export default Landing;