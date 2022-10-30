import React, { useState, useEffect } from "react";
import "../ProgressBar/ProgressBar.scss";
import ProgressBlock from "../ProgressBlock/ProgressBlock";

function ProgressBar(props) {
  const [blockValues, setBlockValues] = useState([
    [{ 1: false }, { 2: false }, { 3: false }, { 4: false }],
  ]);
  const [label, setLabel] = useState("Generic");

  useEffect(() => {
    setLabel(props.label);
    setBlockValues(props.blockValues);
  }, [props.blockValues, props.label]);

  return (
    <main className="main">
      <h3>{label}</h3>
      <div className="main__bar">
        {blockValues.map((block, index) => (
          <ProgressBlock
            key={index+100}
            questionNum={index +1}
            completed={block}
          />
        ))}
      </div>
    </main>
  );
}

export default ProgressBar;
