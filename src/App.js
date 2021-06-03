import { useState, useCallback, useMemo } from 'react';
import './App.css';
import { ChildArea } from './ChildArea';

function App() {
  console.log('App');
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen((prev) => !prev);
  const onClickClose = useCallback(() => setOpen(false), []);
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);
  return (
    <div className='App'>
      <input type='text' value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea {...{ open, onClickClose }} />
    </div>
  );
}

export default App;
