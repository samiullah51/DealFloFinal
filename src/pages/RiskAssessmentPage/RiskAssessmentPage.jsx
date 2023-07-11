import React, { useState } from "react";
import "./RiskAssessmentPage.css";
function RiskAssessmentPage() {
  const [start, setStart] = useState(false);
  const questions = [
    {
      id: 1,
      question:
        "How would you describe your investment knowledge and experience?",
      op1: "Novice",
      op2: "Beginner",
      op3: "Intermediate",
      op4: "Advanced",
    },
    {
      id: 2,
      question: "What is your primary investment goal?",
      op1: "Capital preservation",
      op2: "Income generation",
      op3: "Capital growth",
      op4: "Speculative gains",
    },
    {
      id: 3,
      question:
        "What percentage of your total investable assets are you considering for this investment?",
      op1: "Less than 10%",
      op2: "10-45%",
      op3: "45-75%",
      op4: "More than 75%",
    },
    {
      id: 4,
      question: "What is your time horizon for this investment?",
      op1: "Less than 1 year",
      op2: "1-5 years",
      op3: "5-10 years",
      op4: "More than 10 years",
    },
    {
      id: 5,
      question:
        "How would you feel if your investments experienced short-term fluctuations in value?",
      op1: "Very uncomfortable",
      op2: "Neutral",
      op3: "Somewhat comfortable",
      op4: "Very comfortable",
    },
  ];
  const [index, setIndex] = useState(0);
  // handle question
  const handleQuestion = () => {
    if (index !== questions.length - 1) {
      setIndex(index + 1);
    }
  };
  return (
    <>
      <div className="risk__assessment__page">
        {/* risk header */}
        <div className="risk__header">
          <h2>Risk Assessment</h2>
          <p>
            Please answer the following questions to assess your risk tolerance
            and investment preferences.
          </p>
        </div>

        {/* Question */}

        <div className="questions">
          <p style={{ fontSize: "20px", color: "#130F26" }}>
            [Question {index + 1} ]
          </p>
          <p className="question">{questions[index].question}</p>
          {/* options */}
          <div className="options">
            <label htmlFor={questions[index].id}>
              <input type="radio" id={questions[index].id} name="option" />
              <span>{questions[index].op1}</span>
            </label>
            <label htmlFor="op2">
              <input type="radio" id="op2" name="option" />
              <span>{questions[index].op2}</span>
            </label>
            <label htmlFor="op3">
              <input type="radio" id="op3" name="option" />
              <span>{questions[index].op3}</span>
            </label>
            <label htmlFor="op4">
              <input type="radio" id="op4" name="option" />
              <span>{questions[index].op4}</span>
            </label>
          </div>
          {/* button */}
          <button onClick={handleQuestion}>
            {index < questions.length - 1 ? "Next" : "Submit"}
          </button>
        </div>
      </div>
      {/* // responsiveness */}
      <div className="res__risk__assessment__page">
        {!start ? (
          <div className="res__ass__start">
            <h2>Risk Assessment</h2>
            <p>
              Please answer the following questions to assess your risk
              tolerance and investment preferences.
            </p>
            <button
              onClick={() => setStart(true)}
              style={{ marginTop: "140px" }}
            >
              Start
            </button>
          </div>
        ) : (
          <div className="questions">
            <p style={{ fontSize: "20px", color: "#130F26" }}>
              [Question {index + 1} ]
            </p>
            <p className="question">{questions[index].question}</p>
            {/* options */}
            <div className="options">
              <label htmlFor={questions[index].id}>
                <input type="radio" id={questions[index].id} name="option" />
                <span>{questions[index].op1}</span>
              </label>
              <label htmlFor="op2">
                <input type="radio" id="op2" name="option" />
                <span>{questions[index].op2}</span>
              </label>
              <label htmlFor="op3">
                <input type="radio" id="op3" name="option" />
                <span>{questions[index].op3}</span>
              </label>
              <label htmlFor="op4">
                <input type="radio" id="op4" name="option" />
                <span>{questions[index].op4}</span>
              </label>
            </div>
            {/* button */}
            <button onClick={handleQuestion}>
              {index < questions.length - 1 ? "Next" : "Submit"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default RiskAssessmentPage;
