const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            {text: "Sydney", correct: false},
            {text: "Paris", correct: true},
            {text: "London", correct: false},
            {text: "Berlin", correct: false},

        ],
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            {text: "Jupiter", correct: true},
            {text: "Saturn", correct: false},
            {text: "Neptune", correct: false},
            {text: "Uranus", correct: false}
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            {text: "William Shakespeare", correct: true},
            {text: "Jane Austen", correct: false},
            {text: "Charles Dickens", correct: false},
            {text: "Leo Tolstoy", correct: false}
        ]
    },
    {
        question: "Which chemical element has the symbol 'Fe'?",
        answers: [
            {text: "Iron", correct: true},
            {text: "Gold", correct: false},
            {text: "Silver", correct: false},
            {text: "Copper", correct: false}
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answers: [
            {text: "1912", correct: true},
            {text: "1905", correct: false},
            {text: "1923", correct: false},
            {text: "1931", correct: false}
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            {text: "Leonardo da Vinci", correct: true},
            {text: "Vincent van Gogh", correct: false},
            {text: "Pablo Picasso", correct: false},
            {text: "Michelangelo", correct: false}
        ]
    },
    {
        question: "What is the smallest bone in the human body?",
        answers: [
            {text: "Stapes (in the ear)", correct: true},
            {text: "Femur", correct: false},
            {text: "Skull", correct: false},
            {text: "Rib", correct: false}
        ]
    },
    {
        question: "Who developed the theory of relativity?",
        answers: [
            {text: "Albert Einstein", correct: true},
            {text: "Isaac Newton", correct: false},
            {text: "Galileo Galilei", correct: false},
            {text: "Stephen Hawking", correct: false}
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            {text: "Canberra", correct: true},
            {text: "Sydney", correct: false},
            {text: "Melbourne", correct: false},
            {text: "Brisbane", correct: false}
        ]
    },
    {
        question: "Who is known as the 'Father of Computer Science'?",
        answers: [
            {text: "Alan Turing", correct: true},
            {text: "Charles Babbage", correct: false},
            {text: "Tim Berners-Lee", correct: false},
            {text: "Bill Gates", correct: false}
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            {text: "Yen", correct: true},
            {text: "Dollar", correct: false},
            {text: "Euro", correct: false},
            {text: "Pound", correct: false}
        ]
    },
    {
        question: "Who wrote 'Harry Potter'?",
        answers: [
            {text: "J.K. Rowling", correct: true},
            {text: "J.R.R. Tolkien", correct: false},
            {text: "C.S. Lewis", correct: false},
            {text: "George R.R. Martin", correct: false}
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            {text: "H₂O", correct: true},
            {text: "CO₂", correct: false},
            {text: "O₂", correct: false},
            {text: "NaCl", correct: false}
        ]
    },
    {
        question: "Which country is famous for its tulips?",
        answers: [
            {text: "Netherlands", correct: true},
            {text: "Denmark", correct: false},
            {text: "Belgium", correct: false},
            {text: "Switzerland", correct: false}
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
            {text: "Polar bear", correct: false}
        ]
    },
    {
        question: "Who discovered penicillin?",
        answers: [
            {text: "Alexander Fleming", correct: true},
            {text: "Marie Curie", correct: false},
            {text: "Louis Pasteur", correct: false},
            {text: "Antoine Lavoisier", correct: false}
        ]
    },
    {
        question: "What is the main ingredient in guacamole?",
        answers: [
            {text: "Avocado", correct: true},
            {text: "Tomato", correct: false},
            {text: "Onion", correct: false},
            {text: "Lime", correct: false}
        ]
    },
    {
        question: "Who is the author of 'The Great Gatsby'?",
        answers: [
            {text: "F. Scott Fitzgerald", correct: true},
            {text: "Ernest Hemingway", correct: false},
            {text: "Mark Twain", correct: false},
            {text: "William Faulkner", correct: false}
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            {text: "Mars", correct: true},
            {text: "Venus", correct: false},
            {text: "Jupiter", correct: false},
            {text: "Mercury", correct: false}
        ]
    },
    {
        question: "Who painted 'The Starry Night'?",
        answers: [
            {text: "Vincent van Gogh", correct: true},
            {text: "Pablo Picasso", correct: false},
            {text: "Claude Monet", correct: false},
            {text: "Leonardo da Vinci", correct: false}
        ]
    },
    {
        question: "What is the capital of Brazil?",
        answers: [
            {text: "Brasília", correct: true},
            {text: "Rio de Janeiro", correct: false},
            {text: "São Paulo", correct: false},
            {text: "Salvador", correct: false}
        ]
    },
    {
        question: "Who wrote '1984'?",
        answers: [
            {text: "George Orwell", correct: true},
            {text: "Aldous Huxley", correct: false},
            {text: "Ray Bradbury", correct: false},
            {text: "Jules Verne", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>
        {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct
            }
            button.addEventListener("click", selectAnswer);

        }
    );
}

function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        }else{
            showScore();
        }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();

    }
    
})

startQuiz();
