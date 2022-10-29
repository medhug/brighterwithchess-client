import "../ProgressBar/ProgressBar.scss";
import ProgressBlock from "../ProgressBlock/ProgressBlock";

function ProgressBar(props) {
    
    let tableName = props.tableName; 

    // import specific table from db

    let tableValues = props.tableValues;


    return (
      <main className="main">
        <h3>{tableName}</h3>
        <div className="main__bar">
            {tableValues.map((block, index) => <ProgressBlock
                key={block.id}
                questionNum = {index + 1}
                completed={block.completed}
                />
            )}
        </div>
      </main>
    );
  }
  
  export default ProgressBar;