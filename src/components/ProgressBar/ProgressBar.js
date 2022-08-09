import "../ProgressBar/ProgressBar.scss";
import ProgressBlock from "../ProgressBlock/ProgressBlock";

function ProgressBar(props) {
    
    let tableName = props.tableName; 

    // import specific table from db

    let tableValues = [
        { "id" : "1",
        "completed" : true},
        { "id" : "2",
        "completed" : false},
        { "id" : "3",
        "completed" : false},
        { "id" : "4",
        "completed" : false}
    ];

    let skillTableFromDatabase = {
      memory : "user_memory_progress",
      calculate : "user_calculation_progress",
      pattern : "user_pattern_recognition_progress"
    }


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