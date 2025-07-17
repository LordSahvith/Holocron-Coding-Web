import { StrictMode, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const TreesContext = createContext();

export function useTrees() {
  return useContext(TreesContext);
}

const trees = [
  { id: 0, type: 'Maple' },
  { id: 1, type: 'Oak' },
  { id: 2, type: 'Family' },
  { id: 3, type: 'Component' },
];

createRoot(document.getElementById('root')).render(
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>
);
