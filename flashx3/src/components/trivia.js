import React, { useState, useEffect } from 'react';
import logo from './LOGO.jpg'
import './trivia.css'
import background from './bg-img.png'

function Flashcards() {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
  };

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://quizapi.io/api/v1/questions?apiKey=wg4xtnxGeWu5dH1zwXuW3YLCPppngv0kciVNZT3z&amount=5');
        const data = await response.json();
        
        if (data.error) {
          throw new Error('Error fetching questions');
        }
        
        setQuestions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + questions.length) % questions.length);
  }

  const directHomePg = () => {
    window.location.href = "flashcard-type-directing-page.html";
  }

  if(loading)
  {
    return <div>Loading . . .</div>
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div>
      <div id = "header">
        <img src = {logo} alt = "Logo" />
        <h2>Trivia</h2>
      </div>
      <div style={{ ...backgroundStyle, position: 'fixed', zIndex: -1 }}></div>
      {questions.length === 0 ? (
        <div>No questions available.</div>
      ) : (
        <div className = "flashcard">
          <h3 style = {{marginTop: '70px', marginLeft: '50px'}}>{currentQuestion.question}</h3>
          <ul style = {{marginTop: '50px', marginLeft: '10px'}}>
            {Object.values(currentQuestion.answers).map(
              (answer,i) => answer && <li key = {i}>{answer}</li>
            )}
          </ul> 
        </div>
      )}
      <div className = "navigation-buttons">
        <button onClick = {handlePrev}>←</button>
        <button onClick = {handleNext}>→</button>
      </div>
      <div id = "homepage">
        <button onClick={directHomePg} style = {{right: '0px', position: 'absolute'}}>⏪ Home 🏠</button>
      </div>
    </div>
  );
}

export default Flashcards;
