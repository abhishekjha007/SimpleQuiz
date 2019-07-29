// This Controller Class Containing the Scores.
// Containing the number of Question that How many Question that we have having.

function Quiz(questions)
{
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}

// Now we need to Write a Function to get the index of Current Question.

Quiz.prototype.getQuestionIndex = function()
{
	return this.questions[this.questionIndex];
}

// Now we Writing the function if the Quiz is Ended or Not.

Quiz.prototype.isEnded = function()
{
	return this.questions.length === this.questionIndex;
}

// Writing a function if the answer is Correct or Not.

Quiz.prototype.guess = function(answer)
{

       if(this.getQuestionIndex().correctAnswer(answer))
     {
     	this.score++;
     }

          this.questionIndex++;     // Increamenting the Question Even if the user selected wrong or correct answer.
 }