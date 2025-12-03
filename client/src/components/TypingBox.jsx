import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTyping } from "../context/TypingContext";

const TypingBox = () => {
  const { typedText, setTypedText, setIsStarted, timeLeft, resetTest} = useTyping();
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft === 0) {
      navigate("/result");
    }
  }, [timeLeft, navigate]);

  const handleRestart = () => {
    resetTest();
    setTimeout(() => inputRef.current.focus(), 50);
  };



  return (
    <div className="w-full flex flex-col gap-3 dark:text-white">
      <textarea
        value={typedText}
        onChange={(e) => {
          setIsStarted(true);
          setTypedText(e.target.value);
        }}
        disabled={timeLeft === 0}
        placeholder="Start typing..."
        className="w-full h-40 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      
      <div className="mt-2 flex justify-between">
        <p className="text-xl font-semibold">Time Left: {timeLeft}s</p>
        <div>
          <button
          onClick={handleRestart}
          className="bg-blue-500 text-white py-1.5 px-4 rounded-lg text-2xl font-medium 
               hover:bg-blue-600 transition inline-block"
        >
          Restart
        </button>
        </div>
      </div>

    </div>

  );
};

export default TypingBox;


