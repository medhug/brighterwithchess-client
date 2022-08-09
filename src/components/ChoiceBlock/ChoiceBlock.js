import "../ChoiceBlock/ChoiceBlock.scss"


function ChoiceBlock(props) {

    let category = props.category;

    let dictionary ={
        1 : "Learn Memory",
        2 : "Learn Calculation",
        3 : "Learn Pattern Recognition",
        4 : "Quiz Memory",
        5 : "Quiz Calculation",
        6 : "Quiz Pattern Recognition",
    }

    let buttonLabel= dictionary[category];


    return (
        <div className="button">
            <p>{buttonLabel}</p>
        </div>
    );
  }
  
  export default ChoiceBlock;