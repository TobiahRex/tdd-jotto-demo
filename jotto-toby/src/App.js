import React from 'react';
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div>Jotto Demo</div>
        <Congrats success={true} />
        <GuessedWords guessedWords={[
          { guessedWord: 'booya', letterMatchCount: 3 },
          { guessedWord: 'dude', letterMatchCount: 1 },
          { guessedWord: 'yo', letterMatchCount: 5 },
        ]}/>
      </div>
    );
  }
}
