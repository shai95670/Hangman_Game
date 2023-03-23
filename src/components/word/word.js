const Word = ({ guessedWord }) => {

    return (
      <div className="flex gap-3 justify-center">
        {
          guessedWord.map((letter, index) => {
            let letterToDisplay = letter ? letter : " ";
            return <span className="w-8 border-black border-b-2" key={index}>{letterToDisplay}</span>;
          })
        }
      </div>
    );
  }
  
  export default Word;
  