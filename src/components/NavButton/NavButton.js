import "../NavButton/NavButton.scss";
import SignupIcon from '../../assets/icons/adduser.svg';
import QuizIcon from '../../assets/icons/bolt.svg';
import CancelIcon from '../../assets/icons/cancel.svg';
import HomeIcon from '../../assets/icons/home.svg';
import LoginIcon from '../../assets/icons/login.svg';
import LearnIcon from '../../assets/icons/star.svg';



function NavButton(props) {

    let label= props.label;
    let iconName;
    let text;

    let table={
        Home : HomeIcon,
        Signup : SignupIcon,
        Login : LoginIcon,
        Dash : HomeIcon,
        Learn : LearnIcon,
        Quiz : QuizIcon,
    }

    iconName= table[label];

    return (
        <main className="NavButton">
            <div className="NavButton-container">
                <div className="NavButton-container__icon">
                    <img className="landing-container__icon--img" src={iconName} alt={text}/>
                </div>
                <p>{label}</p>
            </div>
        </main>
    );
  }
  
  export default NavButton;