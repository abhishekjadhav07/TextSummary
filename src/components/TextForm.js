import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };
  const handleCleartext = () => {
    setText(" ");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="my-box"
            rows="10"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode,
            }}
          ></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-4" onClick={handleLowerClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCleartext}>
          Clear Text
        </button>
      </div>
      <div className="container my-4">
        <h2>Your text Summary </h2>
        <p>
          {text.split(" ").length} words , {text.length} characters
        </p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
