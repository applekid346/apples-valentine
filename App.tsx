// Import React
import React, { useState } from "react";

// Define the Page component
export default function Page() {
  // State variables
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  // Function to handle clicking "No" button
  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  // Function to get text for "No" button
  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "I'm crying now",
      "i loved you",
      "WE ARE NEVER EVER EVER GETTING BACK TOGETHER",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  // Apply background color to the body
  document.body.style.backgroundColor = "pink";

  // Render the component
  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Kissing bear"
          />
          <div className="text-4xl font-bold my-4">Yay I love you!!!</div>
        </>
      ) : (
        <>
          <h1 className="text-4xl my-4">Will you be my Valentine?</h1>
          <img
            style={{ width: "150px", height: "150px" }} // Adjust dimensions here
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Love bear with roses"
          />
          <div>
            <button
              className="yes-button" // Add class for "Yes" button
              style={{
                backgroundColor: "#4caf50",
                color: "white",
                borderRadius: "8px",
                fontSize: yesButtonSize,
              }} // Adjust inline styles for "Yes" button
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="no-button" // Add class for "No" button
              style={{
                backgroundColor: "#f44336",
                color: "white",
                borderRadius: "8px",
              }}
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
