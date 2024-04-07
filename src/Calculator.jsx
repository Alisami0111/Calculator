import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');

  const handleChange = (e) => setInput(input.concat(e.target.name));
  const clear = () => setInput('');
  const backspace = () => setInput(input.slice(0, -1));
  const calculate = () => {
    try {
      setInput(eval(input).toString()); // Note: eval() can be harmful. Consider a safer alternative for production apps.
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="bg-gray-600 max-w-xs mx-auto mt-20 p-5 border rounded-2xl shadow">
      <form>
        <input type="text" value={input} readOnly className="w-full p-3 mb-4 text-lg border rounded focus:outline-none" />
      </form>
      <div className="grid grid-cols-4 gap-4">
        <button onClick={clear} className="col-span-2 bg-red-500 text-white p-3 rounded" id="clear">Clear</button>
        <button onClick={backspace} className="bg-yellow-500 text-white p-3 rounded" id="backspace">C</button>
        <button name="/" onClick={handleChange} className="bg-gray-200 p-3 rounded">&divide;</button>
        {/* Numbers and operations */}
        <button name="7" onClick={handleChange} className="bg-gray-200 p-3 rounded">7</button>
        <button name="8" onClick={handleChange} className="bg-gray-200 p-3 rounded">8</button>
        <button name="9" onClick={handleChange} className="bg-gray-200 p-3 rounded">9</button>
        <button name="*" onClick={handleChange} className="bg-gray-200 p-3 rounded">&times;</button>
        <button name="4" onClick={handleChange} className="bg-gray-200 p-3 rounded">4</button>
        <button name="5" onClick={handleChange} className="bg-gray-200 p-3 rounded">5</button>
        <button name="6" onClick={handleChange} className="bg-gray-200 p-3 rounded">6</button>
        <button name="-" onClick={handleChange} className="bg-gray-200 p-3 rounded">&ndash;</button>
        <button name="1" onClick={handleChange} className="bg-gray-200 p-3 rounded">1</button>
        <button name="2" onClick={handleChange} className="bg-gray-200 p-3 rounded">2</button>
        <button name="3" onClick={handleChange} className="bg-gray-200 p-3 rounded">3</button>
        <button name="+" onClick={handleChange} className="bg-gray-200 p-3 rounded">+</button>
        <button name="0" onClick={handleChange} className="bg-gray-200 p-3 rounded">0</button>
        <button name="." onClick={handleChange} className="bg-gray-200 p-3 rounded">.</button>
        <button onClick={calculate} className="col-span-2 bg-green-500 text-white p-3 rounded" id="result">=</button>
      </div>
    </div>
  );
}

export default Calculator;
