import { createContext, useContext, useState, useEffect } from "react";
import paragraphs from "../assets/data/asset";

const TypingContext = createContext();
export default TypingContext;

export const TypingProvider = ({ children }) => {


 







  // Get a random paragraph
  const getRandomText = () => {
    return paragraphs[Math.floor(Math.random() * paragraphs.length)];
  };

  // States
  const [text, setText] = useState(getRandomText());
  const [typedText, setTypedText] = useState("");
  const [isStarted, setIsStarted] = useState(false);

  // Timer states
  const [selectedTime, setSelectedTime] = useState(60);
  const [timeLeft, setTimeLeft] = useState(60);

  // Results
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  // ----------------------
  // ⭐ Update Test Time (15 / 30 / 60)
  // ----------------------
  const updateTestTime = (seconds) => {
    setSelectedTime(seconds);
    setTimeLeft(seconds);     // IMPORTANT — update timeLeft
    setTypedText("");         // clear user input
    setIsStarted(false);      // stop if running
  };

  // ----------------------
  // ⏳ Timer Logic
  // ----------------------
  useEffect(() => {
    if (!isStarted) return;

    if (timeLeft === 0) {
      calculateResults();
      return;
    }

    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);

    return () => clearInterval(timer);
  }, [isStarted, timeLeft]);

  // ----------------------
  // 🧮 Final Result Calculations
  // ----------------------
  const calculateResults = () => {
  const correctChars = typedText
    .split("")
    .filter((c, i) => c === text[i]).length;

  const totalTimeUsed = selectedTime - timeLeft;

  if (totalTimeUsed === 0) {
    setWpm(0);
    setAccuracy(0);
    return;
  }

  const accuracyVal = typedText.length
    ? Math.round((correctChars / typedText.length) * 100)
    : 0;

  const wpmVal = Math.round((correctChars / 5) / (totalTimeUsed / 60));

  setAccuracy(accuracyVal);
  setWpm(wpmVal);
};


  // ----------------------
  // 🔄 Restart Test
  // ----------------------
  const resetTest = () => {
    setTypedText("");
    setTimeLeft(selectedTime); // reset to selected time
    setIsStarted(false);
    setAccuracy(0);
    setWpm(0);
    setText(getRandomText());
  };

  return (
    <TypingContext.Provider
      value={{
        text,
        typedText,
        setTypedText,
        isStarted,
        setIsStarted,
        timeLeft,
        wpm,
        accuracy,
        resetTest,
        selectedTime,
        updateTestTime,   // NEW FUNCTION HERE
       
      }}
    >
      {children}
    </TypingContext.Provider>
  );
};

export const useTyping = () => useContext(TypingContext);
