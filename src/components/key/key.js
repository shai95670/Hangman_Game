import { getBackgroundColor } from "../../utils/utils";

const Key = ({ letter, onLetterClicked, isPartOfWord, isClicked }) => { 
  return (
    <div className={`border-2 border-black w-8 ${getBackgroundColor(isPartOfWord)}`}
     onClick={() => {onLetterClicked(letter)}}
     disabled={isClicked}
     >
      {letter}
    </div>
  );
};

export default Key;
