const createLetterKeys = () => {
    const letterKeys = {};
    for (let index = 0; index < 26; index++) {
      let letter = String.fromCharCode(index + 65); 
      letterKeys[letter] = { isPartOfWord: undefined, isClicked: false };
    };
    return letterKeys;
};

const getBackgroundColor = (isPartOfWord) => {
  if(isPartOfWord == undefined){
    return 'bg-white';
  };
  return isPartOfWord ? 'bg-green-700' : 'bg-red-700';
};

export {
  createLetterKeys,
  getBackgroundColor
};