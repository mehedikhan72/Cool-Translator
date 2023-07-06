import React from 'react'

export default function Translator() {

  return (
    <div>
        <div>Your Cool Translator</div>
        <h1>TODO: Add the form here, for text, src lang, and dest lang</h1>
        <div>
          <input type="text" id="textInput" placeholder="Enter text to translate" required></input>
          <input type="text" id="srcLanguage" placeholder='src' required></input>
          <input type="text" id="targetLanguage" placeholder='target' required></input>
          <button type="submit">Translate</button>
        </div>
        <p id="translationOutput"></p>
    </div>

  )
}
