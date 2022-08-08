import "../ProgressBlock/ProgressBlock.scss";
import {Link} from 'react-router-dom';

function ProgressBlock(props) {
  
    return (
      <>
        <Link to="/dashboard/:id/quiz/:category">
            <div className="block">
                <p>{props.questionNum}</p>
            </div>

        </Link>
      </>
    );
  }
  
  export default ProgressBlock;