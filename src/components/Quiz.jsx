import React, { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import "../index.css";
import Question from "./Question";
import Contact from "./Contact";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log("quizState", quizState);
  
  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations</div>
          <div className="results-info">
            <div>You completed the quiz!</div>
            <div>
              You got {quizState.correctAnswerCount} of{" "}
              {quizState.questions.length} right.
            </div>
            <div className="next-button" onClick={() => dispatch({ type: "RESTART" })}>
              Restart
            </div>
          </div>
          <div className="connect">
            <div className="center-content">
            <h1>Connect With Us!</h1>
              <Contact />
            </div>
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1} /
            {quizState.questions.length}
          </div>
          <Question />
          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next Question
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
