import React, { useState } from 'react';

const suggestionsList = [
  'React useState example',
  'JavaScript array methods',
  'TypeScript interfaces',
  'Node.js API tutorial',
  'pranav',
  'CSS Flexbox guide',
];

const SearchBarFilters: React.FC = () => {
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

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
        <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-md mt-1 shadow-lg max-h-60 overflow-y-auto">
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
