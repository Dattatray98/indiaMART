import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

const SearchBarFilters: React.FC = () => {
  const [query, setQuery] = useState('');
  const [suggestionsList, setSuggestionsList] = useState<string[]>([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  // Fetch JSON data on component mount
  useEffect(() => {
    fetch('/data.json') // Make sure data.json is inside /public folder
      .then((res) => res.json())
      .then((data) => {
        // Flatten all products into one array
        const allProducts = Object.values(data).flat() as Product[];
        const allTitles = allProducts.map((item) => item.title);
        setSuggestionsList(allTitles);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // Filter suggestions based on input
    const matches =
      value.trim() === ''
        ? []
        : suggestionsList.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
          );

    setFilteredSuggestions(matches);
  };

  const handleSuggestionClick = (text: string) => {
    setQuery(text);
    setFilteredSuggestions([]);
  };

  return (
    <div className="relative w-[360px] p-3 border-l-1 h-[35px] flex items-center">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Enter Product/Service to search"
        className="bg-transparent w-[400px] h-[35px] outline-none"
      />
      {filteredSuggestions.length > 0 && (
        <ul className="absolute top-8 z-10 w-full bg-white border border-gray-200 rounded-md mt-1 shadow-lg max-h-60 overflow-y-auto">
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
