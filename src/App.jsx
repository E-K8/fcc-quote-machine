import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  }, []);

  let fetchNewQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  };

  return (
    <div className='container' id='quote-box'>
      <div id='text' className='quote'>
        {quote}
      </div>
      <div id='author' className='author'>
        -{author}-
      </div>
      <button id='new-quote' className='btn' onClick={fetchNewQuote}>
        New Quote
      </button>
      <a
        href='https://twitter.com/intent/tweet'
        id='tweet-quote'
        target='_blank'
      >
        Tweet Quote
      </a>
    </div>
  );
}

export default App;
