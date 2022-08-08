import "../ProgressBlock/ProgressBlock.scss";
import {Link} from 'react-router-dom';

function ProgressBlock(props) {
  


    return (
      <>
        <div className={props.completed ? "block": "block--completed"}>
            <p>{props.questionNum}</p>
        </div>
      </>
    );
  }
  
  export default ProgressBlock;