Typing-Speed-and-Writing-Proficiency-Game

This game offers a platform to improve typing speed, writing skills, and vocabulary. Users will be presented with a variety of challenges designed to enhance their typing proficiency while developing language skills, including grammar, sentence structure, and vocabulary usage.

Section 1: Project Description

Goal:

The Typing Speed and Writing Proficiency Game aims to provide an engaging way for users to improve their typing speed, accuracy, and writing skills. Unlike traditional typing games that focus solely on speed, this game also emphasizes vocabulary building, grammar correctness, and sentence construction. It is designed for individual players looking to enhance both typing and language skills.

Core Objective:

Typing Speed Test: Measures typing speed and accuracy with sentences and paragraphs.

Writing Proficiency Test: Improves writing skills by introducing vocabulary, grammar, and sentence construction challenges.

Vocabulary Challenge: Expands vocabulary by introducing new words and testing correct spelling and usage.

Problem to Solve: Many typing games lack components that help users improve writing proficiency. This game integrates exercises on vocabulary, grammar, and sentence building, making it a comprehensive tool for language development alongside typing speed improvement.

Section 2: Overview

Features:

Typing Speed Test: Tests users on their typing speed and accuracy with sentences of increasing complexity.

Writing Proficiency Test: Offers sentence structuring and grammar correction tasks to strengthen users' writing.

Vocabulary Challenges: Encourages users to learn and use new vocabulary, enhancing language fluency.

Scoring System: Tracks and scores users based on typing speed, accuracy, grammar, and vocabulary usage.

Progress Tracking: Shows improvement over time for motivation and skill-building.


Scope of the Game:

Included Features:

Typing speed tests with sentences and paragraphs.
Writing challenges focused on grammar, vocabulary, and sentence structure.
Feedback system for typing, grammar, and vocabulary improvement.

Excluded Features:

Multiplayer functionality.
Advanced writing assistance tools (e.g., AI grammar checkers).

Section 3: System Architecture

Architecture Overview:

The game is structured in three main layers:

Game Engine:

Controls game flow and logic, managing levels and difficulty adjustments.
Implements the scoring mechanism based on typing speed, grammar accuracy, and vocabulary usage.
Tracks player progress, updating statistics as players complete challenges.

UI Layer:

Built with JavaFX for an interactive desktop experience.
Displays the typing and writing challenges, vocabulary quizzes, and progress feedback.
Offers a clean and user-friendly interface for navigating through different game sections.

Data Layer:

Stores user scores, progress history, and vocabulary data.
Utilizes SQLite to save and retrieve player information locally.
Enables the game to retain statistics and vocabulary mastery across sessions.

Section 4: Data Dictionary

The data dictionary provides a list of data entities and fields with definitions.

Field	Data Type	Description

user_id	Integer	Unique identifier for each player.
session_id	Integer	Unique identifier for each game session.
wpm_score	Integer	Words per minute score based on typing speed.
accuracy	Float	Accuracy percentage in typing tests.
grammar_score	Integer	Score from grammar-focused writing challenges.
vocab_progress	Text	List of vocabulary words learned.
last_played	Date	Timestamp of the last game session.
game_type	Text	Type of game (e.g., Typing Test, Vocabulary).

Section 5: Data Design

Data is stored in an SQLite database to track individual player statistics and performance history. The database is structured as follows:

User Statistics Table:

Tracks players’ typing speed, accuracy, grammar scores, and vocabulary usage.
Stores the player's ID, typing speed score, and accuracy for each session.


Game History Table:

Stores each session’s results, including timestamp, game type, and session-specific scores.
This database design enables the game to provide feedback on a user’s progress over time, offering insight into areas for improvement.

Section 6: User Interface Design

The user interface is organized into the following sections:

Main Menu:

Allows the player to start different game modes (Typing Speed Test, Writing Challenges, Vocabulary Quiz).
Displays options for viewing progress and exiting the game.


Typing Speed Test Screen:

Displays sentences or paragraphs for players to type within a time limit.
Shows words per minute (WPM) and accuracy as players complete the challenge.


Writing Proficiency Challenge Screen:

Presents grammar and sentence-building exercises.
Offers fill-in-the-blank sentences, sentence rearrangement, and error correction tasks.

Vocabulary Quiz Screen:

Introduces new words for spelling and sentence usage.
Provides feedback on vocabulary mastery and usage in sentences.

Progress Screen:

Displays a graph of typing speed and accuracy improvement.
Lists vocabulary words learned and grammar challenges completed successfully.



Feature Implementation: Typing Speed Test

Feature Description:

The Typing Speed Test allows players to improve typing speed and accuracy by presenting sentences to type within a time limit. WPM and accuracy are calculated after each test, and the player receives feedback on areas for improvement.


1. Difficulty Levels (Easy, Medium, Hard)
   
Purpose: To provide a customized experience by adjusting the complexity of sentences based on the user’s skill level.

Implementation:

