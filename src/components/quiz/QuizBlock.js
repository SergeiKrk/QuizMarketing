import React, { useState } from "react";
import ProgressBar from "./progressBar/ProgressBar";
import "./quizBlock.scss";

const QuizBlock = () => {
  const questions = [
    {
      title: "React - это ... ?",
      variants: ["библиотека", "фреймворк", "приложение"],
      correct: 0,
    },
    {
      title: "Компонент - это ... ",
      variants: [
        "приложение",
        "часть приложения или страницы",
        "то, что я не знаю что такое",
      ],
      correct: 1,
    },
    {
      title: "Что такое JSX?",
      variants: [
        "Это простой HTML",
        "Это функция",
        "Это тот же HTML, но с возможностью выполнять JS-код",
      ],
      correct: 2,
    },
  ];

  function Result({ correct, percentage }) {
    return (
      <div className="result">
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
        <h2>
          Вы отгадали {correct} из {Math.round(questions.length)}
        </h2>
        <p>Ваша скидка: {Math.round(percentage * 50)} руб.</p>
        <a href="/">
          <button>Попробовать снова</button>
        </a>
      </div>
    );
  }

  function Game({ step, question, onClickVariant }) {
    const percentage = Math.round((step / questions.length) * 100);

    return (
      <>
        <h1>{question.title}</h1>
        <ul>
          {question.variants.map((variant, index) => (
            <li key={index} onClick={() => onClickVariant(index)}>
              {variant}
            </li>
          ))}
        </ul>
        <ProgressBar percentage={percentage} />
      </>
    );
  }

  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  // const [discount, setDiscount] = useState(0);

  const question = questions[step];
  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="quizBlock">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
};

export default QuizBlock;
