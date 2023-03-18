import React, { useState } from 'react';
import '../Quiz.css'
import { Button, Container } from 'react-bootstrap';

export default function App() {
	const questions = [
		{
			questionText: 'How many wives did Henry VIII have?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: true },
				{ answerText: '2', isCorrect: false },
			],
		},
		{
			questionText: 'In what year was the Concorde’s first flight?',
			answerOptions: [
				{ answerText: '1928', isCorrect: false },
				{ answerText: '1969', isCorrect: true },
				{ answerText: '1993', isCorrect: false },
				{ answerText: '1987', isCorrect: false },
			],
		},
		{
			questionText: 'Francisco Franco ruled which European country from 1939 to 1975?',
			answerOptions: [
				{ answerText: 'Spain', isCorrect: true },
				{ answerText: 'Portugal', isCorrect: false },
				{ answerText: 'Mexico', isCorrect: false },
				{ answerText: 'China', isCorrect: false },
			],
		},
		{
			questionText: 'How old was Princess Diana when she died?',
			answerOptions: [
				{ answerText: '46', isCorrect: false },
				{ answerText: '53', isCorrect: false },
				{ answerText: '31', isCorrect: false },
				{ answerText: '36', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	return (
		<div className='quiz-bg'>
      <Container style={{backgroundColor: "darkBlue", padding: 10, borderRadius: 10, width: "40%"}}>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
          <Button style={{margin: 20}} href='/'>Go Back</Button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
      </Container>
		</div>
	);
}