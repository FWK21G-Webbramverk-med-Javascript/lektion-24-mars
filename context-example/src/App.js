import './App.css';
import { createContext, useState } from 'react';

import DisplayUsername from './components/DisplayUsername';
import ChangeUsername from './components/ChangeUsername';

const UserContext = createContext(undefined);
const ChangeContext = createContext(undefined);

function App() {
  const [username, setUsername] = useState('');

  return (
    <div className="App">
      <UserContext.Provider value={ username }>
        <ChangeContext.Provider value={ setUsername }>
          <DisplayUsername />
          <ChangeUsername />
        </ChangeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export { App, UserContext, ChangeContext };
