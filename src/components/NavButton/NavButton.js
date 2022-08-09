import "../NavButton/NavButton.scss";
import addUser from '../../assets/icons/adduser_icon.svg';
import bolt from '../../assets/icons/bolt_icon.svg';
import cancel from '../../assets/icons/cancel_icon.svg';
import home from '../../assets/icons/home_icon.svg';
import login from '../../assets/icons/login_icon.svg';
import star from '../../assets/icons/star_icon.svg';



function NavButton(props) {

    let label= props.label;
    let iconName;
    let text;
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