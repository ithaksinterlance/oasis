import React, { useState } from 'react';

export default function OpenAi() {
  const [value, setValue] = useState('');
  const [prompt, setPrompt] = useState('');
  const [completion, setCompletion] = useState([]);
  function handleInput(e) {
    setValue(e.target.value);
  }
  async function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setPrompt(value);
      setCompletion('Loading...');
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: value }),
      });
      const data = await response.json();
      setValue('');
      setCompletion(data.result.choices[0].text);
    }
  }
  return (
    <div className="h-screen my-auto mx-auto">
      <div>
        <div className="text-5xl font-bold text-center">
          Please type your Prompt Here:
          <br />
          <input
            type="text"
            value={value}
            className="border-2 rounded-lg border-gray-200"
            onChange={handleInput}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div>Prompt: {prompt}</div>
        <div>Completion: {completion}</div>
      </div>
    </div>
  );
}
