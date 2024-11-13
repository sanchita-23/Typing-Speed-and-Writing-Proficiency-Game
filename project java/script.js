// HTML element references
const sentenceDisplay = document.getElementById("sentence");
const typingInput = document.getElementById("typingInput");
const timerDisplay = document.getElementById("timer");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const mistakesDisplay = document.getElementById("mistakes");
const difficultySelect = document.getElementById("difficulty");

let sentences = {
    easy: [
        "The quick brown fox jumps over the lazy dog.",
        "Practice makes perfect.",
        "Stay focused and improve your speed."
    ],
    medium: [
        "Typing fast requires muscle memory and consistent practice.",
        "Challenges in typing help improve your speed over time.",
        "Reading and typing complex sentences enhances your skills."
    ],
    hard: [
        "The art of typing quickly and accurately requires dedication, focus, and patience.",
        "Increasing difficulty levels allows users to enhance their skills in challenging ways.",
        "Consistent practice with complex sentence structures builds strong typing proficiency."
    ]
};

let currentSentence = "";
let startTime;
let timer;
let typedChars = 0;
let totalMistakes = 0;
let mistakesList = [];  // To store each mistake's index and characters

// Function to start the test
function startTest() {
    resetTest();
    
    // Get the selected difficulty level
    const difficulty = difficultySelect.value;
    const sentenceArray = sentences[difficulty];

    // Choose a random sentence from the selected difficulty level
    currentSentence = sentenceArray[Math.floor(Math.random() * sentenceArray.length)];
    sentenceDisplay.textContent = currentSentence;
    typingInput.value = "";
    typingInput.disabled = false;
    typingInput.focus();
    startTime = new Date();  // Track start time for WPM calculation
    timer = setInterval(updateTimer, 1000);
}

// Function to update the timer every second
function updateTimer() {
    const elapsed = Math.floor((new Date() - startTime) / 1000);
    timerDisplay.textContent = `Time: ${elapsed}s`;
}

// Function to check typing accuracy and mistakes in real-time
function checkTyping() {
    const typedText = typingInput.value;
    typedChars = typedText.length;
    totalMistakes = 0;
    mistakesList = [];  // Clear mistakes list for each input

    // Highlight mistakes and keep track of them
    let highlightedText = "";
    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === currentSentence[i]) {
            highlightedText += typedText[i];
        } else {
            highlightedText += `<span style="color: red;">${typedText[i]}</span>`;
            totalMistakes++;
            mistakesList.push({ index: i, incorrect: typedText[i], correct: currentSentence[i] });
        }
    }
    sentenceDisplay.innerHTML = highlightedText + currentSentence.substring(typedText.length);
    mistakesDisplay.textContent = `Mistakes: ${totalMistakes}`;

    // Update accuracy and WPM
    updateAccuracy();
    updateWPM();
}

// Function to calculate and update WPM based on elapsed time
function updateWPM() {
    const elapsedTime = (new Date() - startTime) / 1000 / 60;  // Convert time to minutes
    const wordsTyped = typedChars / 5;  // Assuming 5 characters per word
    const wpm = Math.round(wordsTyped / elapsedTime);
    wpmDisplay.textContent = `WPM: ${wpm}`;
}

// Function to calculate and update accuracy based on total mistakes
function updateAccuracy() {
    const correctEntries = typedChars - totalMistakes;
    const accuracy = typedChars > 0 ? Math.round((correctEntries / typedChars) * 100) : 0;
    accuracyDisplay.textContent = `Accuracy: ${accuracy}%`;
}

// Function to finish the test manually
function finishTest() {
    clearInterval(timer);  // Stop the timer
    typingInput.disabled = true;  // Disable input
    displayFeedback();  // Show final feedback
}

// Function to display feedback with mistakes, correct answers, and the correct sentence
function displayFeedback() {
    const wpmText = wpmDisplay.textContent;
    const accuracyText = accuracyDisplay.textContent;

    // Array of motivational messages
    const motivationalMessages = [
        "Keep up the great work! You're getting faster and more accurate every day!",
        "Practice makes perfect. You're well on your way to becoming a typing pro!",
        "Mistakes are just stepping stones to success. Keep pushing forward!",
        "Amazing effort! Remember, every keystroke brings you closer to mastery.",
        "Great job! Each test is an opportunity to learn and improve!",
        "You're doing fantastic! Consistency is the key to improvement.",
        "Don't give up! With practice, your skills will only get sharper!",
        "Stay positive and keep typing! You're building a valuable skill!"
    ];

    // Build feedback message
    let feedbackMessage = "Your typing test is complete!\n";
    feedbackMessage += `${wpmText}\n`;
    feedbackMessage += `${accuracyText}\n`;
    feedbackMessage += `Total Mistakes: ${totalMistakes}\n\n`;

    // Show the correct sentence
    feedbackMessage += `Correct Sentence:\n"${currentSentence}"\n\n`;

    // Show each mistake with the correct character
    if (totalMistakes > 0) {
        feedbackMessage += "Mistakes:\n";
        mistakesList.forEach((mistake) => {
            feedbackMessage += `- At position ${mistake.index + 1}: Typed "${mistake.incorrect}", Correct answer: "${mistake.correct}"\n`;
        });
    }

    // Provide additional feedback based on WPM and accuracy
    const wpm = parseInt(wpmText.split(": ")[1]);
    const accuracy = parseInt(accuracyText.split(": ")[1]);

    if (wpm > 40 && accuracy > 80) {
        feedbackMessage += "\nGreat job! You're a fast and accurate typist!";
    } else if (wpm > 40) {
        feedbackMessage += "\nGood speed, but try to improve your accuracy.";
    } else if (accuracy > 80) {
        feedbackMessage += "\nGood accuracy! Try to increase your typing speed.";
    } else {
        feedbackMessage += "\nKeep practicing to improve your speed and accuracy!";
    }

    // Add a random motivational message
    const randomMotivation = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
    feedbackMessage += `\n\n${randomMotivation}`;

    alert(feedbackMessage);
}

// Function to reset the test
function resetTest() {
    clearInterval(timer);
    timerDisplay.textContent = "Time: 0s";
    wpmDisplay.textContent = "WPM: 0";
    accuracyDisplay.textContent = "Accuracy: 0%";
    mistakesDisplay.textContent = "Mistakes: 0";
    typingInput.disabled = true;
    typingInput.value = "";
    sentenceDisplay.innerHTML = "";
    typedChars = 0;
    totalMistakes = 0;
    mistakesList = [];
}
