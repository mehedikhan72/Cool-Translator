import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";

export default function Translator() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [srcLang, setSrcLang] = useState("");
  const [targetLang, setTargetLang] = useState("");
  const [loading, setLoading] = useState(false);

  async function translate() {
    // start the loading
    setLoading(true);

    const url = "https://text-translator2.p.rapidapi.com/translate";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "434855273amshcbb16fe2b3d554ep132e8djsneb5ceb5416f8",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      body: new URLSearchParams({
        source_language: srcLang,
        target_language: targetLang,
        text: text,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setTranslatedText(result.data.translatedText);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <div className="p-2">
      {loading && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75"
          data-testid="loading-element"
        >
          <ReactLoading type="bubbles" color="white" height={100} width={100} />
        </div>
      )}
      <p className="text-3xl font-bold text-center p-5">Your Cool Translator</p>
      <div className="flex flex-col justify-center items-center">
        <input
          className="w-full md:w-1/2 p-2 m-2 border-2 border-gray-400 rounded-md"
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Enter text to translate"
          required
        ></input>

        <div className="flex justify-center items-center w-full md:w-1/2">
          <input
            className="w-full md:w-1/2 p-2 mt-2 mr-2 border-2 border-gray-400 rounded-md"
            onChange={(e) => setSrcLang(e.target.value)}
            value={srcLang}
            type="text"
            placeholder="Source Language"
            required
          ></input>
          <input
            className="w-full md:w-1/2 p-2 mt-2 ml-2 border-2 border-gray-400 rounded-md"
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            type="text"
            placeholder="Target language"
            required
          ></input>
        </div>

        <button
          className="text-xl font-bold w-full md:w-1/2 border-2 bg-blue-600 text-white hover:bg-blue-500 p-2 mx-2 my-4 rounded-md bg"
          type="submit"
          onClick={translate}
        >
          Translate
        </button>
      </div>
      <div>
        {translatedText && (
          <p className="text-center text-xl font-bold m-5">
            Translated Text: {translatedText}
          </p>
        )}
      </div>
    </div>
  );
}