The HTML file includes a dropdown (<select id="difficulty">) for selecting difficulty.
Sentences are stored in the sentences object in JavaScript, with each difficulty level (easy, medium, hard) containing sentences of varying length and complexity.

When the user starts the test by clicking "Start Test," the startTest function retrieves the selected difficulty level, chooses a random sentence from the corresponding array, and displays it for typing.


User Experience:

This feature makes the test accessible to beginners while also challenging more advanced typists. Easy mode includes simple sentences, while Hard mode has longer, complex sentences that require more focus and accuracy.



2. Real-Time Mistake Highlighting
Purpose: To provide immediate feedback on typing accuracy, helping users identify and correct mistakes as they type.

Implementation:

In the checkTyping function, each character typed is compared to the corresponding character in the correct sentence (currentSentence).

If there’s a mismatch, the incorrect character is highlighted in red, and details about the mistake (position, incorrect character, correct character) are stored in the mistakesList array.

Mistakes are shown in real-time within the displayed sentence, allowing the user to see exactly where they made errors.

User Experience:

By visually marking mistakes in red, users receive instant feedback, making it easier to correct errors and understand where they went wrong. This feature helps improve typing accuracy and encourages users to focus on precision.

3. WPM (Words Per Minute) and Accuracy Calculation
   
Purpose: To provide metrics that measure typing speed and accuracy, allowing users to track their performance.

Implementation:


WPM Calculation: The updateWPM function calculates WPM by dividing the number of correctly typed characters by 5 (assuming an average word length of 5 characters) and then dividing by the time elapsed in minutes.

Accuracy Calculation: The updateAccuracy function calculates accuracy as the percentage of correctly typed characters (excluding mistakes) out of the total characters typed.
Both metrics are updated in real-time as the user types.

User Experience:

WPM and accuracy scores provide immediate insight into typing performance. By tracking these metrics, users can set goals and observe improvement over time, making the test more engaging and motivating.


4. Progress Indicators for WPM and Accuracy
   
Purpose: To visually represent typing performance metrics with dynamic progress bars.


Implementation:

Each score (WPM and accuracy) has a visual progress bar implemented in CSS using the @keyframes progress animation.

The progress bars are displayed under each metric in the .results section and fill dynamically as the scores increase.



User Experience:

The animated progress bars provide a visually engaging way to track progress. As users type faster or more accurately, the progress bars fill up, giving a sense of accomplishment and making the test more visually stimulating.




5. Motivational Messages
   
Purpose: To encourage users and promote a positive mindset, regardless of their performance.

Implementation:

An array of motivational messages is stored in the motivationalMessages array.
After the test is finished (when the user clicks "Finish Test"), a random message is selected from the array and displayed at the end of the feedback in the displayFeedback function.



User Experience:

The motivational messages create a friendly and supportive environment. Regardless of how well they performed, users are encouraged to keep practicing, which boosts motivation and enhances the overall experience.



6. Responsive Design
   
Purpose: To ensure a smooth experience across different screen sizes, especially mobile devices.

Implementation:

CSS media queries adjust layout, font sizes, and spacing for smaller screens (up to 600px).
For instance, .container, h1, #typingInput, and .sentence have smaller font sizes and reduced padding on mobile, making the interface comfortable and readable on all devices.



User Experience:

Users can take the typing test on various devices without losing readability or functionality. The responsive design ensures that buttons, text, and input fields are appropriately sized for mobile, creating a seamless experience on any device.



7. Enhanced Visual Styling and Animations
   
Purpose: To make the application look more professional, modern, and engaging.

Implementation:

Background Gradient: A linear gradient background gives the page a modern look.
Hover and Focus Effects: Buttons and inputs have hover effects and color transitions, making interactions feel more dynamic and responsive.

Container Shadow and Animation: The main container has a subtle shadow and slightly lifts when hovered, adding depth to the interface.

Red Underline for Mistakes: Mistakes are not only highlighted in red but are also underlined with a dotted line to further emphasize errors.


User Experience:

These visual enhancements make the interface more appealing and interactive. Users are likely to feel more engaged and motivated to use the app due to its polished appearance and smooth animations.
8. Finish and Reset Test Options
Purpose: To give users control over the test and allow them to start over or end the test when they’re ready.


Implementation:

Finish Test: Clicking the "Finish Test" button ends the test and triggers the displayFeedback function, showing a detailed summary of WPM, accuracy, mistakes, and a motivational message.

Reset Test: The "Reset" button clears all fields and counters, setting the app back to its initial state.
User Experience:

Users have full control over the test. They can end the test whenever they feel ready to see their results or reset the test if they want to start over. This flexibility allows for a more user-centered and relaxed experience.

Summary

These features combine to create an advanced and engaging typing speed test application that provides real-time feedback, motivational messages, and detailed performance metrics. With responsive design, difficulty levels, visual animations, and mistake highlighting, the application offers a professional and enjoyable user experience across devices.
