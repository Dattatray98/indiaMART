import React, { useEffect, useState, useRef } from 'react';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }

  interface SpeechRecognitionEvent extends Event {
    [x: string]: any;
    results: SpeechRecognitionResultList;
  }
}

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

const SearchBarFilters: React.FC = () => {
  const [query, setQuery] = useState('');
  const [allSuggestions, setAllSuggestions] = useState<string[]>([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const recognitionRef = useRef<SpeechRecognitionEvent | null>(null);
  const [isListening, setIsListening] = useState(false); // Track the listening state

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        const allProducts = Object.values(data).flat() as Product[];

        const suggestions: string[] = [];
        allProducts.forEach((item) => {
          if (item.title) suggestions.push(item.title.trim());
          if (item.description) {
            const words = item.description.trim().split(/\s+/);
            suggestions.push(...words); // add words from description
          }
        });

        const unique = Array.from(new Set(suggestions)).filter((text) => text.length > 1);
        setAllSuggestions(unique);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === '') {
      setFilteredSuggestions([]);
      return;
    }

    const words = value.toLowerCase().split(/\s+/);
    const lastWord = words[words.length - 1];

    const matches = allSuggestions.filter((text) =>
      text.toLowerCase().includes(lastWord)
    );

    setFilteredSuggestions(matches.slice(0, 10));
  };

  const handleSuggestionClick = (text: string) => {
    setQuery((prev) => {
      const parts = prev.trim().split(/\s+/);
      parts[parts.length - 1] = text;
      return parts.join(' ');
    });
    setFilteredSuggestions([]);
  };

  const handleVoiceSearch = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Your browser does not support voice recognition.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const spokenText = event.results[0][0].transcript;
      setQuery(spokenText);

      const matches = allSuggestions.filter((text) =>
        text.toLowerCase().includes(spokenText.toLowerCase())
      );
      setFilteredSuggestions(matches.slice(0, 10));
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
    };

    recognition.onend = () => {
      setIsListening(false); // Set listening state to false when recognition ends
    };

    recognition.start();
    recognitionRef.current = recognition;
    setIsListening(true); // Update listening state
  };

  const handleStopVoiceSearch = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop(); // Stop the speech recognition immediately
      recognitionRef.current = null; // Clear reference
      setIsListening(false); // Update the state to stop showing the listening icon
    }
  };

  return (
    <div className="relative w-[400px] p-3 border-l-1 h-[35px] flex items-center">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Enter Product/Service to search"
        className="bg-transparent w-full h-[35px] outline-none"
      />
      {!isListening ? (
        <img
          src="/google-voice.png"
          alt="voice search"
          className="w-[30px] h-[33px] cursor-pointer ml-2"
          onClick={handleVoiceSearch}
          title="Voice Search"
        />
      ) : (
        <img
          src="/closevoice.png"
          alt="close voice search"
          className="w-[30px] h-[33px] cursor-pointer ml-2"
          onClick={handleStopVoiceSearch}
          title="Stop Voice Search"
        />
      )}

      {filteredSuggestions.length > 0 && (
        <ul className="absolute top-10 z-10 w-full bg-white border border-gray-200 rounded-md mt-1 shadow-lg max-h-60 overflow-y-auto">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBarFilters;
