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
      <div class="quote-text">
        <span id="text">{quote.quote}</span>
      </div>
      <div class="quote-author">
        <span id="author">- {quote.author}</span>
      </div>
      <a
        id="tweet-quote"
        className="button"
        target="_blank"
        rel="noreferrer"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          '"' + quote.quote + '" -' + quote.author
        )}`}
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
