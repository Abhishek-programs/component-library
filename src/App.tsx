import { useState } from 'react';
import './App.css';
import { Button, Label } from '../lib/main';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Label htmlFor='counter' className='label'>
        Count:
      </Label>
      <input
        id='counter'
        type='number'
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <Button
        className='button'
        onClick={() => setCount((c) => c + 1)}
        title='Increment'
      >
        +
      </Button>
    </>
  );
}

export default App;

