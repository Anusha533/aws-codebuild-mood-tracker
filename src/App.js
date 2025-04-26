import React, { useState, useEffect } from 'react';
import './App.css';

const moodData = {
  Happy: ["Keep smiling! 😊", "Today is a beautiful day!", "Your happiness lights up the world! 🌟"],
  Love: ["Love is powerful. 💖", "Spread the love!", "You are loved and cherished! 🌹"],
  Sad: ["It's okay to feel sad. 💧", "Tough times don’t last. Stay strong. 💪", "Better days are ahead! 🌈"],
  Angry: ["Take a deep breath. 😤", "It's okay to cool off. 🧊", "Let go of what you can't control."],
  Excited: ["The world is yours today! 🚀", "Ride the wave of excitement! 🌊", "Go chase your dreams! 🌟"],
  Tired: ["Rest is important. 💤", "Recharge and come back stronger!", "Take it easy today. 🌙"],
};

const phraseToMood = {
  "I'm very happy today": "Happy",
  "I'm feeling adored": "Love",
  "I'm feeling upset": "Sad",
  "I'm getting annoyed": "Angry",
  "I'm over the moon": "Excited",
  "I'm feel so drained": "Tired",
};

function App() {
  const [mood, setMood] = useState('');
  const [quote, setQuote] = useState('');
  const [history, setHistory] = useState([]);
  const [bgClass, setBgClass] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setBgClass('morning');
    else if (hour < 18) setBgClass('afternoon');
    else setBgClass('night');
  }, []);

  const selectPhrase = (phrase) => {
    const detectedMood = phraseToMood[phrase];
    const quotes = moodData[detectedMood];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setMood(detectedMood);
    setQuote(randomQuote);
    setHistory(prev => [...prev, { phrase, mood: detectedMood, quote: randomQuote, time: new Date().toLocaleTimeString() }]);
  };

  return (
    <div className={`App ${bgClass}`}>
      <h1>🌟🌈 VibeVerse 🌈🌟</h1>
      <p>Tell us how you feel right now!</p>
      <div className="phrase-container">
        {Object.keys(phraseToMood).map((phrase) => (
          <button
            key={phrase}
            onClick={() => selectPhrase(phrase)}
            className={mood === phraseToMood[phrase] ? 'selected' : ''}
          >
            {phrase}
          </button>
        ))}
      </div>

      {mood && (
        <div className="message-box">
          <h2>Detected Mood: {mood}</h2>
          <p>{quote}</p>
        </div>
      )}

      {history.length > 0 && (
        <div className="history-box">
          <h3>Mood History 📅</h3>
          <ul>
            {history.map((entry, index) => (
              <li key={index}>
                {entry.time} — {entry.phrase} ({entry.mood}) ➔ {entry.quote}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
