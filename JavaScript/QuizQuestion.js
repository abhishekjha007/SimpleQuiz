// We need three Attributes For one Question. So we Writting our Constructor Function.

function Question(text, choices, answer)
{
	this.text = text;                            
	this.choices = choices;
	this.answer = answer;
}

// Now we need to add some function in order to detech that, if the answer was correct or not.

Question.prototype.correctAnswer = function(choice)   // Here we Adding the function which belongs to the function Question. 
                                                      // We write prototype because we writing this function outside the Constructor Function.
{
      return choice === this.answer;
}