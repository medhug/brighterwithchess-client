import "../ProgressBlock/ProgressBlock.scss";

function ProgressBlock(props) {
  return (
    <>
      <div
        className={
          props.completed[props.questionNum] ? "block" : "block--completed"
        }
      >
        <p>{props.questionNum}</p>
      </div>
    </>
  );
}

export default ProgressBlock;
