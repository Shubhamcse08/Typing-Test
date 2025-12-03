import { Link } from "react-router-dom";
import { useTyping } from "../context/TypingContext";


const Home = () => {
  const { selectedTime, updateTestTime } = useTyping();

  const timeOptions = [
    { label: "15 sec", value: 15 },
    { label: "30 sec", value: 30 },
    { label: "60 sec", value: 60 },
  ];
  
  return (
    <div className="flex flex-col items-center gap-6 p-10  dark:text-white">
      <h1 className="text-4xl font-bold">Typing Speed Test</h1>

      <Link
        to="/test"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-xl hover:bg-blue-700 transition"
      >
        Start Test
      </Link>

      <div className="flex gap-4 mt-4">
        {timeOptions.map((t) => (
          <button
            key={t.value}
            onClick={() => updateTestTime(t.value)}
            className={`px-4 py-2 rounded-lg border text-lg transition 
              ${selectedTime === t.value 
                ? "bg-blue-600 text-white border-blue-600" 
                : "bg-white text-black border-gray-400 hover:bg-gray-100"
              }`}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
