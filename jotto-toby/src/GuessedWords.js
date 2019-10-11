import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  return(
    <div data-test="component-guessed-words">
      <h3>GuessedWords</h3>
      <br />
      {
        props.guessedWords.length === 0
          ? (
            <div data-test="component-start">
              <p>Start the game by guessing the word i'm thinking of!</p>
            </div>
          )
          : (
            <div data-test="component-table">

              {
                props.guessedWords.map(({ guessedWord: word, letterMatchCount: count }) => (
                  <tr key={word} data-test="component-table--guessedWord">
                    <td key={word}>{word}</td>
                    <td key={count}>{count}</td>
                  </tr>
                ))
              }
            </div>
          )
      }
    </div>
  )
}

const {
  arrayOf, shape, string, number,
} = PropTypes;
GuessedWords.propTypes = {
  guessedWords: arrayOf(
    shape({
      guessedWord: string.isRequired,
      letterMatchCount: number.isRequired,
    }),
  ).isRequired,
}

export default GuessedWords;
