import React, { Component } from 'react';
import './App.css';

import ValidationComponent from'./ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

/* 
*  Updated solution after seeing instructor code:
*       o Removed charList state and just left it as a variable
*       o Really no need for the length state...
*       o .join method and updating state text makes sense, but I wouldn't have thought of that
*     
*/

class App extends Component {
  state = {
    text: "",
    textLength: 0
  }

  changeTextHandler = (event) => {
    let newText = event.target.value;
    let len = newText.length;

    this.setState({
      text: newText,
      textLength: len
    });
  }

  deleteCharHandler = (characterIndex) => {
    const characters = this.state.text.split('');
    characters.splice(characterIndex, 1);
    const updatedText = characters.join('');
    this.setState({text: updatedText});
  }

  render() {
      let charList = this.state.text.split('').map( (character, index) => {
            return <CharComponent 
              click={() => this.deleteCharHandler(index)} 
              key={index}
              character={character} /> 
          });
      
    return (
      <div className="App">

        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type="text" onChange={this.changeTextHandler} value={this.state.text}/>
        <p>{this.state.text}</p>
        <p>Length: {this.state.textLength}</p>
      
        <ValidationComponent len={this.state.textLength} />
        {charList}
        
      </div>
    );
  }
}

export default App;
