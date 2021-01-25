import { useState } from 'react';
import { useOnKeyPress } from './hooks/useOnKeyPress';
import { useMultipleKeyPress } from './hooks/useMultipleKeyPress';

function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);

  const submitHandler = () => {
    setList([...list, value]);
    setValue('');
  };

  useOnKeyPress('Enter', submitHandler);
  // useOnKeyPress(() => setValue(''), 'Delete');
  useMultipleKeyPress(submitHandler, ['Enter']);

  return (
    <div className='App'>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={submitHandler}>Submit</button>
      <ol>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
