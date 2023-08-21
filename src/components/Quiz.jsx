import React, { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import "../index.css";
import Question from "./Question";
import Contact from "./Contact";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const nextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const restartQuiz = () => {
    dispatch({ type: "RESTART" });
  };

  return (
    <div className="quiz">
      {quizState.showResults ? (
        <div className="results">
          <div className="congratulations">Congratulations!</div>
          <div className="results-info">
            <div>You completed the quiz!</div>
            <div>
              You got {quizState.correctAnswerCount} of{" "}
              {quizState.questions.length} right.
            </div>
            <div className="next-button" onClick={restartQuiz}>
              Restart
            </div>
          </div>
          <div className="connect">
            <div className="center-content">
              <Contact />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1} /
            {quizState.questions.length}
          </div>
          <Question />
          <div className="navigation-buttons">
            <div
              className="next-button"
              onClick={nextQuestion}
            >
              {quizState.currentQuestionIndex < quizState.questions.length - 1
                ? "Next Question"
                : "Show Results"}
            </div>
            {quizState.currentQuestionIndex > 0 && (
              <div
                className="next-button"
                onClick={() => dispatch({ type: "PREVIOUS_QUESTION" })}
              >
                Previous Question
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
