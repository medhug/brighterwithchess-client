import "../Landing/Landing.scss";
import chesshero from "../../assets/images/chess-hero.jpg";

function Landing() {
  return (
    <main className="landing">
      <div className="landing-container">
        <h1 className="landing-container__title">
          Welcome to BrighterWithChess!
        </h1>
        <div className="landing-container__hero-container">
          <img
            className="landing-container__hero-container--img"
            src={chesshero}
            alt="chess pieces by Felix Mittermeier unsplash"
          />
        </div>
        <div className="landing-container__about">
          <p className="landing-container__about--text">
            Chess can be used to train, build, and test a variety of mental
            skills. These skills can include:
          </p>
          <ul className="landing-container__about--list">
            <li>Memory</li>
            <li>Calculation</li>
            <li>Pattern Recognition</li>
          </ul>
          <p className="landing-container__about--text">
            On this website you can learn each skill and take quizzes to test
            your new ability.
          </p>
          <p className="landing-container__about--text">
            Watch your progress grow as you complete exercises.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Landing;
