import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Translator from "./Translator";

// Some noob tests. Don't bully me :(
describe("Translator", () => {
  it("should render the translator component", () => {
    render(<Translator />);
    const translatorElement = screen.getByText("Your Cool Translator");
    expect(translatorElement).toBeInTheDocument();
  });

  it("updates text state on input change", () => {
    render(<Translator />);

    const textInput = screen.getByPlaceholderText("Enter text to translate");
    fireEvent.change(textInput, { target: { value: "Hello" } });

    expect(textInput.value).toBe("Hello");
  });

  it("updates srcLang state on input change", () => {
    render(<Translator />);

    const srcLangInput = screen.getByPlaceholderText("Source Language");
    fireEvent.change(srcLangInput, { target: { value: "en" } });

    expect(srcLangInput.value).toBe("en");
  });

  it("updates targetLang state on input change", () => {
    render(<Translator />);

    const targetLangInput = screen.getByPlaceholderText("Target language");
    fireEvent.change(targetLangInput, { target: { value: "es" } });

    expect(targetLangInput.value).toBe("es");
  });

  it("displays loading state during API request", () => {
    // this automatically means the function is called
    render(<Translator />);

    const translateButton = screen.getByText("Translate");
    fireEvent.click(translateButton);
    const loadingElement = screen.getByTestId("loading-element");
    
    expect(loadingElement).toBeInTheDocument();
  });

  it("displays translated text after API request", async () => {
    render(<Translator />);
    const translateButton = screen.getByText("Translate");
    const translateMock = jest.fn(async () => {
      Translator.prototype.setTranslatedText("আপনি কেমন আছেন?");
      Translator.prototype.setLoading(false);
    });
    Translator.prototype.translate = translateMock;

    const inputField = screen.getByPlaceholderText("Enter text to translate");
    const srcLangInput = screen.getByPlaceholderText("Source Language");
    const targetLangInput = screen.getByPlaceholderText("Target language");

    fireEvent.change(inputField, { target: { value: "How are you?" } });
    fireEvent.change(srcLangInput, { target: { value: "en" } });
    fireEvent.change(targetLangInput, { target: { value: "bn" } });

    fireEvent.click(translateButton);

    const translatedTextElement = await screen.findByText(
      "Translated Text: আপনি কেমন আছেন?"
    );
    expect(translatedTextElement).toBeInTheDocument();
  });
});
