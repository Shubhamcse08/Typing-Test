import { useTyping } from "../context/TypingContext";

const Display = () => {
  const { text, typedText } = useTyping();

  return (
    <div className="p-5 bg-gray-100 rounded-xl leading-7 text-xl whitespace-pre-wrap font-mono">
      {text.split("").map((char, i) => {
        let classes = "";

        if (typedText[i]) {
          classes =
            typedText[i] === char
              ? "bg-green-300 text-green-500 rounded"
              : "bg-red-400 text-red-500 rounded";
        }

        return (
          <span key={i} className={classes}>
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default Display;
