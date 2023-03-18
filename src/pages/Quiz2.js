import React, { useState } from 'react';
import '../Quiz.css'
import { Button, Container } from 'react-bootstrap';

export default function App() {
	const questions = [
		{
			questionText: 'Which among the following is the main constituent of Biogas?',
			answerOptions: [
				{ answerText: 'Ethane', isCorrect: false },
				{ answerText: 'Methane', isCorrect: true },
				{ answerText: 'Butane', isCorrect: false },
				{ answerText: 'Propane', isCorrect: false },
			],
		},
		{
			questionText: 'Which among the following is a Noble Gas?',
			answerOptions: [
				{ answerText: 'Nitrogen', isCorrect: false },
				{ answerText: 'Helium', isCorrect: true },
				{ answerText: 'Oxygen', isCorrect: false },
				{ answerText: 'Hydrogen', isCorrect: false },
			],
		},
		{
			questionText: 'The nucleus of an atom consists of',
			answerOptions: [
				{ answerText: 'Neutrons and Protons', isCorrect: true },
				{ answerText: 'Neutrons and Electrons', isCorrect: false },
				{ answerText: 'Electrons and Protons', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Electrons in a hydrogen atom',
			answerOptions: [
				{ answerText: '1', isCorrect: true },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: false },
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