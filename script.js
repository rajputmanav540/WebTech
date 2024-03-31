console.log("Script loaded!");

const questions = [
    {
        question: "What is the difference between Internet, Intranet, and Extranet?",
        answers: [
            { text: "Internet is a global network of interconnected computers, Intranet is a private network within an organization, and Extranet is a controlled extension of an organization's network to outside users.", correct: true,  explanation: "This is the correct definition of Internet, Intranet, and Extranet."   },
            { text: "Internet is a private network within an organization, Intranet is a global network of interconnected computers, and Extranet is a controlled extension of an organization's network to outside users.", correct: false },
            { text: "Internet is a controlled extension of an organization's network to outside users, Intranet is a global network of interconnected computers, and Extranet is a private network within an organization.", correct: false },
            { text: "Internet is exclusively for governmental use, Intranet is a global network of interconnected computers, and Extranet is a controlled extension of an organization's network to outside users.", correct: false },
        ]
    },
    {
        question: "What is the role of web servers in the context of web development?",
        answers: [
            { text: "To manage databases.", correct: false },
            { text: "To execute client-side scripts on the server.", correct: false },
            { text: "To serve web pages and other content to clients over HTTP.", correct: true,  explanation: "Correct! Web servers are responsible for delivering web content, including HTML pages, images, scripts, and more, to clients (such as web browsers) over the Hypertext Transfer Protocol (HTTP). "},
            { text: "To provide a graphical interface for web development.", correct: false },
        ]
    },
    {
        question: "What is the purpose of W3C Validation service?",
        answers: [
            { text: "To check if a website is accessible to users with disabilities.", correct: false },
            { text: "To validate HTML code against W3C standards and ensure it is syntactically correct.", correct: true , explanation: "Correct! The W3C Validation service is used to check HTML code against standards set by the World Wide Web Consortium (W3C) to ensure it follows best practices and is syntactically correct."},
            { text: "To optimize website performance for search engines.", correct: false },
            { text: "To validate CSS code against W3C standards and ensure it is syntactically correct.", correct: false },
        ]
    },
    {
        question: "What are meta tags used for in HTML?",
        answers: [
            { text: "To define the structure of a web page.", correct: false },
            { text: "To specify the character encoding of a web page.", correct: false },
            { text: "To provide information about the web page such as author, description, and keywords.", correct: true , explanation: "Meta tags in HTML are used to provide metadata about the HTML document, such as its author, description, keywords, and other information. This metadata is used by search engines, browsers, and other web services to better understand and index the content of the web page."},
            { text: "To embed multimedia content like images and videos.", correct: false },
        ]
    },
    {
        question: "What are the different types of CSS selectors?",
        answers: [
            { text: "Universal, Element, Class, ID", correct: true , explanation:" CSS selectors are patterns used to select and style elements in an HTML document. The universal selector (*) selects all elements, the element selector selects elements based on their element type (e.g., div, p, a), the class selector selects elements with a specific class attribute, and the ID selector selects elements with a specific ID attribute. These selectors provide flexibility in styling HTML elements."},
            { text: "Universal, Group, ID, Attribute", correct: false },
            { text: "Element, Class, ID, Group", correct: false },
            { text: "Universal, Group, Attribute, Pseudo-class", correct: false },
        ]
    },
    {
        question: "What is the CSS Box Model?",
        answers: [
            { text: "A model for designing 3D shapes using CSS.", correct: false },
            { text: "A way to organize CSS files into boxes for easier management.", correct: false },
            { text: "A model that describes how elements are rendered on a web page, including their content, padding, border, and margin.", correct: true ,explanation: "The CSS Box Model is a fundamental concept in CSS that describes the layout of elements on a web page. It consists of the content area, padding, border, and margin of an element. Understanding the Box Model is essential for accurately positioning and styling elements on a web page."},
            { text: "A framework for responsive design using CSS.", correct: false },
        ]
    },
    {
        question: "What is the purpose of CSS Positioning (relative, absolute, and fixed)?",
        answers: [
            { text: "To align text within an element.", correct: false },
            { text: "To control the visibility of elements on a web page.", correct: false },
            { text: "To specify the layout and placement of elements relative to their containing element or the browser window.", correct: true , explanation: "CSS positioning allows developers to precisely control the placement of elements on a web page. Relative positioning positions an element relative to its normal position, absolute positioning positions an element relative to its nearest positioned ancestor, and fixed positioning positions an element relative to the browser window. These positioning techniques are commonly used in web development for layout design." },
            { text: "To animate elements using CSS transitions.", correct: false },
        ]
    },
    {
        question: "What does responsive design with CSS aim to achieve?",
        answers: [
            { text: "To create websites that respond to user input only.", correct: false },
            { text: "To design websites that respond to screen size and device orientation, providing an optimal viewing experience across devices.", correct: true ,explanation: "Responsive design aims to create websites that adapt and respond to various screen sizes and device orientations. By using CSS media queries and flexible layout techniques, responsive design ensures that websites look and function well on desktops, laptops, tablets, and smartphones, providing users with an optimal viewing experience regardless of the device they're using."},
            { text: "To optimize website performance for search engines.", correct: false },
            { text: "To implement secure authentication services for users.", correct: false },
        ]
    },
    {
        question: "What are the basic data types in JavaScript?",
        answers: [
            { text: "Integer, Float, String, Boolean, Object, Array", correct: false },
            { text: "Number, String, Boolean, Object, Null, Undefined", correct: true,explanation: "JavaScript supports several basic data types, including numbers (both integers and floating-point numbers), strings (sequences of characters), booleans (true/false values), objects (complex data structures), null (represents the absence of a value), and undefined (indicates a variable that has been declared but not assigned a value). Understanding these data types is essential for writing JavaScript code." },
            { text: "Integer, Float, Character, Boolean, Object, Array", correct: false },
            { text: "Number, String, Boolean, Object, Array, Undefined", correct: false },
        ]
    },
    {
        question: "How do you enable JavaScript in a web browser?",
        answers: [
            { text: "By installing a JavaScript plugin.", correct: false },
            { text: "By configuring settings in the browser's options menu.", correct: false },
            { text: "JavaScript is enabled by default in most modern web browsers.", correct: true ,explanation: "Most modern web browsers come with JavaScript enabled by default. This means that JavaScript code embedded in web pages will be executed without requiring any additional configuration from the user. JavaScript can also be enabled or disabled manually in browser settings, but it's typically enabled by default for optimal web browsing experience."},
            { text: "By including a <script> tag in the HTML document linking to a JavaScript file.", correct: false },
        ]
    },
    {
        question: "What is the purpose of form validation in JavaScript?",
        answers: [
            { text: "To automatically generate HTML forms based on user input.", correct: false },
            { text: "To ensure that user input in HTML forms meets specified criteria before submitting data to a server.", correct: true , explanation: "Form validation in JavaScript is used to validate user input entered into HTML forms before submitting the data to a server. It helps ensure that the data submitted by the user meets specified criteria, such as required fields, proper formatting, and valid values. Form validation helps improve the overall user experience by preventing errors and ensuring data integrity."},
            { text: "To encrypt sensitive user data before transmission.", correct: false },
            { text: "To optimize database queries for faster data retrieval.", correct: false },
        ]
    },
    {
        question: "How do you define an array in JavaScript?",
        answers: [
            { text: "var myArray = {1, 2, 3};", correct: false },
            { text: "var myArray = [1, 2, 3];", correct: true, explanation: "In JavaScript, arrays are defined using square brackets ([]) and can contain a list of values separated by commas. The correct syntax for defining an array is to use square brackets with the values enclosed inside. This creates an array with the specified elements, which can be accessed and manipulated using array methods and properties." },
            { text: "array myArray = [1, 2, 3];", correct: false },
            { text: "array myArray = {1, 2, 3};", correct: false },
        ]
    },
    {
        question: "What is the purpose of event handling in JavaScript?",
        answers: [
            { text: "To manipulate the appearance of HTML elements.", correct: false },
            { text: "To dynamically generate HTML content based on user actions.", correct: false },
            { text: "To respond to user interactions with a web page, such as clicks, mouse movements, and keyboard input.", correct: true, explanation: "Event handling in JavaScript allows developers to write code that responds to user interactions with a web page, such as clicking on elements, moving the mouse, typing on the keyboard, and more. By attaching event listeners to HTML elements, developers can execute JavaScript code in response to specific events, enabling dynamic and interactive web experiences."},
            { text: "To execute server-side scripts in response to client requests.", correct: false },
        ]
    }
];
const questionElement= document.getElementById("question");
const answerButton= document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currQuestionIndex=0;
let score=0;

