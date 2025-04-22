import React, { useState, useEffect } from 'react';
import './App.css';

const moodData = {
  '😄': ["Keep smiling, you're doing great!", "Happiness is contagious! 😊", "Shine bright today! 🌟"],
  '😐': ["It’s okay to be neutral. Take it slow.", "Just breathe. 🧘", "A calm mind is a powerful mind."],
  '😢': ["You’re not alone. 💖", "Cry it out and reset.", "Better days are coming 🌈"],
  '😤': ["Channel the energy. You’ve got this!", "Take a deep breath. 🌬️", "Let it out, then let it go."],
  '😍': ["Love is in the air 💖", "Cherish the feeling!", "Romantic vibes only! 🌹"],
  '😴': ["Rest is productive 😌", "Nap = Recharge!", "Sweet dreams ahead 💤"],
  '😎': ["Confidence looks good on you! 😎", "You’re unstoppable 🔥", "Keep slayin’! 💪"],
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

  const selectMood = (emoji) => {
    const quotes = moodData[emoji];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setMood(emoji);
    setQuote(randomQuote);
    setHistory(prev => [...prev, { emoji, quote, time: new Date().toLocaleTimeString() }]);
  };

  return (
    <div className={`App ${bgClass}`}>
      <h1>🧠 MoodMate</h1>
      <p>How are you feeling right now?</p>
      <div className="emoji-container">
        {Object.keys(moodData).map((emoji) => (
          <button
            key={emoji}
            onClick={() => selectMood(emoji)}
            className={mood === emoji ? 'selected' : ''}
          >
            {emoji}
          </button>
        ))}
      </div>

      {mood && (
        <div className="message-box">
          <h2>Your Mood: {mood}</h2>
          <p>{quote}</p>
        </div>
      )}

      {history.length > 0 && (
        <div className="history-box">
          <h3>Mood History 📅</h3>
          <ul>
            {history.map((entry, index) => (
              <li key={index}>
                {entry.time} — {entry.emoji} {entry.quote}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
