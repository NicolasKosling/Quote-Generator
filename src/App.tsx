import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Dice5, Copy } from "lucide-react";

const QuoteDisplay = ({ quotes }: { quotes: string[] }) => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [previousIndex, setPreviousIndex] = useState(0);

  const generateRandomQuote = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === previousIndex);

    setCurrentQuote(quotes[randomIndex]);
    setPreviousIndex(randomIndex);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentQuote).then(() => {
      toast.success("Quote copied to clipboard!");
    });
  };

  return (
    <div className="container">
      <div className="card">
        <p className="advice">ADVICE {quotes.indexOf(currentQuote) + 1}</p>
        <p className="quote">"{currentQuote}"</p>
        <div className="divider">
          <button onClick={copyToClipboard} className="copy-button">
            <Copy size={20} />
          </button>
        </div>
        <div className="buttons">
          <button onClick={generateRandomQuote}>
            <Dice5 size={24} />
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={true}
      />
    </div>
  );
};

const RandomQuoteGenerator = () => {
  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "Great things never came from comfort zones.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "It always seems impossible until it’s done.",
    "Believe you can and you're halfway there.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "You miss 100% of the shots you don’t take.",
    "The best way to predict the future is to create it.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "We bleed purple and white; Anderlecht is more than a team, it's a family.",
    "Victory tastes sweeter when it's for Anderlecht!",
    "In the heart of Brussels, our pride shines the brightest.",
    "No matter the result, we stand united behind Anderlecht.",
    "Chanting loud, cheering proud, forever Anderlecht!",
    "We are the purple and white army, marching on to victory!",
    "Anderlecht till we die, we'll never say goodbye!",
    "From Constant Vanden Stock to Lotto Park, our legacy grows stronger.",
    "Purple and white runs through our veins—Anderlecht forever!",
    "True fans never falter; Anderlecht till the end!",
    "Our loyalty is eternal, our passion unshakable—For Anderlecht, always!",
  ];

  return <QuoteDisplay quotes={quotes} />;
};

export default RandomQuoteGenerator;
