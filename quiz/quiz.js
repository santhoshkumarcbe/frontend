const questionSize = 5;
const eachQuestionTime = 5;
let time;
let hours = 0, minutes = 0, seconds = 0;

const answersContainer = document.getElementById('answersContainer');


const bodyEl = document.getElementById('quiz-body')
const divEl = document.createElement('div');
const formEl = document.createElement('form');
const inputEl = document.createElement('input');
const hEl = document.createElement('h1');
const h1El = document.createElement('h1');

function randomString(lenString) {
  lenString = lenString === undefined ? 7 : lenString;
  //define a variable consisting alphabets in small and capital letter  
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

  //specify the length for the new string  
  let res = '';

  //loop to select a new character in each iteration  
  for (let i = 0; i < lenString; i++) {
    let rnum = Math.floor(Math.random() * characters.length);
    res += characters.substring(rnum, rnum + 1);
  }

  return res;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function hideEl(tagEl) {
  tagEl.classList.add('hide');
}

function validCheckboxInput() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  let isChecked = false;
  console.log("checkboxes.length : " + checkboxes.length);
  if (checkboxes.length === 0) {
    return true;
  }
  else {

    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        isChecked = true;
        break;
      }
    }

    if (!isChecked) {
      // alert("Please check at least one option.");
      return false;
    }
    return true;

  }
};

function changeCorrectAnswerToGreen() {
  const correctElements = document.querySelectorAll('.label');
  correctElements.forEach(function (correctElement) {
    correctElement.classList.remove('label');
    correctElement.classList.add('green');
  });
}

function handleInput() {
  const formInput = formEl.querySelector('input');

  setTimeout(disableInput(formInput),5000);
 function disableInput(tagEl) {
  tagEl.disabled = true;
 }

  // const formInputs = formEl.querySelectorAll('input[type="radio"]');
  // let valid = true;

  // formInputs.forEach(function (input) {
  //   console.log("input.checkValidity() : " + !input.checkValidity());

    // if (!input.checkValidity()) {
    //   valid = false;
    // }

  // })

  // if (valid && validCheckboxInput()) {
  //   valid = true;
  // }
  // else {
  //   valid = false;
  // }

  // inputEl.disabled = !valid;
  // valid ? inputEl.className = '' : inputEl.className = 'disable';
}

function covertToTime(questionSize) {
  const totalTime = questionSize * eachQuestionTime;
  if (totalTime >= 60) {
    minutes = totalTime / 60;
    seconds = Math.round((minutes - Math.floor(minutes)) * 60);
    minutes = Math.floor(minutes);
    if (minutes >= 60) {
      hours = minutes / 60;
      minutes = Math.round((hours - Math.floor(hours)) * 60);
      hours = Math.floor(hours);
    }
  }
  else {
    seconds = totalTime;
  }
  timeToText(hours, minutes, seconds);
}

function timeToText(hours, minutes, seconds) {
  if (hours < 10) {
    textHour = `${0}${hours}`;
  }
  else {
    textHour = hours;
  }

  if (minutes < 10) {
    textMinutes = `${0}${minutes}`;
  }
  else {
    textMinutes = minutes;
  }

  if (seconds < 10) {
    textSeconds = `${0}${seconds}`;
  }
  else {
    textSeconds = seconds;
  }
  h1El.textContent = `${"Time : "} ${textHour} ${":"} ${textMinutes} ${":"} ${textSeconds} `

}

let textHour = 0, textMinutes = 0, textSeconds = 0;
let start = false;
covertToTime(questionSize);

hEl.textContent = 'Tech quiz';
divEl.appendChild(hEl);
divEl.appendChild(h1El);

const startButton = document.createElement('button');
startButton.innerHTML = 'Start';
divEl.appendChild(startButton);