function startQuiz()
{
    currQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion()
{
    resetState();
    let currQuestion=questions[currQuestionIndex];
    let questionNo=currQuestionIndex+1;
    questionElement.innerHTML=questionNo+"."+currQuestion.question;

    currQuestion.answers.forEach(answer=>{const button=document.createElement('button');
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectAnswer);
});
}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=> 
        {if(button.dataset.correct==="true"){
            button.classList.add("correct");
    }
    button.disabled=true;
})
nextButton.style.display="block";
}

function showCorrectAnswers() {
    resetState();
    questionElement.innerHTML = "Correct Answers:";
    questions.forEach((question, index) => {
        const correctAnswer = question.answers.find(answer => answer.correct);
        const answerText = `${index + 1}. ${question.question} - ${correctAnswer.text}`;
        const explanationText = correctAnswer.explanation;
        const answerDiv = document.createElement('div');
        answerDiv.textContent = answerText;
        answerDiv.classList.add('correct-answer');
        questionElement.appendChild(answerDiv);
        if (explanationText) {
            const explanationDiv = document.createElement('div');
            explanationDiv.textContent = `Explanation: ${explanationText}`;
            questionElement.appendChild(explanationDiv);
        }
        // Add line gap after each correct answer
        const lineGap = document.createElement('div');
        lineGap.classList.add('line-gap');
        questionElement.appendChild(lineGap);
    });
    nextButton.style.display = "none";
}


function showScore() {
    resetState();
    const scoreText = `Your score is ${score} out of ${questions.length}!!`;
    questionElement.innerHTML = scoreText;
    const showCorrectBtn = document.createElement('button');
    showCorrectBtn.textContent = "Show Correct Answers";
    showCorrectBtn.classList.add('btn');
    showCorrectBtn.addEventListener("click", showCorrectAnswers);
    answerButton.appendChild(showCorrectBtn);
}

function handleNextButton(){
    currQuestionIndex++;
    if(currQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }

}


nextButton.addEventListener("click",()=>{
    if(currQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();