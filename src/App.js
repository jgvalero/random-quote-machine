import { useState } from "react";

const quotes = ["quote1", "quote2", "quote3", "quote4", "quote5"];

function Panel() {
  // Start with random quote
  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  const onButtonClick = () => {
    // Get random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Update state
    setQuote(randomQuote);
  };
  return (
    <div id="quote-box">
      <p id="text">{quote}</p>
      <p id="author">- Author</p>
      <button id="new-quote" onClick={onButtonClick}>
        New Quote
      </button>
      <a id="tweet-quote" href="twitter.com/intent/tweet">
        Tweet Quote
      </a>
    </div>
  );
}

export default Panel;
