import { useEffect, useState } from 'react';
import { WORDS } from '../../consts/consts';
import { createLetterKeys } from '../../utils/utils';
import Drawing from '../drawing/drawing';
import KeyList from '../keyList/keyList';
import Word from '../word/word';

const Game = ({ setIsNewGame }) => {
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  const [letterKeys, setLetterKeys] = useState(createLetterKeys());
  const [word] = useState(WORDS[randomIndex]);
  const [guessedWord, setGuessedWord] = useState(Array(word.length).fill(null));
  const [bodyParts, setBodyParts] = useState(['head', 'torso', 'leftarm', 'rightarm', 'leftleg', 'rightleg', 'leftfoot', 'rightfoot']); 
  
  useEffect(()=> { setIsNewGame(false); }, []);

  const onLetterClicked = (letter) => {
    if(word.includes(letter)) {
      const letterIndices = getLetterIndices(letter);
      fillGuessedWord(letterIndices, letter);
      setLetterKeys({...letterKeys, ...{ [letter]: { isClicked:true, isPartOfWord: true }}});
      return;
    };
    setLetterKeys({...letterKeys, ...{ [letter]: { isClicked:true, isPartOfWord: false }}});
    setBodyParts([...bodyParts.slice(0, bodyParts.length - 1)]);
  };

  const checkIfGameWon = (guessedWordCopy) => {
    if(!guessedWordCopy.includes(null)) {
      setIsNewGame(true);
    };
  };
  
  const fillGuessedWord = (indices, letter) => {
    const guessedWordCopy = [...guessedWord];
    indices.forEach((indice) => {
      guessedWordCopy[indice] = letter;
    });
    checkIfGameWon(guessedWordCopy);
    setGuessedWord([...guessedWordCopy]);
  };

  const getLetterIndices = (letter) => {
    const indices = [];
    let index = word.indexOf(letter);
    while (index !== -1) {
      indices.push(index);
      index = word.indexOf(letter, index + 1);
    }
    return indices;
  };

  return (
    <div className='flex flex-col gap-6 mt-4'>
        { 
          bodyParts.length ?
          <>
            <Drawing bodyParts={bodyParts}/>
            <Word guessedWord={guessedWord}/>
            <KeyList onLetterClicked={onLetterClicked} letterKeys={letterKeys}></KeyList>
          </> :
          <div className='relative top-4'>
            <h1 className='text-red-600 text-2xl mb-3'>Game Over</h1>
            <button onClick={() => { setIsNewGame(true) }} className='bg-slate-400 p-2 rounded'>Play Again</button>
          </div>
        }   
    </div>
  );
}

export default Game;
