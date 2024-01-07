// Массив объектов с вопросами и ответами
const questions = [
    {
        question: "Вопрос 1",
        answers: ["Ответ 1", "Ответ 2", "Ответ 3", "Ответ 4", "Ответ 5"],
        correct: 0 // Индекс правильного ответа
    },
    // ... Добавьте остальные вопросы аналогично
];

// Функция для создания теста
function createTest() {
    const testContainer = document.getElementById('test-container');

    questions.forEach((item, questionIndex) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        const questionTitle = document.createElement('h3');
        questionTitle.innerText = item.question;
        questionElement.appendChild(questionTitle);

        const answersList = document.createElement('ul');

        item.answers.forEach((answer, answerIndex) => {
            const answerItem = document.createElement('li');

            const answerInput = document.createElement('input');
            answerInput.setAttribute('type', 'radio');
            answerInput.setAttribute('name', `question${questionIndex}`);
            answerInput.setAttribute('id', `question${questionIndex}_answer${answerIndex}`);
            answerInput.dataset.correct = answerIndex === item.correct;
            answerInput.onclick = handleAnswerClick;

            const answerLabel = document.createElement('label');
            answerLabel.setAttribute('for', `question${questionIndex}_answer${answerIndex}`);
            answerLabel.innerText = answer;

            answerItem.appendChild(answerInput);
            answerItem.appendChild(answerLabel);

            answersList.appendChild(answerItem);
        });

        questionElement.appendChild(answersList);
        testContainer.appendChild(questionElement);
    });

    const resultButton = document.createElement('button');
    resultButton.innerText = 'Получить результат';
    resultButton.onclick = showResults;

    testContainer.appendChild(resultButton);

    const resultDisplay = document.createElement('div');
    resultDisplay.id = 'result';
    testContainer.appendChild(resultDisplay);
}

// Обработчик клика по ответу
function handleAnswerClick(event) {
    const selectedAnswer = event.target;
    const isCorrect = selectedAnswer.dataset.correct === 'true';

    selectedAnswer.parentElement.style.backgroundColor = isCorrect ? 'lightgreen' : 'red';
}

// Функция для отображения результатов
function showResults() {
    let correctAnswers = 0;
    let totalQuestions = questions.length;

    questions.forEach((item, questionIndex) => {
        const answers = document.getElementsByName(`question${questionIndex}`);
        answers.forEach(answer => {
            if (answer.checked && answer.dataset.correct === 'true') {
                correctAnswers++;
            }
        });
    });

    const resultDisplay = document.getElementById('result');
    resultDisplay.innerText = `Правильных ответов: ${correctAnswers} из ${totalQuestions}`;
}

// Вызываем функцию при загрузке страницы
window.onload = createTest;
