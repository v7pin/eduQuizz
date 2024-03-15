import React, { useState } from 'react';
import crypto from 'crypto';

const QuestionForm = () => {
  const [questions, setQuestions] = useState([]);
  const [numQuestions, setNumQuestions] = useState(1);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [quizId, setQuizId] = useState('');

  const handleAddQuestion = () => {
    setQuestions([...questions, {
      questionText: '',
      answerOptions: [{ answerText: '', isCorrect: false }, { answerText: '', isCorrect: false }, { answerText: '', isCorrect: false }, { answerText: '', isCorrect: false }],
    }]);
    setNumQuestions(numQuestions + 1);
  };

  const handleQuestionChange = (event, index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].questionText = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleAnswerOptionChange = (event, index, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].answerOptions[optionIndex].answerText = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleCorrectAnswerChange = (event, index, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].answerOptions.forEach((option, idx) => {
      option.isCorrect = idx === optionIndex;
    });
    setQuestions(updatedQuestions);
  };

  const handleSubmit = () => {
    const quizData = {
      title: title,
      description: description,
      questions: questions.map((question) => ({
        questionText: question.questionText,
        answerOptions: question.answerOptions,
      })),
    };

    const jsonData = JSON.stringify(quizData, null, 2); // Indented JSON string for readability

    // Write JSON data to a file (assuming the 'quizzes' directory exists)
    const filePath = `quizzes/${crypto.randomUUID()}.json`;
    fs.writeFileSync(filePath, jsonData);

    // Set quiz ID
    setQuizId(filePath);

    // Optional: Reset form fields after saving
    setTitle('');
    setDescription('');
    setQuestions([]);
    setNumQuestions(1);
  };

  return (
    <div className="flex justify-between max-w-xl mx-auto mt-10 p-6 bg-sky-100 rounded-lg shadow-md">
      <div className="w-2/3">
        <h2 className="text-xl font-bold mb-4">Quiz Maker</h2>
        <label className="block mb-2">
          Title:
          <input
            className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label className="block mb-2">
          Description:
          <textarea
            className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <label className="block mb-2">
          Number of Questions:
          <input
            className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            type="number"
            min="1"
            value={numQuestions}
            onChange={(event) => setNumQuestions(parseInt(event.target.value))}
          />
        </label>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
          onClick={handleAddQuestion}
        >
          Add Question
        </button>
        {questions.map((question, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-bold mb-2">Question {index + 1}</h3>
            <textarea
              className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={question.questionText}
              onChange={(event) => handleQuestionChange(event, index)}
              placeholder="Enter your question here"
            />
            <h4 className="text-md font-semibold mt-2">Answer Options:</h4>
            {question.answerOptions.map((option, optionIndex) => (
              <div key={optionIndex} className="flex items-center mt-2">
                <input
                  className="mr-2"
                  type="text"
                  value={option.answerText}
                  onChange={(event) => handleAnswerOptionChange(event, index, optionIndex)}
                  placeholder={`Option ${optionIndex + 1}`}
                />
                <label className="text-sm">
                  <input
                    type="radio"
                    checked={option.isCorrect}
                    onChange={(event) => handleCorrectAnswerChange(event, index, optionIndex)}
                  />
                  <span className="ml-1">Correct Answer</span>
                </label>
              </div>
            ))}
          </div>
        ))}
        {numQuestions > 1 && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
          >
            Save Quiz
          </button>
        )}
      </div>
      <div className="w-1/3 flex flex-col justify-between items-center py-6 px-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-bold mb-2">Quiz ID</h3>
        <p className="text-gray-600">{quizId}</p>
      </div>
    </div>
  );
};

export default QuestionForm;
