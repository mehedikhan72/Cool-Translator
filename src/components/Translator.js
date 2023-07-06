import React, { useState, useEffect } from "react";



export default function Translator() {

  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [srcLang, setSrcLang] = useState("");
  const [targetLang, setTargetLang] = useState("");

  async function translate(){
    // translate the text on a button click(translate button)
    // store the text in the translatedText state
    // console.log the new translatedText state
    // make sure there is no errors and warnings in the console
    // use fetch api, and the .then method, don't use async await.
      const url = 'https://text-translator2.p.rapidapi.com/translate';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '434855273amshcbb16fe2b3d554ep132e8djsneb5ceb5416f8',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      },
      body: new URLSearchParams({
        source_language: srcLang,
        target_language: targetLang,
        text: text,
      })
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(response);
      console.log(result);
      setTranslatedText(result);
      console.log(translatedText);
      //document.getElementById("translationOutput").textContent=translatedText;
    } catch (error) {
      console.error(error);
    }
  
  }

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
        <button type="submit" onClick={translate}>Translate</button>
      </div>
      <p id="translationOutput"></p>
    </div>
  );
}

