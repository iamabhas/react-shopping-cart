import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";

const Question = ({ id, question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <main className="qna">
        <div className="qna-header">
          <h1>{question}</h1>
          <button
            className="btn show-hide-faq-btn"
            onClick={() => {
              setShowAnswer(!showAnswer);
            }}
          >
            {showAnswer ? (
              <AiFillMinusCircle className="hide-logo" />
            ) : (
              <IoIosAddCircle className="show-logo" />
            )}
          </button>
        </div>
        {showAnswer && <p>{answer}</p>}
      </main>
    </>
  );
};
export default Question;
