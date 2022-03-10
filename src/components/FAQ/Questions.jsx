import React from "react";
import { faq } from "../../data";
import Question from "./Question";
const Questions = () => {
  return (
    <main className="question-container">
      <h1 className="faq-header">Frequently Asked Questions</h1>
      <div className="questions">
        {faq.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </div>
    </main>
  );
};
export default Questions;
