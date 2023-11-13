import { useState } from "react";
import quotes from "./assets/quotes.json";

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function Panel() {
  // Start with random quote
  const [quote, setQuote] = useState(getRandomQuote);

  const onButtonClick = () => {
    // Get random quote
    const randomQuote = getRandomQuote();

    // Update state
    setQuote(randomQuote);
  };

  return (
    <div id="quote-box">
      <p id="text">{quote.quote}</p>
      <p id="author">{quote.author}</p>
      <a
        id="tweet-quote"
        className="button"
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/intent/tweet"
      >
        Tweet Quote
      </a>
      <button id="new-quote" className="button" onClick={onButtonClick}>
        New Quote
      </button>
    </div>
  );
}

export default Panel;
