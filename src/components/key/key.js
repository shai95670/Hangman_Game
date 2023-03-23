import { getBackgroundColor } from "../../utils/utils";

const Key = ({ letter, onLetterClicked, isPartOfWord, isClicked }) => { 
  return (
    <button className={`border-2 border-black w-8 ${getBackgroundColor(isPartOfWord)}`}
     onClick={() => {onLetterClicked(letter)}}
     disabled={isClicked}
     >
      {letter}
    </button>
  );
};

export default Key;
