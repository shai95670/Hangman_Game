import Key from '../key/key';

const KeyList = ({ onLetterClicked, letterKeys }) => {
  const getKeysToRender = () => {
    const keys = Object.entries(letterKeys).map(([key, value], index) => {
      const { isPartOfWord, isClicked } = value;
      return <Key isPartOfWord={isPartOfWord}
                  isClicked={isClicked}
                  letter={key}
                  onLetterClicked={onLetterClicked}
                  key={index}
              />;
    });
    return keys; 
  };
  return (
    <div className='flex flex-wrap gap-2 w-96 m-auto border-2 border-black p-3'>
      {
        getKeysToRender()
      }
    </div>
  );
}

export default KeyList;
