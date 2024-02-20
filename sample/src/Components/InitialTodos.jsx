import React,{useState} from 'react'
import TextField  from '@mui/material/TextField';


const InitialTodos = () => {
  function createInitialTodos() {
    const initialTodos = [];
    for (let i = 0; i < 50; i++) {
      initialTodos.push({
        id: i,
        text: 'Item ' + (i + 1)
      });
    }
    return initialTodos;
  }

    const [todos, setTodos] = useState(createInitialTodos);
    const [text, setText] = useState('');

    return (
      <>
        <TextField>
          <input
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </TextField>
        <TextField>
          <button onClick={() => {
            setText('');
            setTodos([{
              id: todos.length,
              text: text
            }, ...todos]);
          }}>Add
          </button>
        </TextField>
        <ul>
          {todos.map(item => (
            <li key={item.id}>
              {item.text}
            </li>
          ))}
        </ul>
      </>
    );
  }
export default initialTodos




