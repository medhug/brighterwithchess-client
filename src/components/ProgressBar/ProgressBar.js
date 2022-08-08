import "../ProgressBar/ProgressBar.scss";
import ProgressBlock from "../ProgressBlock/ProgressBlock";

function ProgressBar(props) {
    
    let tableName = props.skill; 
    
    console.log("database name: ", tableName);

    // import specific table from db

    let tableValues = [
        { "id" : "1",
        "completed" : false},
        { "id" : "2",
        "completed" : false},
        { "id" : "3",
        "completed" : false},
        { "id" : "4",
        "completed" : false}
    ];


    return (
      <>
        {tableValues.map((block, index) => <ProgressBlock
            key={block.id}
            questionNum = {index + 1}
            completed={block.completed}
            />
        )}
      </>
    );
  }
  
  export default ProgressBar;