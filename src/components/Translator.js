import React, { useState, useEffect } from "react";

export default function Translator() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [srcLang, setSrcLang] = useState("");
  const [targetLang, setTargetLang] = useState("");

  useEffect(() => {
    // translate the text on a button click(translate button)
    // store the text in the translatedText state
    // console.log the new translatedText state
    // make sure there is no errors and warnings in the console
    // use fetch api, and the .then method, don't use async await.
  }, [text, srcLang, targetLang]);

  return (
    <div>
      <h1>Your Cool Translator</h1>
      <h3>TODO: Add the form here, for text, src lang, and dest lang</h3>
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Enter text to translate"
          required
        ></input>
        <input
          onChange={(e) => setSrcLang(e.target.value)}
          value={srcLang}
          type="text"
          placeholder="src"
          required
        ></input>
        <input
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
          type="text"
          placeholder="target"
          required
        ></input>
        <button type="submit">Translate</button>
      </div>
      <p id="translationOutput"></p>
    </div>
  );
}
