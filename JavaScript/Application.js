
// Here We First write a Function to populate the number of Question

 function populate()
 {
 	// First we Checking our Quiz is Ended or Not.

 	if(quiz.isEnded())
 	{
 		showScores();
 	}
    else
    {
       //show question();

       var element = document.getElementById("question");
       element.innerHTML = quiz.getQuestionIndex().text;

       //show choices.

       var choices = quiz.getQuestionIndex().choices;
       for(var i=0; i<choices.length; i++)
       {
       	var element = document.getElementById("choice" + i);
       	element.innerHTML = choices[i];
       	guess("btn" + i, choices[i]);
       }

       showProgress();
    }
 };

 function guess(id, guess)
 {
    var button = document.getElementById(id);
    button.onclick = function()
    {
    	quiz.guess(guess);
    	populate(); 
    }
 };

 function showProgress()         // Here we Working on Footer that Shows Question X of Y etc.
 {
    var currentQuestionNumber = quiz.questionIndex + 1; 
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of  " + quiz.questions.length;
 }

  //Creating ShowScores Function.

function showScores()
{
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'> Your Score : " + quiz.score + " </h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
   
};

var questions = [

   new Question("Which one is not a Object Oriented Programming Language?",["JAVA","C#","C++","C"], "C"),
   new Question("Which language is used for Styling Web Page?",["HTML","CSS","C++","C#"], "CSS"),
   new Question("Find the Number of the Solution of the given Equation : |x|^2 + 5|x| + 6?",["1","2","3","No Solution"], "No Solution"),
   new Question("Which Bowler Does not bowled a single No ball in his career?",["Bret Lee","Kapil Dev","Dale Steyn","James Anderson"], "Kapil Dev"),
   new Question("Which language is used for Web Apps?",["Java","Python","All","JavaScript"], "All"),
   new Question("The International Literacy Day is observed on?",["Sept 8","Nov 28","May 2","Sept 22"], "Sept 8"),
   new Question("The language of Lakshadweep a Union Territory of India, is?",["Tamil","Hindi","Malayalam","Bengali"], "Malayalam"),
   new Question("Which Batsman Scored Most Number of Double Century in Test Cricket?",["K Sangakara","Brain Lara","Rahul Dravid","Sachin Tendulkar"], "Brain Lara"),
   new Question("Which Batsman is the Top Scorer in IPL?",["Suresh Raina","Ms Dhoni","Virat Kohli","Rohit Sharma"], "Suresh Raina"),
   new Question("Bahubali festival is related to",["Islam","Hinduism","Buddhism","Jainism"], "Jainism"),
   new Question("Who was the Top Scorer of Cricket World Cup 2011?",["Sachin Tendulkar","Tilakaratne Dilshan","Virender Sehwag","Yuvraj Singh"], "Tilakaratne Dilshan"),
   new Question("Which Bowler is the Highest wicket taker in Test Cricket?",["M Murlidharan","S Warne","Anil Kumble","D Vettori"], "M Murlidharan"),
   new Question("Which day is observed as the World Standards  Day?",["14 Oct","28 Oct","13 Jan","27 Dec"], "14 Oct"),
   new Question("Who is the author of the epic 'Meghdoot?",["Vishakadatta","Valmiki","Banabhatta","Kalidas"], "Kalidas"),
   new Question("'Good Friday' is observed to commemorate the event of",["birth of Jesus Christ","birth of' St. Peter","crucification 'of Jesus Christ","rebirth of Jesus Christ"], "crucification 'of Jesus Christ"),
   new Question("Which of the following is observed as Sports Day every year?",["22nd April","26th july","2nd October","29th August"], "29th August"),
   new Question("There are _____ main Components of Object Oriented Programming",["4","2","3","1"],"4"),
   new Question("Pongal is a popular festival of which state?",["Kerala","Tamil Nadu","Karnataka","Andhra Pradesh"], "Tamil Nadu"),
   new Question(" Ghototkach in Mahabharat was the son of",["Yudhishthir","Duryodhana","Bhima","Arjuna"], "Bhima"),
   new Question("MVC is a ______.",["Language","Library","FrameWork","All"], "FrameWork")
];

//creating the objext for the QuizController.

var quiz = new Quiz(questions); 

// Now we need to Call th Function that will just gone a write in this File. 
// That will populate the question and Check our question is correct or not.

populate();