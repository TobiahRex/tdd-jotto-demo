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
              <table className="table table-sm">
                <thead className="thead-light">
                  <tr>
                    <th>Guess</th>
                    <th>Matching Letters</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    props.guessedWords.map(({ guessedWord: word, letterMatchCount: count }) => (
                      <tr key={word} data-test="component-table--guessedWord">
                        <td key={word}>{word}</td>
                        <td key={count}>{count}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
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
