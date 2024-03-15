import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowQuiz = () => {
  const [quizData, setQuizData] = useState(null);
  const [quizId, setQuizId] = useState('');
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        if (!quizId) return;
        setSearching(true);
        const response = await axios.get(`/api/quizzes/${quizId}`);
        setQuizData(response.data);
        setSearching(false);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
        setSearching(false);
      }
    };

    fetchQuizData();
  }, [quizId]);

  const handleInputChange = (event) => {
    setQuizId(event.target.value);
  };

  if (searching) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">{quizData?.title || 'Quiz Title'}</h2>
      <p className="mb-4">{quizData?.description || 'Quiz Description'}</p>
      <div className="mb-4">
        <input
          type="text"
          value={quizId}
          onChange={handleInputChange}
          placeholder="Enter Quiz ID"
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        <button onClick={() => setQuizId('')} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">
          Clear
        </button>
      </div>
      {quizData &&
        quizData.questions.map((question, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-bold mb-2">Question {index + 1}</h3>
            <p>{question.questionText}</p>
            <ul className="list-disc pl-6 mt-2">
              {question.answerOptions.map((option, optionIndex) => (
                <li key={optionIndex} className="mb-2">
                  <input
                    type="radio"
                    id={`option_${index}_${optionIndex}`}
                    name={`question_${index}`}
                    value={option.answerText}
                  />
                  <label htmlFor={`option_${index}_${optionIndex}`} className="ml-2">
                    {option.answerText}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default ShowQuiz;
