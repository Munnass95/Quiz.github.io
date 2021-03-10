function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

	function showQuestions(questions, quizContainer) {
		var output = [];
		var answers;

		for (var i = 0; i < questions.length; i++) {


			answers = [];


			for (letter in questions[i].answers) {
				answers.push(
					'<label>' +
					'<input type="radio" name="question' + i + '" value="' + letter + '">' +
					letter + ': ' +
					questions[i].answers[letter] +
					'</label>'
				);
			}


			output.push(
				'<div class="question">' + questions[i].question + '</div>' +
				'<div class="answers">' + answers.join('') + '</div>'
			);
		}
		quizContainer.innerHTML = output.join('');
	}

	function showResults(questions, quizContainer, resultsContainer) {

		
		var answerContainers = quizContainer.querySelectorAll('.answers');

		var userAnswer = '';
		var numCorrect = 0;

		for (var i = 0; i < questions.length; i++) {

			userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

			
			if (userAnswer === questions[i].correctAnswer) {
			
				numCorrect++;

			
				answerContainers[i].style.color = 'lightgreen';
			}
		
			else {
			
				answerContainers[i].style.color = 'red';
			}
		}
		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + ' ' + '(' + ((numCorrect / questions.length) * 100) + '%' + ')';
	}
	
	showQuestions(questions, quizContainer);

	submitButton.onclick = function () {
		showResults(questions, quizContainer, resultsContainer);
	}
}

var myQuestions = [{
		question: "What is the form of WWW?",
		answers: {
			a: 'Web World Wide ',
			b: 'Wide Web World ',
			c: 'World Wide Web '
		},
		correctAnswer: 'c'
            },
	{
		question: "What is the meaning of HTML?",
		answers: {
			a: 'Hypertext Markup Language ',
			b: 'Hypertext Making Language ',
			c: 'Hypertext Markup Library '
		},
		correctAnswer: 'a'
            },
	{
		question: "Who is Sakib al Hasan?",
		answers: {
			a: 'Footballer ',
			b: 'Youtuber ',
			c: 'Cricketer '
		},
		correctAnswer: 'c'
            },
	{
		question: "Founder of Google?",
		answers: {
			a: 'Ananta jalil ',
			b: 'Bill Gates ',
			c: 'Larry Page '
		},
		correctAnswer: 'c'
            },
	{
		question: "Who is Ronaldo?",
		answers: {
			a: 'Cricketer ',
			b: 'Boxer ',
			c: 'Footballer '
		},
		correctAnswer: 'c'
            },
	{
		question: "What is the value of PI (π)?",
		answers: {
			a: '3.256 ',
			b: '3.1216 ',
			c: '3.1416 '
		},
		correctAnswer: 'c'
            },
	{
		question: "Bracu CSE-391 Course Title",
		answers: {
			a: 'Computer Architecture ',
			b: 'Programming for the Internet ',
			c: 'Object Oriented Programming '
		},
		correctAnswer: 'b'
            },
	{
		question: "What is 3*9?",
		answers: {
			a: '21 ',
			b: '27 ',
			c: '24 '
		},
		correctAnswer: 'b'
            },
	{
		question: "What is 5+8?",
		answers: {
			a: '14 ',
			b: '12 ',
			c: '13 '
		},
		correctAnswer: 'c'
            },
	{
		question: "What is 85/5?",
		answers: {
			a: '17 ',
			b: '16 ',
			c: '18 '
		},
		correctAnswer: 'a'
            },
	{
		question: "How Many Newton's law?",
		answers: {
			a: '1 ',
			b: '2 ',
			c: '3 '
		},
		correctAnswer: 'c'
            },
	{
		question: "Who is Tesla?",
		answers: {
			a: 'Doctor ',
			b: 'Scientist ',
			c: 'Magician '
		},
		correctAnswer: 'b'
            }

        ];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
