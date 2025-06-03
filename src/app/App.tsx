import { useState } from 'react';
import { Input } from 'shared/ui/inputs';
import './App.module.css';

import 'shared/styles/default-controls.css';
import 'shared/styles/default-palette.css';
import './styles/global.css';

function App() {
  const [input, setInput] = useState('Hello world');

  return (
    <>
      <Input
        placeholder="qwe"
        label="label"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onClear={() => setInput('')}
      />
    </>
  );
}

export default App;