startButton.addEventListener('click', () => {

  hideEl(startButton);

  const mcqQuestions = [
    // {
    //   question: "HTML program can be read and rendered by ___.",
    //   input_type: "radio",
    //   options: [
    //     { value: "Compiler", is_answer: "false" },
    //     { value: "Server", is_answer: "false" },
    //     { value: "Web Browser", is_answer: "true" }
    //   ]
    // },
    // {
    //   question: "Full form of HTML",
    //   input_type: "radio",
    //   options: [
    //     { value: "Hyper Text Markup Language", is_answer: "true" },
    //     { value: "Home Tool Markup Language", is_answer: "false" },
    //     { value: "Hyperlinks and Text Markup Language", is_answer: "false" },
    //     { value: "Hyper Text Makeup Language", is_answer: "false" }
    //   ]
    // },
    // {
    //   question: "HTML program is saved using ___ extension.",
    //   input_type: "radio",
    //   options: [
    //     { value: ".htmn", is_answer: "false" },
    //     { value: ".html", is_answer: "true" },
    //     { value: ".htnl", is_answer: "false" },
    //     { value: ".js", is_answer: "false" }
    //   ]
    // },
    // {
    //   question: "HTML tags are used to describe document ___.",
    //   input_type: "radio",
    //   options: [
    //     { value: "definition", is_answer: "false" },
    //     { value: "content", is_answer: "true" },
    //     { value: "language", is_answer: "false" }
    //   ]
    // },
    // {
    //   question: "HTML is a set of markup ___.",
    //   input_type: "radio",
    //   options: [
    //     { value: "tags", is_answer: "true" },
    //     { value: "attributes", is_answer: "false" },
    //     { value: "sets", is_answer: "false" }
    //   ]
    // },
    // {
    //   question: "Which is used to create Web Pages?",
    //   input_type: "radio",
    //   options: [
    //     { value: "C++", is_answer: "false" },
    //     { value: "Java", is_answer: "false" },
    //     { value: "HTML", is_answer: "true" }
    //   ]
    // },
    // {
    //   question: "Which tag is used for inserting the largest heading in HTML?",
    //   input_type: "radio",
    //   options: [
    //     { value: "head", is_answer: "false" },
    //     { value: "<h1>", is_answer: "true" },
    //     { value: "<h6>", is_answer: "false" },
    //     { value: "<h3>", is_answer: "false" }
    //   ]
    // },
    // {
    //   question: "Which is used to read an HTML page and render it?",
    //   input_type: "radio",
    //   options: [
    //     { value: "Web server", is_answer: "false" },
    //     { value: "Web network", is_answer: "false" },
    //     { value: "Web browser", is_answer: "true" },
    //     { value: "router", is_answer: "false" }
    //   ]
    // },
    {
      question: "Who is the father of HTML?",
      input_type: "radio",
      options: [
        { value: "Tim Berners-Lee", is_answer: "true" },
        { value: "Brendan Eich", is_answer: "false" },
        { value: "Sergey Brin", is_answer: "false" },
        { value: "Charles Babage", is_answer: "false" }
      ]
    },
    {
      question: "What do you understand by HTML?",
      input_type: "checkbox",
      options: [
        { value: "HTML describes the structure of a webpage", is_answer: "true" },
        { value: "HTML consists of a set of elements that help the browser how to view the content", is_answer: "true" },
        { value: "HTML elements can have attributes that provide additional information about the element", is_answer: "true" },
        { value: "All of the above", is_answer: "false" }
      ]
    },
    {
      question: 'Which planet is known as the "Red Planet"?',
      input_type: "select-one",
      options: [
        { value: "Mars", is_answer: "true" },
        { value: "Venus", is_answer: "false" },
        { value: "Jupiter", is_answer: "false" },
        { value: "Mercury", is_answer: "false" }
      ]
    },
    // {
    //   question: 'Who painted the famous artwork "Starry Night"?',
    //   input_type: "radio",
    //   options: [
    //     { value: "Vincent van Gogh", is_answer: "true" },
    //     { value: "Pablo Picasso", is_answer: "false" },
    //     { value: "Leonardo da Vinci", is_answer: "false" },
    //     { value: "Michelangelo", is_answer: "false" }
    //   ]
    // },
    // {
    //   question: 'What is the currency of Japan?',
    //   input_type: "radio",
    //   options: [
    //     { value: "Yen", is_answer: "true" },
    //     { value: "Won", is_answer: "false" },
    //     { value: "Dollar", is_answer: "false" },
    //     { value: "Euro", is_answer: "false" }
    //   ]
    // },
    // {
    //   question: 'Which scientist formulated the theory of relativity?',
    //   input_type: "radio",
    //   options: [
    //     { value: "Isaac Newton", is_answer: "false" },
    //     { value: "Albert Einstein", is_answer: "true" },
    //     { value: "Stephen Hawking", is_answer: "false" },
    //     { value: "Galileo Galilei", is_answer: "false" }
    //   ]
    // },
    // {
    //   question: 'What is the national flower of India?',
    //   input_type: "radio",
    //   options: [
    //     { value: "Rose", is_answer: "false" },
    //     { value: "Lotus", is_answer: "true" },
    //     { value: "Tulip", is_answer: "false" },
    //     { value: "Sunflower", is_answer: "false" }
    //   ]
    // },
    // {
    //   question: 'Who wrote "The Catcher in the Rye"?',
    //   input_type: "radio",
    //   options: [
    //     { value: "J.D. Salinger", is_answer: "true" },
    //     { value: "George Orwell", is_answer: "false" },
    //     { value: "Mark Twain", is_answer: "false" },
    //     { value: "Herman Melville", is_answer: "false" }
    //   ]
    // },
    // {
    //   question: 'In which year did the first manned moon landing occur?',
    //   input_type: "radio",
    //   options: [
    //     { value: "1969", is_answer: "true" },
    //     { value: "1972", is_answer: "false" },
    //     { value: "1957", is_answer: "false" },
    //     { value: "1985", is_answer: "false" }
    //   ]
    // },
    // {
    //   question: 'Who is the author of "Pride and Prejudice"?',
    //   input_type: "radio",
    //   options: [
    //     { value: "Jane Austen", is_answer: "true" },
    //     { value: "Emily Brontë", is_answer: "false" },
    //     { value: "Charlotte Brontë", is_answer: "false" },
    //     { value: "Charles Dickens", is_answer: "false" }
    //   ]
    // },
    // {
    //   question: 'What is the largest ocean on Earth?',
    //   input_type: "radio",
    //   options: [
    //     { value: "Pacific Ocean", is_answer: "true" },
    //     { value: "Atlantic Ocean", is_answer: "false" },
    //     { value: "Indian Ocean", is_answer: "false" },
    //     { value: "Arctic Ocean", is_answer: "false" }
    //   ]
    // },
    // {
    //   question: 'Who is known as the "Iron Lady"?',
    //   input_type: "radio",
    //   options: [
    //     { value: "Margaret Thatcher", is_answer: "true" },
    //     { value: "Angela Merkel", is_answer: "false" },
    //     { value: "Hillary Clinton", is_answer: "false" },
    //     { value: "Indira Gandhi", is_answer: "false" }
    //   ]
    // },
    // {
    //   question: 'What is the smallest prime number?',
    //   input_type: "radio",
    //   options: [
    //     { value: "2", is_answer: "true" },
    //     { value: "3", is_answer: "false" },
    //     { value: "1", is_answer: "false" },
    //     { value: "5", is_answer: "false" }
    //   ]
    // },
    // {
    //   question: 'Who discovered penicillin?',
    //   input_type: "radio",
    //   options: [
    //     { value: "Alexander Fleming", is_answer: "true" },
    //     { value: "Marie Curie", is_answer: "false" },
    //     { value: "Louis Pasteur", is_answer: "false" },
    //     { value: "Joseph Lister", is_answer: "false" }
    //   ]
    // },
    // {
    //   question: 'What is the capital city of Brazil?',
    //   input_type: "radio",
    //   options: [
    //     { value: "Rio de Janeiro", is_answer: "false" },
    //     { value: "Brasília", is_answer: "true" },
    //     { value: "Sao Paulo", is_answer: "false" },
    //     { value: "Buenos Aires", is_answer: "false" }
    //   ]
    // },
    // {
    //   question: 'Who wrote "The Adventures of Sherlock Holmes"?',
    //   input_type: "radio",
    //   options: [
    //     { value: "Arthur Conan Doyle", is_answer: "true" },
    //     { value: "Agatha Christie", is_answer: "false" },
    //     { value: "Daphne du Maurier", is_answer: "false" },
    //     { value: "J.K. Rowling", is_answer: "false" }
    //   ]
    // },
    // {
    //   question: 'Which planet is known as the "Blue Planet"?',
    //   input_type: "radio",
    //   options: [
    //     { value: "Earth", is_answer: "true" },
    //     { value: "Mars", is_answer: "false" },
    //     { value: "Venus", is_answer: "false" },
    //     { value: "Neptune", is_answer: "false" }
    //   ]
    // },
    // {
    //   question: 'In which year did the Titanic sink?',
    //   input_type: "radio",
    //   options: [
    //     { value: "1912", is_answer: "true" },
    //     { value: "1905", is_answer: "false" },
    //     { value: "1920", is_answer: "false" },
    //     { value: "1915", is_answer: "false" }
    //   ]
    // },
    {
      question: 'Who is the author of "The Catcher in the Rye"?',
      input_type: "radio",
      options: [
        { value: "J.D. Salinger", is_answer: "true" },
        { value: "F. Scott Fitzgerald", is_answer: "false" },
        { value: "Ernest Hemingway", is_answer: "false" },
        { value: "Mark Twain", is_answer: "false" }
      ]
    },
    {
      question: 'What is the currency of China?',
      input_type: "radio",
      options: [
        { value: "Yuan", is_answer: "true" },
        { value: "Yen", is_answer: "false" },
        { value: "Rupee", is_answer: "false" },
        { value: "Dollar", is_answer: "false" }
      ]
    }
  ];

  const shuffledMcqQuestions = mcqQuestions;
  shuffleArray(shuffledMcqQuestions);

  for (let index = 0; index < questionSize; index++) {
    const mcqQuestion = shuffledMcqQuestions[index];
    const pEl = document.createElement('p');
    pEl.textContent = `${index + 1}${'. '} ${mcqQuestion.question}`;
    formEl.appendChild(pEl);

    for (let index1 = 0; index1 < mcqQuestion.options.length; index1++) {
      const id = randomString(5);

      const inputEl = document.createElement('input');
      inputEl.required = 'required';
      inputEl.id = id;

      inputEl.type = mcqQuestion.input_type;
      // let optionsCount = 0;
      // mcqQuestion.options.forEach(function (option) {
      //   if (option.is_answer === "true") {
      //     optionsCount++;
      //   }
      // });

      // inputEl.type = 'radio';
      // if (optionsCount > 1) {
      //   inputEl.type = 'checkbox';
      //   inputEl.required = '';
      // }
      inputEl.name = index;
      inputEl.value = mcqQuestion.options[index1].value;

      const labelEl = document.createElement('label');
      labelEl.setAttribute("for", id);
      labelEl.textContent = mcqQuestion.options[index1].value;

      if (mcqQuestion.options[index1].is_answer === "true") {
        labelEl.setAttribute('class', 'label');
      }
      formEl.appendChild(inputEl);

      formEl.appendChild(labelEl);
    }

    const brEl = document.createElement('br');
    formEl.appendChild(brEl);
  }

  inputEl.type = 'submit';
  inputEl.value = 'Submit';
  inputEl.disabled = true;
  inputEl.className = 'disable';
  formEl.appendChild(inputEl);

  const pEl = document.createElement('p');

  const reStartEl = document.createElement('button');
  reStartEl.type = 'button';
  reStartEl.innerHTML = 'Restart';
  reStartEl.id = 'restart';
  formEl.addEventListener('input', handleInput);

  function validateFormAns() {
    let userScore = 0;
  
    formEl.removeEventListener('input', handleInput)
    // changeCorrectAnswerToGreen();
    inputEl.disabled = "disabled";
    inputEl.className = 'disable';
    clearInterval(time);
    // const formData = new FormData(formEl);
    // answersContainer.innerHTML = ''; // Clear previous answers

    shuffledMcqQuestions.slice(0, questionSize).forEach((questionData, index) => {
      const inputType = questionData.input_type;
      const input = document.querySelector(`[name="${index}"]:checked`);

      console.log(`Question ${index + 1}: Input type - ${inputType}, Input element -`, input);
      if (input != null) {
        if (inputType === 'checkbox' || inputType === 'radio') {
          console.log("radio"+input);
          handleCheckboxRadioInput(input, questionData);
        } else if (inputType === 'select-one') {
          console.log("select-one"+input);
          handleSelectOneInput(input, questionData);
        } else if (inputType === 'select-multiple') {
          handleSelectMultipleInput(input, questionData);
        } else if (inputType === 'text') {
          handleTextInput(input, questionData);
        }
      }
    });

    // Display user's score
    // displayScore();

    // const inputs = document.querySelectorAll('input, select');
    // inputs.forEach((input, index) => {
    //   const userAnswer = getSelectedValue(input);
    //   const shuffledMcqQuestion = shuffledMcqQuestions[index];

    //   if (Array.isArray(userAnswer)) {
    //     if (arraysEqual(userAnswer, shuffledMcqQuestion.correctAnswer)) {
    //       highlightInput(input, 'correct');
    //     } else {
    //       highlightInput(input, 'incorrect');
    //       showCorrectAnswer(answersContainer, questionData.correctAnswer, shuffledMcqQuestion.explanation);
    //     }
    //   } else {
    //     if (userAnswer === questionData.correctAnswer) {
    //       highlightInput(input, 'correct');
    //     } else {
    //       highlightInput(input, 'incorrect');
    //       showCorrectAnswer(answersContainer, questionData.correctAnswer, questionData.explanation);
    //     }
    //   }
    // });



    // console.log(formData);
    // let inputValues = [];
    // formData.forEach(function (value, key) {
    //   console.log(value, key);
    //   let options = shuffledMcqQuestions[key].options;
    //   multipleAnswerCount = 0
    //   options.forEach(function (option) {
    //     if (option.is_answer == "true") {
    //       multipleAnswerCount++;
    //     }

    //     // console.log("option : " + option.is_answer);


    //   })
    //   // console.log("multipleAnswerCount : " + multipleAnswerCount);
    //   if (multipleAnswerCount > 1) {
    //     let answers = [];
    //     inputValues.push(value);
    //     console.log("inputValues : " + inputValues);

    //     for (let index = 0; index < options.length; index++) {
    //       if (options[index].is_answer === "true") {
    //         answers.push(options[index].value);
    //         console.log("answers [] " + answers);

    //       }
    //     }

    //     if (JSON.stringify(inputValues) === JSON.stringify(answers)) {
    //       marks += 1;
    //       // console.log(`${'marks'} ${marks}`);
    //     }

    //   }
    //   else {
    //     let answer;
    //     for (let index = 0; index < options.length; index++) {
    //       if (options[index].is_answer === "true") {
    //         answer = options[index].value;
    //         // console.log("answer " + answer);
    //       }
    //     }
    //     if (value === answer) {
    //       marks += 1;
    //       // console.log(`${'marks'} ${marks}`);
    //     }
    //   }
    // })

    pEl.textContent = `${"Your Score : "} ${userScore} ${'/'} ${questionSize}`;



    function handleCheckboxRadioInput(input, questionData) {
      console.log('Input element:', input);
      const userAnswer = getSelectedValue(input);
      console.log(userAnswer);
      const correctAnswers = questionData.options.filter(option => option.is_answer === "true").map(option => option.value);

      const checkedInputs = document.querySelectorAll(`[name="${input.name}"]:checked`)
      
      // console.log("checkedInputs" +checkedInputs);

      if (arraysEqual(userAnswer, correctAnswers)) {
        checkedInputs.forEach(input => {
          console.log(input);
        highlightInput(input, 'correct');
        })
        // highlightInput(checkedInputs, 'correct');
        incrementScore();
      } else {
        checkedInputs.forEach(input => {
          console.log(input);
        highlightInput(input, 'incorrect');
        })
        // highlightInput(checkedInputs, 'incorrect');
        showCorrectAnswer(answersContainer, correctAnswers);
      }
    }

    function handleSelectOneInput(input, questionData) {
      const userAnswer = getSelectedValue(input);
      const correctAnswer = questionData.options.find(option => option.is_answer === "true").value;

      if (userAnswer === correctAnswer) {
        highlightInput(input, 'correct');
        incrementScore();
      } else {
        highlightInput(input, 'incorrect');
        showCorrectAnswer(answersContainer, correctAnswer);
      }
    }

    function handleSelectMultipleInput(input, questionData) {
      const userAnswer = getSelectedValue(input);
      const correctAnswers = questionData.options.filter(option => option.is_answer === "true").map(option => option.value);

      if (arraysEqual(userAnswer, correctAnswers)) {
        highlightInput(input, 'correct');
        incrementScore();
      } else {
        highlightInput(input, 'incorrect');
        showCorrectAnswer(answersContainer, correctAnswers);
      }
    }

    function handleTextInput(input, questionData) {
      const userAnswer = getSelectedValue(input);
      const correctAnswer = questionData.options.find(option => option.is_answer === "true").value;

      if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        highlightInput(input, 'correct');
        incrementScore();
      } else {
        highlightInput(input, 'incorrect');
        showCorrectAnswer(answersContainer, correctAnswer);
      }
    }

    function getSelectedValue(input) {
      if (input.type === 'radio' || input.type === 'checkbox') {
        return Array.from(document.querySelectorAll(`[name="${input.name}"]:checked`)).map(checked => checked.value);
      } else if (input.tagName === 'SELECT') {
        const selectedOptions = Array.from(input.options).filter(option => option.selected);
        return selectedOptions.map(option => option.value);
      } else {
        // For text input
        return input.value;
      }
    }

    function incrementScore() {
      userScore++;
    }

    // function displayScore() {
    //   const scoreContainer = document.getElementById('scoreContainer');
    //   scoreContainer.textContent = `Your Score: ${userScore}`;
    // }

    function highlightInput(input, result) {
      // Remove any previous highlighting classes from all labels

  const labels = document.querySelectorAll(`label[for="${input.id}"]`);

  labels.forEach(label => label.classList.add('correct'));

  console.log(labels);

  // Apply the appropriate class based on the result to each label
  const userAnswer = getSelectedValue(input);
  labels.forEach(label => {
    userAnswer.forEach(answer => {
      // const label = document.querySelector(`label[for="${input.id}"][value="${answer}"]`);
      if (label.innerHTML == answer) {
        label.classList.add(result);
      }
    });
  })
    }

    function showCorrectAnswer(container, correctAnswers) {
      const answerDiv = document.createElement('div');
      answerDiv.innerHTML = `<p>Correct answer(s): ${correctAnswers.join(', ')}</p>`;
      console.log(answerDiv.innerHTML);
    }

    function arraysEqual(arr1, arr2) {
      return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
    }

    const formInputs = formEl.querySelectorAll('input, select, textarea, button');

    formInputs.forEach(input => {
      input.disabled = true;
    });

  }

  function submitForm() {
    // e.preventDefault();
    validateFormAns();
    formEl.appendChild(pEl);
    formEl.appendChild(reStartEl);
    divEl.appendChild(formEl);
    bodyEl.appendChild(divEl);
  }

  formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    submitForm();
  })
  time = setInterval(() => {
    seconds--;
    if (seconds < 0) {
      if (minutes > 0) {
        seconds = 59;
        minutes--;
      }
      else {
        if (hours > 0) {
          minutes = 60;
          hours--;
        }
      }
    }
    else if (seconds === 0 && minutes === 0 && hours === 0) {
      submitForm();
      clearInterval(time);
    }
    timeToText(hours, minutes, seconds);
  }, 1000);

  divEl.appendChild(h1El);
  bodyEl.appendChild(divEl);

  reStartEl.addEventListener('click', () => {
    location.reload();
  })
  divEl.appendChild(formEl);
})

bodyEl.appendChild(divEl);



