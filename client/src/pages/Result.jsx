import { useTyping } from "../context/TypingContext";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const { wpm, accuracy, timeLeft, resetTest ,selectedTime } = useTyping();
  const navigate = useNavigate();

  const timeTaken = selectedTime - timeLeft;

  return (
    <div className="min-h-screen flex  justify-center px-6">
      <div className="bg-white p-10 rounded-2xl  w-full max-w-md text-center dark:bg-gray-800 dark:text-white">

        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          Typing Test Result
        </h1>

        {/* Stats Box */}
        <div className="space-y-4 mb-8">
          <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
            <p className="text-lg font-semibold text-gray-700">WPM</p>
            <p className="text-3xl font-bold text-blue-600">{wpm}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
            <p className="text-lg font-semibold text-gray-700">Accuracy</p>
            <p className="text-3xl font-bold text-green-600">{accuracy}%</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
            <p className="text-lg font-semibold text-gray-700">Time Taken</p>
            <p className="text-3xl font-bold text-purple-600">{timeTaken}s</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <button
            onClick={() => {
              resetTest();
              navigate("/test");
            }}
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold"
          >
            Restart Test
          </button>

          <button
            onClick={() => {
              resetTest();
              navigate("/");
            }}
            className="w-full py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-xl font-semibold"
          >
            Go to Home
          </button>
        </div>

      </div>
    </div>
  );
};

export default Result;
